import { Engine } from "@babylonjs/core";

import { createPoleasScene } from "./scenes/poleasScene";

const canvas = document.getElementById("renderCanvas");

const engine = new Engine(canvas, true);

const scene = createPoleasScene(engine, canvas);

engine.runRenderLoop(() => {
  scene.render();
});

window.addEventListener("resize", () => {
  engine.resize();
});
