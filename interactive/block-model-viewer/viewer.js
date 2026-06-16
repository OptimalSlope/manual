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
container.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.screenSpacePanning = true;

scene.add(new THREE.AmbientLight(0xffffff, 1.8));
const light = new THREE.DirectionalLight(0xffffff, 1.8);
light.position.set(1000, -1000, 1800);
scene.add(light);

const grid = new THREE.GridHelper(3000, 30, 0x00ff66, 0x006633);
grid.visible = false;
scene.add(grid);

const axes = new THREE.AxesHelper(700);
scene.add(axes);

let blockMesh = null;
let edgeMesh = null;
let modelSize = new THREE.Vector3(1000, 1000, 1000);

const angleClasses = [
  { min: -Infinity, max: 25, label: "< 25 deg", color: 0x2c7bb6 },
  { min: 25, max: 35, label: "25-35 deg", color: 0x00a6ca },
  { min: 35, max: 45, label: "35-45 deg", color: 0x90eb9d },
  { min: 45, max: 55, label: "45-55 deg", color: 0xf9d057 },
  { min: 55, max: 65, label: "55-65 deg", color: 0xf29e2e },
  { min: 65, max: Infinity, label: "> 65 deg", color: 0xd7191c }
];

function colourByAngle(angle) {
  for (const item of angleClasses) {
    if (angle >= item.min && angle < item.max) return new THREE.Color(item.color);
  }
  return new THREE.Color(0x999999);
}

function colourByZ(z, zMin, zMax) {
  const t = (z - zMin) / Math.max(zMax - zMin, 1);
  if (t > 0.76) return new THREE.Color(0xff2222);  // upper blocks
  if (t > 0.52) return new THREE.Color(0x00e5ff);  // middle blocks
  if (t > 0.28) return new THREE.Color(0x58d12f);  // lower middle
  return new THREE.Color(0x7a3cff);                // lower blocks
}

function updateLegend(mode) {
  if (mode === "angle") {
    legend.innerHTML = "<strong>Slope angle</strong><br>" +
      angleClasses.map(item => {
        const hex = "#" + item.color.toString(16).padStart(6, "0");
        return `<span class="legend-item"><span class="swatch" style="background:${hex}"></span>${item.label}</span>`;
      }).join("");
  } else {
    legend.innerHTML = "<strong>Colour mode:</strong> Z elevation. Add a <code>SlopeAngle</code> column to colour by slope angle.";
  }
}

async function loadBlocks() {
  const response = await fetch("./data/blocks_coarse.json");
  if (!response.ok) throw new Error(`Failed to load JSON: ${response.status}`);

  const data = await response.json();
  const blocks = data.blocks;
  const hasAngles = blocks.some(b => Number.isFinite(b.angle));
  updateLegend(hasAngles ? "angle" : "z");

  status.textContent = `Rendering ${blocks.length.toLocaleString()} coarsened filled blocks...`;

  const zValues = blocks.map(b => b.z);
  const zMin = Math.min(...zValues);
  const zMax = Math.max(...zValues);

  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshLambertMaterial({
    vertexColors: true,
    transparent: false
  });

  blockMesh = new THREE.InstancedMesh(geometry, material, blocks.length);
  blockMesh.instanceMatrix.setUsage(THREE.StaticDrawUsage);

  const edgeGeometry = new THREE.EdgesGeometry(geometry);
  const edgeMaterial = new THREE.LineBasicMaterial({
    color: 0x222222,
    transparent: true,
    opacity: 0.35
  });
  edgeMesh = new THREE.InstancedMesh(edgeGeometry, edgeMaterial, blocks.length);

  const matrix = new THREE.Matrix4();
  const position = new THREE.Vector3();
  const scale = new THREE.Vector3();
  const quaternion = new THREE.Quaternion();
  const min = new THREE.Vector3(Infinity, Infinity, Infinity);
  const max = new THREE.Vector3(-Infinity, -Infinity, -Infinity);

  blocks.forEach((b, i) => {
    position.set(b.x, b.y, b.z);
    scale.set(b.dx, b.dy, b.dz);
    matrix.compose(position, quaternion, scale);

    blockMesh.setMatrixAt(i, matrix);
    edgeMesh.setMatrixAt(i, matrix);
    blockMesh.setColorAt(i, hasAngles ? colourByAngle(b.angle) : colourByZ(b.z, zMin, zMax));

    min.min(position);
    max.max(position);
  });

  blockMesh.instanceColor.needsUpdate = true;
  scene.add(blockMesh);
  scene.add(edgeMesh);

  modelSize = max.clone().sub(min);
  resetCameraToModel();

  if (hasAngles) {
    status.textContent = `Showing ${blocks.length.toLocaleString()} coarsened blocks from ${data.totalRows.toLocaleString()} original blocks. Colours represent slope angle.`;
  } else {
    status.textContent = `Showing ${blocks.length.toLocaleString()} coarsened blocks from ${data.totalRows.toLocaleString()} original blocks. Colours are based on Z elevation.`;
  }
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
document.getElementById("toggleWire").addEventListener("change", e => { if (edgeMesh) edgeMesh.visible = e.target.checked; });

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
