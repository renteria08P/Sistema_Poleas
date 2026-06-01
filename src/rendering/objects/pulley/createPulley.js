import { MeshBuilder, StandardMaterial, Color3 } from "@babylonjs/core";

export function createPulley(scene, position, type = "fixed") {
  const pulley = MeshBuilder.CreateCylinder(
    "pulley",
    {
      diameter: 1.8,
      height: 0.4,
      tessellation: 64,
    },
    scene,
  );

  pulley.rotation.z = Math.PI / 2;
  pulley.position = position;

  const material = new StandardMaterial("pulleyMaterial", scene);

  // Poleas superiores
  if (type === "fixed") {
    material.diffuseColor = new Color3(0.2, 0.2, 0.25);
  }

  // Poleas inferiores
  else {
    material.diffuseColor = new Color3(0.2, 0.5, 0.9);
  }

  pulley.material = material;

  return pulley;
}
