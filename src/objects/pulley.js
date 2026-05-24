import { MeshBuilder, StandardMaterial, Color3 } from "@babylonjs/core";

export const createPulley = (scene) => {
  const pulley = MeshBuilder.CreateCylinder(
    "pulley",
    {
      diameter: 2,
      height: 0.5,
    },
    scene,
  );

  pulley.rotation.z = Math.PI / 2;

  pulley.position.y = 6;

  pulley.position.z = 0;

  const material = new StandardMaterial("pulleyMaterial", scene);

  material.diffuseColor = new Color3(0.75, 0.75, 0.78);

  material.specularColor = new Color3(1, 1, 1);
  pulley.material = material;
  

  return pulley;
};
