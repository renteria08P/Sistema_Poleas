export function updatePulleyRotation(pulleys, speed) {
  pulleys.forEach((pulley) => {
    pulley.rotation.y += speed;
  });
}
