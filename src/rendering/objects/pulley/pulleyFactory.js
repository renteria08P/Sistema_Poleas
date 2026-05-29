import { Vector3 } from "@babylonjs/core";
import { createPulley } from "./createPulley";

export function createPulleySystem(scene, pulleyCount) {
  const pulleys = [];

  // Sistema 1 polea
  if (pulleyCount === 1) {
    pulleys.push(createPulley(scene, new Vector3(0, 4, 0)));
  }

  // Sistema 2 poleas
  else if (pulleyCount === 2) {
    pulleys.push(createPulley(scene, new Vector3(0, 4, 0)));

    pulleys.push(createPulley(scene, new Vector3(0, 1.5, 0)));
  }

  // Sistema 4 poleas
  else if (pulleyCount === 4) {
    // Arriba (fijas)
    pulleys.push(createPulley(scene, new Vector3(-3, 4, 0), "fixed"));

    pulleys.push(createPulley(scene, new Vector3(3, 4, 0), "fixed"));

    // Abajo (móviles)
    pulleys.push(createPulley(scene, new Vector3(-3, 1.5, 0), "mobile"));

    pulleys.push(createPulley(scene, new Vector3(3, 1.5, 0), "mobile"));
  }

  // Sistema 6 poleas
  else if (pulleyCount === 6) {
    // Arriba (fijas)
    pulleys.push(createPulley(scene, new Vector3(-4, 4, 0), "fixed"));

    pulleys.push(createPulley(scene, new Vector3(0, 4, 0), "fixed"));

    pulleys.push(createPulley(scene, new Vector3(4, 4, 0), "fixed"));

    // Abajo (móviles)
    pulleys.push(createPulley(scene, new Vector3(-4, 1.5, 0), "mobile"));

    pulleys.push(createPulley(scene, new Vector3(0, 1.5, 0), "mobile"));

    pulleys.push(createPulley(scene, new Vector3(4, 1.5, 0), "mobile"));
  }

  return pulleys;
}
