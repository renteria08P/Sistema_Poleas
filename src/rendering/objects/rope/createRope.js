import { MeshBuilder, Vector3, Color3 } from "@babylonjs/core";

export function createRope(scene, weight) {
  const points = [
    new Vector3(0, 6.5, 0),

    new Vector3(0, 4, 0),

    new Vector3(weight.position.x, weight.position.y + 1, 0),
  ];

  const rope = MeshBuilder.CreateLines(
    "rope",
    {
      points,
      updatable: true,
    },
    scene,
  );

  rope.color = new Color3(1, 1, 1);

  return rope;
}
