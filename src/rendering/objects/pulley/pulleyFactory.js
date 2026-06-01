import { Vector3 } from "@babylonjs/core";
import { createPulley } from "./createPulley";

export function createPulleySystem(scene, pulleyCount) {
  const pulleys = [];

  // 1 polea
  if (pulleyCount === 1) {
    pulleys.push(createPulley(scene, new Vector3(0, 4, 0), "fixed"));
  }

  // 2 poleas
  else if (pulleyCount === 2) {
    pulleys.push(createPulley(scene, new Vector3(0, 4, 0), "fixed"));

    pulleys.push(createPulley(scene, new Vector3(0, 1, 0), "mobile"));
  }

  // 4 poleas
  else if (pulleyCount === 4) {
    pulleys.push(createPulley(scene, new Vector3(-2.5, 4, 0), "fixed"));

    pulleys.push(createPulley(scene, new Vector3(2.5, 4, 0), "fixed"));

    pulleys.push(createPulley(scene, new Vector3(-2.5, 0, 0), "mobile"));

    pulleys.push(createPulley(scene, new Vector3( 2.5, 0, 0), "mobile"));
  }

  // 6 poleas
  else if (pulleyCount === 6) {
    pulleys.push(createPulley(scene, new Vector3(-4, 4, 0), "fixed"));

    pulleys.push(createPulley(scene, new Vector3(0, 4, 0), "fixed"));

    pulleys.push(createPulley(scene, new Vector3(4, 4, 0), "fixed"));

    pulleys.push(createPulley(scene, new Vector3(-4, 0, 0), "mobile"));

    pulleys.push(createPulley(scene, new Vector3(0, 0, 0), "mobile"));

    pulleys.push(createPulley(scene, new Vector3(4, 0, 0), "mobile"));
  }

  return pulleys;
}
