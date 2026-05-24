import { MeshBuilder, Vector3, Color3 } from "@babylonjs/core";

export const createRope = (scene) => {
  const rope = MeshBuilder.CreateLines(
    "rope",
    {
      points: [
        // extremo izquierdo
        new Vector3(-2, 2, 0),

        // parte superior polea
        new Vector3(0, 6.8, 0),

        // cuerda vertical
        new Vector3(0, 2, 0),
      ],
    },
    scene,
  );

  rope.color = new Color3(0.45, 0.3, 0.15);

  return {
    rope,
  };
};
