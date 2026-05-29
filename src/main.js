import "./style.css";

import { createEngine } from "./core/engine";
import { createScene } from "./core/sceneManager";
import { startGameLoop } from "./core/gameLoop";

import { simulationState } from "./simulation/state/simulationState";
import { updateSimulation } from "./simulation/systems/simulationSystem";

import { createPulleySystem } from "./rendering/objects/pulley/pulleyFactory";
import { createWeight } from "./rendering/objects/weight/createWeight";
import { createSupport } from "./rendering/objects/createSupport";

import { createRope } from "./rendering/objects/rope/createRope";
import { updateRope } from "./rendering/objects/rope/updateRope";

import { updateRenderSystem } from "./rendering/systems/renderSystem";

import { createControlPanel } from "./ui/controlPanel";

import { createWeightLabel } from "./rendering/ui/createWeightLabel";
import { updateWeightLabel } from "./rendering/ui/updateWeightLabel";

import { updatePulleyRotation } from "./rendering/animations/updatePulleyRotation";

const canvas = document.getElementById("renderCanvas");

const engine = createEngine(canvas);
const scene = createScene(engine, canvas);

createSupport(scene);

const weight = createWeight(scene);

const weightLabel = createWeightLabel(scene, weight);

let pulleys = [];
let rope = null;

function buildSystem() {
  // Eliminar poleas anteriores
  pulleys.forEach((pulley) => {
    pulley.dispose();
  });

  // Eliminar cuerda anterior
  if (rope) {
    rope.dispose();
  }

  // Crear nuevas poleas
  pulleys = createPulleySystem(scene, simulationState.pulleys);

  // Crear nueva cuerda
  rope = createRope(scene, weight);
}

// Crear sistema inicial
buildSystem();

// Crear UI
createControlPanel(buildSystem);

function update() {
  updateSimulation();

  updatePulleyRotation(pulleys, simulationState.movementSpeed);

  updateRenderSystem(weight, pulleys);

  updateWeightLabel(weightLabel);

  if (rope) {
    updateRope(rope, weight);
  }
}

startGameLoop(engine, scene, update);