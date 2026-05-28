export function calculateRequiredForce(weight, pulleys) {
  return weight / pulleys;
}

export function canLift(appliedForce, requiredForce) {
  return appliedForce >= requiredForce;
}
