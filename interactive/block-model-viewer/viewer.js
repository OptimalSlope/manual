import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const container = document.getElementById("viewer");
const status = document.getElementById("status");
const legend = document.getElementById("legend");

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x06164d);

const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 1, 100000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(container.clientWidth, container.clientHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.outputColorSpace = THREE.SRGBColorSpace;
container.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.screenSpacePanning = true;

const grid = new THREE.GridHelper(3000, 30, 0x00ff66, 0x006633);
grid.visible = false;
scene.add(grid);

const axes = new THREE.AxesHelper(700);
scene.add(axes);

let blockMesh = null;
let wireMesh = null;
let modelSize = new THREE.Vector3(1000, 1000, 1000);

// Edit these Z bands to match your model's slope-angle schedule.
const slopeBands = [
  { zMin: 1780, zMax: Infinity, angle: 55, label: "55°", color: 0xff4040 },
  { zMin: 1420, zMax: 1780, angle: 45, label: "45°", color: 0x38f2ff },
  { zMin: 1300, zMax: 1420, angle: 35, label: "35°", color: 0x66cc33 },
  { zMin: -Infinity, zMax: 1300, angle: 25, label: "25°", color: 0x8b55ff }
];

function getBandForZ(worldZ) {
  for (const band of slopeBands) {
    if (worldZ >= band.zMin && worldZ < band.zMax) return band;
  }
  return slopeBands[slopeBands.length - 1];
}

function updateLegend() {
  legend.innerHTML = "<strong>Slope angle colours (derived from Z bands)</strong>" +
    slopeBands.map(band => {
      const hex = "#" + band.color.toString(16).padStart(6, "0");
      const rangeText = `${band.zMin === -Infinity ? "-∞" : band.zMin} to ${band.zMax === Infinity ? "∞" : band.zMax}`;
      return `<div class="legend-row"><span class="swatch" style="background:${hex}"></span>${band.label} (Z ${rangeText})</div>`;
    }).join("");
}

async function loadBlocks() {
  const response = await fetch("./data/blocks_coarse.json");
  if (!response.ok) throw new Error(`Failed to load JSON: ${response.status}`);

  const data = await response.json();
  const blocks = data.blocks;
  updateLegend();

  status.textContent = `Rendering ${blocks.length.toLocaleString()} filled blocks...`;

  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const fillMaterial = new THREE.MeshBasicMaterial({
    vertexColors: true,
    toneMapped: false
  });
  const wireMaterial = new THREE.MeshBasicMaterial({
    color: 0x111111,
    wireframe: true,
    transparent: true,
    opacity: 0.30,
    toneMapped: false
  });

  blockMesh = new THREE.InstancedMesh(geometry, fillMaterial, blocks.length);
  wireMesh = new THREE.InstancedMesh(geometry, wireMaterial, blocks.length);

  const matrixFill = new THREE.Matrix4();
  const matrixWire = new THREE.Matrix4();
  const position = new THREE.Vector3();
  const scale = new THREE.Vector3();
  const scaleWire = new THREE.Vector3();
  const quaternion = new THREE.Quaternion();

  const min = new THREE.Vector3(Infinity, Infinity, Infinity);
  const max = new THREE.Vector3(-Infinity, -Infinity, -Infinity);

  blocks.forEach((b, i) => {
    position.set(b.x, b.y, b.z);
    scale.set(b.dx, b.dy, b.dz);
    scaleWire.set(b.dx * 1.002, b.dy * 1.002, b.dz * 1.002);

    matrixFill.compose(position, quaternion, scale);
    matrixWire.compose(position, quaternion, scaleWire);

    blockMesh.setMatrixAt(i, matrixFill);
    wireMesh.setMatrixAt(i, matrixWire);

    const band = getBandForZ(b.worldZ);
    blockMesh.setColorAt(i, new THREE.Color(band.color));

    min.min(position);
    max.max(position);
  });

  blockMesh.instanceMatrix.needsUpdate = true;
  blockMesh.instanceColor.needsUpdate = true;
  wireMesh.instanceMatrix.needsUpdate = true;

  scene.add(blockMesh);
  scene.add(wireMesh);

  modelSize = max.clone().sub(min);
  resetCameraToModel();

  status.textContent = `Showing ${blocks.length.toLocaleString()} filled display blocks from ${data.totalRows.toLocaleString()} original blocks. Colours are assigned from Z-based slope-angle bands.`;
}

function resetCameraToModel() {
  const maxDim = Math.max(modelSize.x, modelSize.y, modelSize.z, 1);
  camera.position.set(maxDim * 0.75, -maxDim * 1.1, maxDim * 0.55);
  camera.near = maxDim / 1000;
  camera.far = maxDim * 20;
  camera.updateProjectionMatrix();
  controls.target.set(0, 0, 0);
  controls.update();
}

document.getElementById("resetView").addEventListener("click", resetCameraToModel);
document.getElementById("toggleGrid").addEventListener("change", e => { grid.visible = e.target.checked; });
document.getElementById("toggleAxes").addEventListener("change", e => { axes.visible = e.target.checked; });
document.getElementById("toggleEdges").addEventListener("change", e => { if (wireMesh) wireMesh.visible = e.target.checked; });

window.addEventListener("resize", () => {
  camera.aspect = container.clientWidth / container.clientHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(container.clientWidth, container.clientHeight);
});

loadBlocks().catch(error => {
  console.error(error);
  status.textContent = error.message;
});

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}
animate();
