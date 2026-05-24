import { MeshBuilder, StandardMaterial, Color3 } from "@babylonjs/core";

export const createSupport = (scene) => {
  const material = new StandardMaterial("supportMaterial", scene);

  material.diffuseColor = new Color3(0.6, 0.4, 0.2);

  // barra superior
  const topBar = MeshBuilder.CreateBox(
    "topBar",
    {
      width: 5,
      height: 0.3,
      depth: 0.3,
    },
    scene,
  );

  topBar.position.y = 8;

  topBar.material = material;

  // cuerda pequeña arriba
  const hook = MeshBuilder.CreateCylinder(
    "hook",
    {
      height: 1,
      diameter: 0.08,
    },
    scene,
  );

  hook.position.y = 7.3;

  hook.material = material;
};
