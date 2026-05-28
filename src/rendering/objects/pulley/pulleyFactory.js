import { Vector3 } from "@babylonjs/core";

import { createPulley } from "./createPulley";

export function createPulleySystem(scene, pulleyCount) {
  const pulleys = [];

  for (let i = 0; i < pulleyCount; i++) {
    const pulley = createPulley(scene, new Vector3(i * 2.5 - 1.25, 4, 0));

    pulleys.push(pulley);
  }

  return pulleys;
}
