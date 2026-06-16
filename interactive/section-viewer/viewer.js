import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const container = document.getElementById("viewer");

const params = new URLSearchParams(window.location.search);

// Default model path. Replace this with your model name if needed.
// Example: /manual/assets/models/sections/section.glb
const defaultModel = "assets/models/sections/out_glb.glb";

// You can also pass a model in the URL:
// /manual/interactive/section-viewer/?model=../../assets/models/sections/my-section.glb
const modelPath = params.get("model") || defaultModel;

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xaebdcb);

const camera = new THREE.PerspectiveCamera(
  45,
  container.clientWidth / container.clientHeight,
  0.1,
  100000
);

camera.position.set(0, -300, 200);

const renderer = new THREE.WebGLRenderer({
  antialias: true,
  alpha: false
});

renderer.setSize(container.clientWidth, container.clientHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.outputColorSpace = THREE.SRGBColorSpace;
container.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.08;
controls.screenSpacePanning = true;

const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
scene.add(ambientLight);

const directionalLight1 = new THREE.DirectionalLight(0xffffff, 2.0);
directionalLight1.position.set(100, -100, 200);
scene.add(directionalLight1);

const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.8);
directionalLight2.position.set(-100, 100, -100);
scene.add(directionalLight2);

const grid = new THREE.GridHelper(500, 20, 0x334455, 0x667788);
scene.add(grid);

const axes = new THREE.AxesHelper(100);
scene.add(axes);

let loadedModel = null;
let modelCenter = new THREE.Vector3(0, 0, 0);
let modelSize = new THREE.Vector3(100, 100, 100);

function resetCameraToModel() {
  const maxDim = Math.max(modelSize.x, modelSize.y, modelSize.z, 1);

  camera.position.set(0, -maxDim * 1.8, maxDim * 0.9);
  camera.near = maxDim / 1000;
  camera.far = maxDim * 100;
  camera.updateProjectionMatrix();

  controls.target.set(0, 0, 0);
  controls.update();
}

const loader = new GLTFLoader();

loader.load(
  modelPath,
  function (gltf) {
    loadedModel = gltf.scene;
    scene.add(loadedModel);

    const box = new THREE.Box3().setFromObject(loadedModel);
    modelCenter = box.getCenter(new THREE.Vector3());
    modelSize = box.getSize(new THREE.Vector3());

    loadedModel.position.sub(modelCenter);

    resetCameraToModel();
  },
  function (xhr) {
    if (xhr.total > 0) {
      console.log(`Model loading: ${(xhr.loaded / xhr.total * 100).toFixed(0)}%`);
    }
  },
  function (error) {
    console.error("Error loading model:", error);

    const message = document.createElement("div");
    message.style.position = "absolute";
    message.style.left = "50%";
    message.style.top = "50%";
    message.style.transform = "translate(-50%, -50%)";
    message.style.background = "rgba(255,255,255,0.9)";
    message.style.padding = "16px";
    message.style.borderRadius = "6px";
    message.style.fontFamily = "Arial, sans-serif";
    message.innerHTML = `
      <strong>Model failed to load.</strong><br>
      Check that the model exists at:<br>
      <code>${modelPath}</code><br><br>
      If using .gltf, also upload the .bin file and textures.
    `;
    document.body.appendChild(message);
  }
);

document.getElementById("resetView").addEventListener("click", resetCameraToModel);

document.getElementById("toggleGrid").addEventListener("change", function (event) {
  grid.visible = event.target.checked;
});

document.getElementById("toggleAxes").addEventListener("change", function (event) {
  axes.visible = event.target.checked;
});

window.addEventListener("resize", function () {
  camera.aspect = container.clientWidth / container.clientHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(container.clientWidth, container.clientHeight);
});

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

animate();
