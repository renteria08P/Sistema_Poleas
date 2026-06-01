import { MeshBuilder, Vector3 } from "@babylonjs/core";

export function updateRope(rope, weight, pulleys) {
  let points = [];

  if (pulleys.length === 1) {
    points = [
      new Vector3(0, 6, 0),
      pulleys[0].position.clone(),
      new Vector3(0, weight.position.y + 1, 0),
    ];
  } else if (pulleys.length === 2) {
    points = [
      new Vector3(0, 6, 0),
      pulleys[0].position.clone(),
      pulleys[1].position.clone(),
      new Vector3(0, weight.position.y + 1, 0),
    ];
  } else if (pulleys.length === 4) {
    const topLeft = pulleys[0].position.clone();
    const topRight = pulleys[1].position.clone();

    const bottomLeft = pulleys[2].position.clone();
    const bottomRight = pulleys[3].position.clone();

    points = [
      topLeft,
      topRight,
      bottomRight,
      bottomLeft,

      new Vector3(bottomLeft.x, weight.position.y + 1, 0),

      new Vector3(weight.position.x, weight.position.y + 1, 0),
    ];
  } else if (pulleys.length === 6) {
    const topLeft = pulleys[0].position.clone();
    const topCenter = pulleys[1].position.clone();
    const topRight = pulleys[2].position.clone();

    const bottomLeft = pulleys[3].position.clone();
    const bottomCenter = pulleys[4].position.clone();
    const bottomRight = pulleys[5].position.clone();

    points = [
      topLeft,
      topCenter,
      topRight,

      bottomRight,
      bottomCenter,
      bottomLeft,

      new Vector3(bottomLeft.x, weight.position.y + 1, 0),

      new Vector3(weight.position.x, weight.position.y + 1, 0),
    ];
  }

  MeshBuilder.CreateLines(null, {
    points,
    instance: rope,
  });
}
