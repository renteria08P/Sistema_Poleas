import { simulationState } from "../simulation/state/simulationState";
import { pulleyConfigurations } from "../simulation/configurations/pulleyConfigurations";
import { updateSimulation } from "../simulation/systems/simulationSystem";

export function createControlPanel(onSystemChange) {
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
  panel.style.minWidth = "280px";

  panel.innerHTML = `
    <h2>Sistema de Poleas</h2>

    <label>Sistema</label>

    <select id="system">

      <option value="fixed">
        Polea simple
      </option>

      <option value="movable">
        Sistema de 2 poleas
      </option>

      <option value="block4">
        Sistema de 4 poleas
      </option>

      <option value="block6">
        Sistema de 6 poleas
      </option>

    </select>

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

  const systemInput = document.getElementById("system");

  const weightInput = document.getElementById("weight");

  const forceInput = document.getElementById("force");

  const hud = document.getElementById("hud");

  function updateUI() {
    simulationState.currentConfiguration = systemInput.value;

    const config = pulleyConfigurations[systemInput.value];

    simulationState.pulleys = config.pulleys;

    simulationState.weight = Number(weightInput.value);

    simulationState.appliedForce = Number(forceInput.value);

    updateSimulation();

    if (onSystemChange) {
      onSystemChange();
    }

    const estado =
      simulationState.status === "lifting"
        ? "🟢 Elevando carga"
        : "🔴 Fuerza insuficiente";

    hud.innerHTML = `
      <hr>

      <b>Sistema:</b>
      ${systemInput.options[systemInput.selectedIndex].text}

      <br><br>

      <b>Peso:</b>
      ${simulationState.weight} kg

      <br><br>

      <b>Ventaja mecánica:</b>
      ${simulationState.pulleys}x

      <br><br>

      <b>Fuerza aplicada:</b>
      ${simulationState.appliedForce} N

      <br><br>

      <b>Fuerza requerida:</b>
      ${simulationState.requiredForce.toFixed(2)} N

      <br><br>

      <b>Estado:</b>
      ${estado}

      <br><br>

      <br><br>

      <b>Altura:</b>${simulationState.currentHeight?.toFixed(2) || "-"}

      <b>Fórmula:</b>

      <br>

      F = W / N

      <br><br>

      ${simulationState.weight}
      /
      ${simulationState.pulleys}

      =
      ${simulationState.requiredForce.toFixed(2)}
    `;
  }

  systemInput.onchange = updateUI;

  weightInput.oninput = updateUI;

  forceInput.oninput = updateUI;

  updateUI();
}
