import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const container = document.getElementById("viewer");
const status = document.getElementById("status");
const legend = document.getElementById("legend");

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x06164d);

const camera = new THREE.PerspectiveCamera(
  45,
  container.clientWidth / container.clientHeight,
  1,
  100000
);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(container.clientWidth, container.clientHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.setClearColor(0x06164d, 1);
container.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.screenSpacePanning = true;

const grid = new THREE.GridHelper(3000, 30, 0x00ff66, 0x006633);
grid.visible = false;
scene.add(grid);

const axes = new THREE.AxesHelper(700);
scene.add(axes);

let colourMeshes = [];
let edgeMeshes = [];
let modelSize = new THREE.Vector3(1000, 1000, 1000);

// Z bands used as slope-angle classes.
// Edit these limits and colours to match your actual slope-angle schedule.
const slopeBands = [
  { zMin: 1780, zMax: Infinity, label: "55°", color: 0xff3030 },
  { zMin: 1420, zMax: 1780, label: "45°", color: 0x00e5ff },
  { zMin: 1300, zMax: 1420, label: "35°", color: 0x66dd33 },
  { zMin: -Infinity, zMax: 1300, label: "25°", color: 0x8b55ff }
];

function getBandIndex(worldZ) {
  for (let i = 0; i < slopeBands.length; i++) {
    const band = slopeBands[i];
    if (worldZ >= band.zMin && worldZ < band.zMax) {
      return i;
    }
  }
  return slopeBands.length - 1;
}

function updateLegend(bandCounts) {
  legend.innerHTML =
    "<strong>Slope angle colours, derived from Z bands</strong>" +
    slopeBands.map((band, i) => {
      const hex = "#" + band.color.toString(16).padStart(6, "0");
      const rangeText = `${band.zMin === -Infinity ? "-∞" : band.zMin} to ${band.zMax === Infinity ? "∞" : band.zMax}`;
      const count = bandCounts ? bandCounts[i].toLocaleString() : "0";
      return `<div class="legend-row"><span class="swatch" style="background:${hex}"></span>${band.label} (Z ${rangeText}) — ${count} blocks</div>`;
    }).join("");
}

async function loadBlocks() {
  const response = await fetch("./data/blocks_coarse.json?v=band-meshes-1");
  if (!response.ok) {
    throw new Error(`Failed to load JSON: ${response.status}`);
  }

  const data = await response.json();
  const blocks = data.blocks;

  status.textContent = `Preparing ${blocks.length.toLocaleString()} filled blocks...`;

  const blocksByBand = slopeBands.map(() => []);
  blocks.forEach(block => {
    const index = getBandIndex(block.worldZ);
    blocksByBand[index].push(block);
  });

  const bandCounts = blocksByBand.map(items => items.length);
  updateLegend(bandCounts);

  const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
  const edgeGeometry = new THREE.BoxGeometry(1.006, 1.006, 1.006);

  const min = new THREE.Vector3(Infinity, Infinity, Infinity);
  const max = new THREE.Vector3(-Infinity, -Infinity, -Infinity);

  const matrix = new THREE.Matrix4();
  const position = new THREE.Vector3();
  const scale = new THREE.Vector3();
  const quaternion = new THREE.Quaternion();

  blocksByBand.forEach((bandBlocks, bandIndex) => {
    if (bandBlocks.length === 0) return;

    const band = slopeBands[bandIndex];

    // Separate material per band. This avoids any reliance on instance vertex colours.
    const fillMaterial = new THREE.MeshBasicMaterial({
      color: band.color,
      side: THREE.DoubleSide,
      toneMapped: false
    });

    const mesh = new THREE.InstancedMesh(boxGeometry, fillMaterial, bandBlocks.length);
    mesh.instanceMatrix.setUsage(THREE.StaticDrawUsage);

    const edgeMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true,
      transparent: true,
      opacity: 0.16,
      depthWrite: false,
      toneMapped: false
    });

    const edgeMesh = new THREE.InstancedMesh(edgeGeometry, edgeMaterial, bandBlocks.length);
    edgeMesh.instanceMatrix.setUsage(THREE.StaticDrawUsage);

    bandBlocks.forEach((b, i) => {
      position.set(b.x, b.y, b.z);
      scale.set(b.dx, b.dy, b.dz);
      matrix.compose(position, quaternion, scale);

      mesh.setMatrixAt(i, matrix);
      edgeMesh.setMatrixAt(i, matrix);

      min.min(position);
      max.max(position);
    });

    mesh.instanceMatrix.needsUpdate = true;
    edgeMesh.instanceMatrix.needsUpdate = true;

    scene.add(mesh);
    scene.add(edgeMesh);

    colourMeshes.push(mesh);
    edgeMeshes.push(edgeMesh);
  });

  modelSize = max.clone().sub(min);
  resetCameraToModel();

  status.textContent =
    `Showing ${blocks.length.toLocaleString()} display blocks from ${data.totalRows.toLocaleString()} original blocks. Separate colour mesh per slope-angle band.`;
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

document.getElementById("toggleGrid").addEventListener("change", e => {
  grid.visible = e.target.checked;
});

document.getElementById("toggleAxes").addEventListener("change", e => {
  axes.visible = e.target.checked;
});

document.getElementById("toggleEdges").addEventListener("change", e => {
  edgeMeshes.forEach(mesh => {
    mesh.visible = e.target.checked;
  });
});

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
