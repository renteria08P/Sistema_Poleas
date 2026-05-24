import {
  Scene,
  ArcRotateCamera,
  HemisphericLight,
  Vector3,
  Color4,
} from "@babylonjs/core";

import { createPulley } from "../objects/pulley";
import { createWeight } from "../objects/weight";
import { createRope } from "../objects/rope";
import { createSupport } from "../objects/support";
import { setupControls } from "../controls/movementControls";

export const createPoleasScene = (engine, canvas) => {
  const scene = new Scene(engine);

  // Fondo
  scene.clearColor = new Color4(0.85, 0.9, 1, 1);

  // Cámara
  const camera = new ArcRotateCamera(
    "camera",
    Math.PI / 2,
    Math.PI / 3,
    15,
    new Vector3(0, 4, 0),
    scene,
  );

  camera.attachControl(canvas, true);

  camera.lowerRadiusLimit = 10;
  camera.upperRadiusLimit = 25;

  // Luz
  new HemisphericLight("light", new Vector3(0, 1, 0), scene);

  // Objetos
  const pulley = createPulley(scene);

  createSupport(scene);

  const weight = createWeight(scene);

  const ropeData = createRope(scene);

  // Controles
  setupControls(weight, ropeData, pulley, scene);

  return scene;
};
