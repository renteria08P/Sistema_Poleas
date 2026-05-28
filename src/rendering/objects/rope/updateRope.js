import { MeshBuilder, Vector3 } from "@babylonjs/core";

export function updateRope(rope, weight) {
  const points = [
    new Vector3(-1.25, 5.5, 0),

    new Vector3(-1.25, 4, 0),

    new Vector3(1.25, 4, 0),

    new Vector3(weight.position.x, weight.position.y + 1, 0),
  ];

  MeshBuilder.CreateLines(null, {
    points,
    instance: rope,
  });
}
