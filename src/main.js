import "./style.css";
import { createEngine } from "./core/engine";
import { createScene } from "./core/sceneManager";
import { startGameLoop } from "./core/gameLoop";
import { updateSimulation } from "./simulation/systems/simulationSystem";
import { createPulleySystem } from "./rendering/objects/pulley/pulleyFactory";
import { createWeight } from "./rendering/objects/weight/createWeight";
import { updateRenderSystem } from "./rendering/systems/renderSystem";
import { createControlPanel } from "./ui/controlPanel";
import { createSupport } from "./rendering/objects/createSupport";
import { createRope } from "./rendering/objects/rope/createRope";
import { updateRope } from "./rendering/objects/rope/updateRope";

const canvas = document.getElementById("renderCanvas");

const engine = createEngine(canvas);

const scene = createScene(engine, canvas);
createControlPanel();
createSupport(scene);

const pulleys = createPulleySystem(scene, 2);

const weight = createWeight(scene);

const rope = createRope(scene, weight);

function update() {
  updateSimulation();

  updateRenderSystem(weight, pulleys);

  updateRope(rope, weight);
}

startGameLoop(engine, scene, update);
