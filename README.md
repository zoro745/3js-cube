# 3js-cube

A minimal Vite + Tailwind CSS + Three.js project that renders a simple interactive wireframe cube with orbit controls.

> Live preview:- <br> https://cube-3js.netlify.app/  

---

## About

This repository demonstrates a small, focused setup using:

- **Vite** for fast dev server and bundling  
- **Tailwind CSS** for styling utilities (imported via `style.css`)  
- **Three.js** for 3D rendering — renders an interactive wireframe cube with `OrbitControls`.

The page contains a canvas element and the Three.js scene is created and animated from `src/main.js`. See `index.html` for canvas element binding. 

---

## Project structure

my-3js-cube/ <br>
├─ index.html  # Canvas entry (binds to src/main.js). <br>
├─ package.json <br> 
├─ postcss.config.cjs <br> 
├─ tailwind.config.cjs <br> 
├─ src/ <br> 
│  ├─ main.js # Three.js scene, renderer, and animation. <br> 
│  └─ style.css # Tailwind + small canvas CSS <br>
└─ README.md 

---

## How it works — quick theory

### Scene, Camera, Renderer
- A THREE.Scene() is the container for all 3D objects. <br>
- A PerspectiveCamera simulates a human-like perspective with a field-of-view (FOV), aspect ratio, and near/far clipping planes. <br>
- The WebGLRenderer draws the scene into an HTML `canvas`. It’s linked to the page’s canvas and updates its size on `window.resize`. 

---

### Geometry + Material = Mesh
- BoxGeometry describes the cube’s vertices and faces.<br>
- MeshBasicMaterial is an unlit material; here it’s used with wireframe: true so the cube renders as lines.<br>
- Together, geometry + material form a Mesh (the cube).<br>

---

### Controls & Animation
- OrbitControls allow interactive camera movement with mouse/touch.
- requestAnimationFrame creates a smooth render loop that updates controls and re-renders the scene every frame.

---

## Customization tips
- Change cube color or material <br>
    ```javascript
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: false });
    ```

- Enable rotation animation <br>
    ```javascript
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    ```

- Set background color <br>
    ```javascript
    renderer.setClearColor(0x111111);
    ```