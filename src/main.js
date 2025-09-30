// Import the project's stylesheet (this file includes Tailwind via @import).
import "./style.css";

// Import the entire three.js library into the THREE namespace.
import * as THREE from "three";

// Import OrbitControls (mouse / touch camera controls) from three's addons.
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

// Create a new scene (container for objects, lights, etc).
const scene = new THREE.Scene();

// Create a perspective camera with:
const camera = new THREE.PerspectiveCamera(
  75, // - fov: 75 degrees
  window.innerWidth / window.innerHeight, // - aspect: window width / window height
  0.1, // - near clipping plane: 0.1
  1000 // - far clipping plane: 1000
);

// Create a box geometry with width=1, height=1, depth=1.
const geometry = new THREE.BoxGeometry(1, 1, 1);

// Create a basic material for the mesh.
const material = new THREE.MeshBasicMaterial({
  color: "orange",
  wireframe: true,
});

// Combine geometry + material into a mesh (the renderable object).
const cube = new THREE.Mesh(geometry, material);

// Add the cube mesh to the scene so it will be drawn.
scene.add(cube);

// Move the camera back along Z so the cube is visible (default at origin).
camera.position.z = 5;

// Try to find an existing <canvas> in the page; if none exists, create one and append it.
const canvas = document.querySelector("canvas");

// Create a WebGL renderer and bind it to the canvas element.
const renderer = new THREE.WebGLRenderer({ canvas });

// Set the renderer size to fill the window initially.
renderer.setSize(window.innerWidth, window.innerHeight);

// Update renderer and camera when the window is resized.
window.addEventListener("resize", () => {
  // Resize the renderer to the new window size.
  renderer.setSize(window.innerWidth, window.innerHeight);

  // Update the camera's aspect ratio and recompute projection matrix.
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});

// Create OrbitControls so the user can orbit/pan/zoom the camera with mouse/touch.
const controls = new OrbitControls(camera, renderer.domElement);

// Enable damping (inertia) for smoother control movements. Requires controls.update() in the loop.
controls.enableDamping = true;

// Animation loop: called roughly 60 times per second via requestAnimationFrame.
function animate() {
  window.requestAnimationFrame(animate); // Request the next frame.

  // Render the scene from the camera's point of view.
  renderer.render(scene, camera);

  // Rotate the cube a little bit on X and Y every frame.
  // cube.rotation.x += 0.01;
  // cube.rotation.y += 0.01;

  // Update the controls (applies damping/inertia).
  controls.update();
}

// Start the animation loop.
animate();

