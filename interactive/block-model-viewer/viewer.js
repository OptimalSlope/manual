import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const container = document.getElementById("viewer");
const status = document.getElementById("status");
const legend = document.getElementById("legend");

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xaebdcb);

const camera = new THREE.PerspectiveCamera(
  45,
  container.clientWidth / container.clientHeight,
  1,
  100000
);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(container.clientWidth, container.clientHeight);
renderer.setPixelRatio(window.devicePixelRatio);
container.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.screenSpacePanning = true;

scene.add(new THREE.AmbientLight(0xffffff, 1.2));

const light = new THREE.DirectionalLight(0xffffff, 2.0);
light.position.set(1000, -1000, 1500);
scene.add(light);

const grid = new THREE.GridHelper(2500, 25, 0x334455, 0x667788);
scene.add(grid);

const axes = new THREE.AxesHelper(500);
scene.add(axes);

let blockMesh = null;
let modelSize = new THREE.Vector3(1000, 1000, 1000);

const angleClasses = [
  { min: -Infinity, max: 25, label: "< 25°", color: 0x2c7bb6 },
  { min: 25, max: 35, label: "25-35°", color: 0x00a6ca },
  { min: 35, max: 45, label: "35-45°", color: 0x90eb9d },
  { min: 45, max: 55, label: "45-55°", color: 0xf9d057 },
  { min: 55, max: 65, label: "55-65°", color: 0xf29e2e },
  { min: 65, max: Infinity, label: "> 65°", color: 0xd7191c }
];

function colourByAngle(angle) {
  for (const item of angleClasses) {
    if (angle >= item.min && angle < item.max) {
      return new THREE.Color(item.color);
    }
  }
  return new THREE.Color(0x999999);
}

function colourByZ(z, zMin, zMax) {
  const t = (z - zMin) / Math.max(zMax - zMin, 1);
  const color = new THREE.Color();
  color.setHSL(0.62 - 0.45 * t, 0.85, 0.55);
  return color;
}

function updateLegend(mode) {
  if (mode === "angle") {
    legend.innerHTML =
      "<strong>Slope angle</strong><br>" +
      angleClasses.map(item => {
        const hex = "#" + item.color.toString(16).padStart(6, "0");
        return `<span class="legend-item"><span class="swatch" style="background:${hex}"></span>${item.label}</span>`;
      }).join("");
  } else {
    legend.innerHTML = "<strong>Colour mode:</strong> Z elevation. Add a <code>SlopeAngle</code> column to the CSV to colour blocks by slope angle.";
  }
}

async function loadBlocks() {
  const response = await fetch("./data/blocks_sample.json");
  if (!response.ok) {
    throw new Error(`Failed to load JSON: ${response.status}`);
  }

  const data = await response.json();
  const blocks = data.blocks;

  const hasAngles = blocks.some(b => Number.isFinite(b.angle));
  const colorMode = hasAngles ? "angle" : "z";
  updateLegend(colorMode);

  status.textContent = `Rendering ${blocks.length.toLocaleString()} sampled blocks from ${data.totalRows.toLocaleString()} total blocks...`;

  const zValues = blocks.map(b => b.z);
  const zMin = Math.min(...zValues);
  const zMax = Math.max(...zValues);

  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshStandardMaterial({
    vertexColors: true,
    roughness: 0.8,
    metalness: 0.0,
    transparent: true,
    opacity: 0.90
  });

  blockMesh = new THREE.InstancedMesh(geometry, material, blocks.length);
  blockMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);

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

    const color = hasAngles ? colourByAngle(b.angle) : colourByZ(b.z, zMin, zMax);
    blockMesh.setColorAt(i, color);

    min.min(position);
    max.max(position);
  });

  scene.add(blockMesh);

  modelSize = max.clone().sub(min);
  resetCameraToModel();

  if (hasAngles) {
    status.textContent = `Showing ${blocks.length.toLocaleString()} sampled blocks from ${data.totalRows.toLocaleString()} total blocks. Colours represent slope angle classes.`;
  } else {
    status.textContent = `Showing ${blocks.length.toLocaleString()} sampled blocks from ${data.totalRows.toLocaleString()} total blocks. No slope angle column found, so colours are based on Z elevation.`;
  }
}

function resetCameraToModel() {
  const maxDim = Math.max(modelSize.x, modelSize.y, modelSize.z, 1);
  camera.position.set(maxDim * 0.8, -maxDim * 1.2, maxDim * 0.7);
  camera.near = maxDim / 1000;
  camera.far = maxDim * 20;
  camera.updateProjectionMatrix();

  controls.target.set(0, 0, 0);
  controls.update();
}

document.getElementById("resetView").addEventListener("click", resetCameraToModel);

document.getElementById("toggleGrid").addEventListener("change", (event) => {
  grid.visible = event.target.checked;
});

document.getElementById("toggleAxes").addEventListener("change", (event) => {
  axes.visible = event.target.checked;
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
