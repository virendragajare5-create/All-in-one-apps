/**
 * Fuel Cost Calculator
 * Calculates estimated travel cost based on distance and fuel efficiency.
 */
export function renderFuelCalculator() {
    const page = document.createElement('div');
    page.className = 'page-content tool-page';

    page.innerHTML = `
    <h2>⛽ Fuel Cost Calculator</h2>
    <div class="form-group">
      <label>Distance (km)</label>
      <input type="number" id="fuelDist" class="form-input" value="100">
    </div>
    <div class="form-group">
      <label>Fuel Consumption (km per Litre)</label>
      <input type="number" id="fuelEf" class="form-input" value="15">
    </div>
    <div class="form-group">
      <label>Fuel Price (per Litre)</label>
      <input type="number" id="fuelPrice" class="form-input" value="100">
    </div>
    <button class="btn btn-primary" id="calcFuel">⛽ Calculate Cost</button>
    <div id="fuelResult"></div>
  `;

    page.querySelector('#calcFuel').onclick = () => {
        const dist = parseFloat(page.querySelector('#fuelDist').value);
        const ef = parseFloat(page.querySelector('#fuelEf').value);
        const price = parseFloat(page.querySelector('#fuelPrice').value);

        if (ef === 0) return;

        const fuelNeeded = dist / ef;
        const totalCost = fuelNeeded * price;

        page.querySelector('#fuelResult').innerHTML = `
      <div class="result-box">
        <div class="result-label">Estimated Fuel Cost</div>
        <div class="result-value">₹${totalCost.toFixed(2)}</div>
      </div>
      <div class="result-grid">
        <div class="result-item">
          <div class="result-label">Fuel Required</div>
          <div class="result-value">${fuelNeeded.toFixed(2)} L</div>
        </div>
        <div class="result-item">
          <div class="result-label">Cost per KM</div>
          <div class="result-value">₹${(totalCost / dist).toFixed(2)}</div>
        </div>
      </div>
    `;
    };

    return page;
}
