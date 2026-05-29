createWeightLabel.js;
import * as GUI from "@babylonjs/gui";

export function createWeightLabel(scene, weightMesh) {
  const texture = GUI.AdvancedDynamicTexture.CreateFullscreenUI(
    "UI",
    true,
    scene,
  );

  const label = new GUI.TextBlock();

  label.text = "100 kg";

  label.color = "white";

  label.fontSize = 24;

  texture.addControl(label);

  label.linkWithMesh(weightMesh);

  label.linkOffsetY = -60;

  return label;
}