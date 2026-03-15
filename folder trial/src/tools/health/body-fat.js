/**
 * Body Fat Calculator
 * US Navy Method (requires measurements in cm).
 */
export function renderBodyFat() {
    const page = document.createElement('div');
    page.className = 'page-content tool-page';

    page.innerHTML = `
    <h2>⚖️ Body Fat Calculator</h2>
    <div class="form-group">
      <label>Gender</label>
      <select id="bfGender" class="form-select">
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label>Height (cm)</label>
        <input type="number" id="bfHeight" class="form-input" value="175">
      </div>
      <div class="form-group">
        <label>Neck (cm)</label>
        <input type="number" id="bfNeck" class="form-input" value="38">
      </div>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label>Waist (cm)</label>
        <input type="number" id="bfWaist" class="form-input" value="85">
      </div>
      <div class="form-group" id="hipGroup" style="display:none">
        <label>Hips (cm)</label>
        <input type="number" id="bfHips" class="form-input" value="100">
      </div>
    </div>
    <button class="btn btn-primary" id="calcBF">⚖️ Calculate Body Fat</button>
    <div id="bfResult"></div>
  `;

    const genderSelect = page.querySelector('#bfGender');
    const hipGroup = page.querySelector('#hipGroup');

    genderSelect.onchange = () => {
        hipGroup.style.display = genderSelect.value === 'female' ? 'block' : 'none';
    };

    page.querySelector('#calcBF').onclick = () => {
        const gender = genderSelect.value;
        const height = parseFloat(page.querySelector('#bfHeight').value);
        const neck = parseFloat(page.querySelector('#bfNeck').value);
        const waist = parseFloat(page.querySelector('#bfWaist').value);
        const hips = parseFloat(page.querySelector('#bfHips').value);

        let bodyFat;
        if (gender === 'male') {
            // SI Units: 495 / (1.0324 - 0.19077 * log10(waist - neck) + 0.15456 * log10(height)) - 450
            bodyFat = 495 / (1.0324 - 0.19077 * Math.log10(waist - neck) + 0.15456 * Math.log10(height)) - 450;
        } else {
            // SI Units: 495 / (1.29579 - 0.35004 * log10(waist + hips - neck) + 0.22100 * log10(height)) - 450
            bodyFat = 495 / (1.29579 - 0.35004 * Math.log10(waist + hips - neck) + 0.22100 * Math.log10(height)) - 450;
        }

        const bf = Math.max(0, Math.round(bodyFat * 10) / 10);

        let category = 'Unknown';
        if (gender === 'male') {
            if (bf < 6) category = 'Essential fat';
            else if (bf < 14) category = 'Athletes';
            else if (bf < 18) category = 'Fitness';
            else if (bf < 25) category = 'Average';
            else category = 'Obese';
        } else {
            if (bf < 14) category = 'Essential fat';
            else if (bf < 21) category = 'Athletes';
            else if (bf < 25) category = 'Fitness';
            else if (bf < 32) category = 'Average';
            else category = 'Obese';
        }

        page.querySelector('#bfResult').innerHTML = `
      <div class="result-box">
        <div class="result-label">Body Fat Percentage</div>
        <div class="result-value">${bf}%</div>
        <div class="result-detail">Category: <strong>${category}</strong></div>
      </div>
      <p class="text-xs text-muted mt-md italic">
        *Using US Navy measurement method. Accuracy within 1-3%.
      </p>
    `;
    };

    return page;
}
