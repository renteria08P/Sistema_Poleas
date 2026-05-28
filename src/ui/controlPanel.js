import { simulationState } from "../simulation/state/simulationState";

export function createControlPanel() {
  const panel = document.createElement("div");

  panel.style.position = "absolute";
  panel.style.top = "20px";
  panel.style.left = "20px";
  panel.style.padding = "20px";
  panel.style.background = "rgba(0,0,0,0.7)";
  panel.style.color = "white";
  panel.style.borderRadius = "10px";
  panel.style.fontFamily = "Arial";
  panel.style.zIndex = "100";

  panel.innerHTML = `

    <h2>Sistema de Poleas</h2>

    <label>Poleas</label>
    <input
      id="pulleys"
      type="range"
      min="1"
      max="6"
      value="2"
    />

    <br><br>

    <label>Peso</label>
    <input
      id="weight"
      type="range"
      min="10"
      max="300"
      value="100"
    />

    <br><br>

    <label>Fuerza</label>
    <input
      id="force"
      type="range"
      min="0"
      max="300"
      value="0"
    />

    <br><br>

    <div id="hud"></div>
  `;

  document.body.appendChild(panel);

  const pulleysInput = document.getElementById("pulleys");

  const weightInput = document.getElementById("weight");

  const forceInput = document.getElementById("force");

  const hud = document.getElementById("hud");

  function updateUI() {
    simulationState.pulleys = Number(pulleysInput.value);

    simulationState.weight = Number(weightInput.value);

    simulationState.appliedForce = Number(forceInput.value);

    hud.innerHTML = `
      Poleas:
      ${simulationState.pulleys}
      <br>

      Peso:
      ${simulationState.weight}
      <br>

      Fuerza:
      ${simulationState.appliedForce}
      <br>

      Requerida:
      ${simulationState.requiredForce}
      <br>

      Estado:
      ${simulationState.status}
    `;
  }

  pulleysInput.oninput = updateUI;
  weightInput.oninput = updateUI;
  forceInput.oninput = updateUI;

  updateUI();
}
