import { MeshBuilder, StandardMaterial, Color3 } from "@babylonjs/core";

export const createWeight = (scene) => {
  const weight = MeshBuilder.CreateBox(
    "weight",
    {
      size: 1.5,
    },
    scene,
  );

  weight.position.x = 0;

  weight.position.y = 1.2;

  weight.position.z = 0.2;

  const material = new StandardMaterial("weightMaterial", scene);

  material.diffuseColor = new Color3(0.8, 0.15, 0.15);

  weight.material = material;
  weight.receiveShadows = true;

  return weight;
};
