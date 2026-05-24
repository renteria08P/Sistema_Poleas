import { MeshBuilder, Vector3, Color3 } from "@babylonjs/core";

export const setupControls = (weight, ropeData, pulley, scene) => {
  let rope = ropeData.rope;

  window.addEventListener("keydown", (event) => {
    // =====================
    // SUBIR
    // =====================

    if (event.key === "ArrowUp") {
      if (weight.position.y < 4) {
        weight.position.y += 0.2;

        pulley.rotation.x += 0.1;
      }
    }

    // =====================
    // BAJAR
    // =====================

    if (event.key === "ArrowDown") {
      if (weight.position.y > -8) {
        weight.position.y -= 0.2;

        pulley.rotation.x -= 0.1;
      }
    }

    // =====================
    // ACTUALIZAR CUERDA
    // =====================

    rope.dispose();

    rope = MeshBuilder.CreateLines(
      "rope",
      {
        points: [
          // lado izquierdo
          new Vector3(-2, 2, 0),

          // polea
          new Vector3(0, 6.8, 0),

          // peso
          new Vector3(0, weight.position.y + 0.7, 0),
        ],
      },
      scene,
    );

    rope.color = new Color3(0.45, 0.3, 0.15);
  });
};
