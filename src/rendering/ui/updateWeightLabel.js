import { simulationState } from "../../simulation/state/simulationState";

export function updateWeightLabel(label) {
  label.text = `${simulationState.weight} kg`;
}
