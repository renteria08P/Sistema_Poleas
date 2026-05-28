export function startGameLoop(engine, scene, update) {
  engine.runRenderLoop(() => {
    update();

    scene.render();
  });

  window.addEventListener("resize", () => {
    engine.resize();
  });
}
