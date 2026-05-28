import { simulationState } from "../state/simulationState";

import { calculateRequiredForce, canLift } from "../physics/pulleyPhysics";

export function updateSimulation() {
  simulationState.requiredForce = calculateRequiredForce(
    simulationState.weight,
    simulationState.pulleys,
  );

  const lifting = canLift(
    simulationState.appliedForce,
    simulationState.requiredForce,
  );

  if (lifting) {
    simulationState.status = "lifting";

    simulationState.movementSpeed = 0.03;
  } else {
    simulationState.status = "idle";

    simulationState.movementSpeed = 0;
  }
}
