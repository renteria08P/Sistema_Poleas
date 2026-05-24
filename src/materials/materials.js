import { StandardMaterial, Texture, Color3 } from "@babylonjs/core";

export const createRopeMaterial = (scene) => {
  const material = new StandardMaterial("ropeMaterial", scene);

  material.diffuseTexture = new Texture("/textures/rope.jpg", scene);

  material.diffuseColor = new Color3(1, 1, 1);

  return material;
};
