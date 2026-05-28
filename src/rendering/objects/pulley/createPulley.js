import { MeshBuilder, StandardMaterial, Color3 } from "@babylonjs/core";

export function createPulley(scene, position) {
  const pulley = MeshBuilder.CreateCylinder(
    "pulley",
    {
      diameter: 2,
      height: 0.5,
      tessellation: 64,
    },
    scene,
  );

  pulley.rotation.z = Math.PI / 2;

  pulley.position = position;

  const material = new StandardMaterial("pulleyMaterial", scene);

  material.diffuseColor = new Color3(0.3, 0.3, 0.35);

  pulley.material = material;

  return pulley;
}
