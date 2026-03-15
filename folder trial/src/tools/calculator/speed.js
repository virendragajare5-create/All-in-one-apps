/**
 * Speed / Distance / Time Calculator
 * Solves for the missing variable in the d = v * t equation.
 */
export function renderSpeedCalculator() {
    const page = document.createElement('div');
    page.className = 'page-content tool-page';

    page.innerHTML = `
    <h2>🚗 Speed & Distance Calculator</h2>
    <div class="form-group">
      <label>I want to solve for:</label>
      <select id="solveFor" class="form-select">
        <option value="d">Distance (How far?)</option>
        <option value="v" selected>Speed (How fast?)</option>
        <option value="t">Time (How long?)</option>
      </select>
    </div>

    <div id="speedInputs" class="mt-lg"></div>
    <button class="btn btn-primary mt-md" id="calcSpeed">🚗 Calculate</button>
    <div id="speedResult"></div>
  `;

    const inputContainer = page.querySelector('#speedInputs');
    const solveSelect = page.querySelector('#solveFor');

    const updateInputs = () => {
        const mode = solveSelect.value;
        if (mode === 'd') {
            inputContainer.innerHTML = `
        <div class="form-group"><label>Speed (km/h)</label><input type="number" id="val1" class="form-input" value="60"></div>
        <div class="form-group"><label>Time (hours)</label><input type="number" id="val2" class="form-input" value="2"></div>
      `;
        } else if (mode === 'v') {
            inputContainer.innerHTML = `
        <div class="form-group"><label>Distance (km)</label><input type="number" id="val1" class="form-input" value="120"></div>
        <div class="form-group"><label>Time (hours)</label><input type="number" id="val2" class="form-input" value="2"></div>
      `;
        } else {
            inputContainer.innerHTML = `
        <div class="form-group"><label>Distance (km)</label><input type="number" id="val1" class="form-input" value="120"></div>
        <div class="form-group"><label>Speed (km/h)</label><input type="number" id="val2" class="form-input" value="60"></div>
      `;
        }
    };

    solveSelect.onchange = updateInputs;
    updateInputs();

    page.querySelector('#calcSpeed').onclick = () => {
        const mode = solveSelect.value;
        const v1 = parseFloat(page.querySelector('#val1').value);
        const v2 = parseFloat(page.querySelector('#val2').value);

        let res, label, unit;
        if (mode === 'd') {
            res = v1 * v2; label = 'Distance'; unit = 'km';
        } else if (mode === 'v') {
            res = v1 / v2; label = 'Average Speed'; unit = 'km/h';
        } else {
            res = v1 / v2; label = 'Time Required'; unit = 'hours';
        }

        page.querySelector('#speedResult').innerHTML = `
      <div class="result-box">
        <div class="result-label">${label}</div>
        <div class="result-value">${res.toFixed(2)} ${unit}</div>
      </div>
    `;
    };

    return page;
}
