import {
  Scene,
  ArcRotateCamera,
  HemisphericLight,
  Vector3,
} from "@babylonjs/core";

export function createScene(engine, canvas) {
  const scene = new Scene(engine);

  const camera = new ArcRotateCamera(
    "camera",
    0,
    Math.PI / 2.3,
    16,
    new Vector3(0, 1, 0),
    scene,
  );
  camera.attachControl(canvas, true);

  new HemisphericLight("light", new Vector3(0, 1, 0), scene);

  return scene;
}
