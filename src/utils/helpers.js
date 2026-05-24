import {
  Scene,
  ArcRotateCamera,
  HemisphericLight,
  Vector3,
  MeshBuilder,
} from "@babylonjs/core";

import { createPulley } from "../objects/pulley";
import { createWeight } from "../objects/weight";
import { createRope } from "../objects/rope";
import { setupControls } from "../controls/movementControls";

export const createPoleasScene = (engine, canvas) => {
  const scene = new Scene(engine);

  // Cámara
  const camera = new ArcRotateCamera(
    "camera",
    Math.PI / 2,
    Math.PI / 3,
    15,
    new Vector3(0, 3, 0),
    scene,
  );

  camera.attachControl(canvas, true);

  // Luz
  new HemisphericLight("light", new Vector3(0, 1, 0), scene);

  // Piso
  MeshBuilder.CreateGround(
    "ground",
    {
      width: 20,
      height: 20,
    },
    scene,
  );

  // Objetos
  const pulley = createPulley(scene);

  const weight = createWeight(scene);

  const ropeData = createRope(scene, weight);

  // Controles
  setupControls(weight, ropeData, scene);

  return scene;
};
