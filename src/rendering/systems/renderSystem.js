import { simulationState } from "../../simulation/state/simulationState";

export function updateRenderSystem(weight, pulleys) {
  if (simulationState.appliedForce >= simulationState.requiredForce) {
    if (weight.position.y < simulationState.maxHeight) {
      weight.position.y += 0.03;

      pulleys.forEach((pulley) => {
        pulley.rotation.x += 0.05;
      });
    }
  } else {
    if (weight.position.y > simulationState.minHeight) {
      weight.position.y -= 0.03;

      pulleys.forEach((pulley) => {
        pulley.rotation.x -= 0.03;
      });
    }
  }
}
