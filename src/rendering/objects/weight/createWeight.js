import {
  MeshBuilder,
  StandardMaterial,
  Color3,
  Vector3,
} from "@babylonjs/core";

export function createWeight(scene) {
  const weight = MeshBuilder.CreateBox(
    "weight",
    {
      size: 1.5,
    },
    scene,
  );

  weight.position = new Vector3(0, -1.5, 0);

  const material = new StandardMaterial("weightMaterial", scene);

  material.diffuseColor = new Color3(0.8, 0.2, 0.2);

  weight.material = material;

  return weight;
}
