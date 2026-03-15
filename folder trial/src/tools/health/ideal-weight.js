/**
 * Ideal Weight Calculator
 * Using Devine, Robinson, and Miller formulas.
 */
export function renderIdealWeight() {
    const page = document.createElement('div');
    page.className = 'page-content tool-page';

    page.innerHTML = `
    <h2>⚖️ Ideal Weight Calculator</h2>
    <div class="form-group">
      <label>Gender</label>
      <select id="iwGender" class="form-select">
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
    </div>
    <div class="form-group">
      <label>Height (cm)</label>
      <input type="number" id="iwHeight" class="form-input" value="175">
    </div>
    <button class="btn btn-primary" id="calcIW">⚖️ Calculate Ideal Weight</button>
    <div id="iwResult"></div>
  `;

    page.querySelector('#calcIW').onclick = () => {
        const gender = page.querySelector('#iwGender').value;
        const heightCm = parseFloat(page.querySelector('#iwHeight').value);
        const heightIn = heightCm / 2.54;
        const baseHeightIn = 60; // 5 feet
        const extraIn = Math.max(0, heightIn - baseHeightIn);

        let devine, robinson, miller;

        if (gender === 'male') {
            devine = 50.0 + (2.3 * extraIn);
            robinson = 52.0 + (1.9 * extraIn);
            miller = 56.2 + (1.41 * extraIn);
        } else {
            devine = 45.5 + (2.3 * extraIn);
            robinson = 49.0 + (1.7 * extraIn);
            miller = 53.1 + (1.36 * extraIn);
        }

        // Average BMI based ideal weight (18.5 - 25)
        const bmiMin = 18.5 * Math.pow(heightCm / 100, 2);
        const bmiMax = 25.0 * Math.pow(heightCm / 100, 2);

        page.querySelector('#iwResult').innerHTML = `
      <div class="result-box">
        <div class="result-label">Recommended (Miller Formula)</div>
        <div class="result-value">${Math.round(miller)} kg</div>
      </div>
      <div class="mt-lg">
        <h3>Other Formulas</h3>
        <div class="result-grid">
          <div class="result-item">
            <div class="result-label">Devine</div>
            <div class="result-value">${Math.round(devine)}kg</div>
          </div>
          <div class="result-item">
            <div class="result-label">Robinson</div>
            <div class="result-value">${Math.round(robinson)}kg</div>
          </div>
        </div>
      </div>
      <div class="result-box mt-md">
        <div class="result-label">Healthy BMI Range (18.5 - 25)</div>
        <div class="result-value" style="font-size: 1.25rem">${Math.round(bmiMin)}kg - ${Math.round(bmiMax)}kg</div>
      </div>
    `;
    };

    return page;
}
