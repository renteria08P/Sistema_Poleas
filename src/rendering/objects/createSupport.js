import {
  MeshBuilder,
  StandardMaterial,
  Color3,
  Vector3,
} from "@babylonjs/core";

export function createSupport(scene) {
  const support = MeshBuilder.CreateBox(
    "support",
    {
      width: 8,
      height: 0.3,
      depth: 0.3,
    },
    scene,
  );

  support.position = new Vector3(0, 5.5, 0);

  const material = new StandardMaterial("supportMaterial", scene);

  material.diffuseColor = new Color3(0.5, 0.3, 0.1);

  support.material = material;

  return support;
}
