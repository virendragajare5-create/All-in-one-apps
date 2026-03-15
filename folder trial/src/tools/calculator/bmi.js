/**
 * BMI Calculator
 * Body Mass Index calculation with category classification.
 */
export function renderBMICalculator() {
    const page = document.createElement('div');
    page.className = 'page-content tool-page';

    page.innerHTML = `
    <h2>⚖️ BMI Calculator</h2>
    <div class="form-group">
      <label>Weight (kg)</label>
      <input type="number" id="bmiWeight" class="form-input" value="70">
    </div>
    <div class="form-group">
      <label>Height (cm)</label>
      <input type="number" id="bmiHeight" class="form-input" value="175">
    </div>
    <button class="btn btn-primary" id="calcBMI">⚖️ Calculate BMI</button>
    <div id="bmiResult"></div>
  `;

    page.querySelector('#calcBMI').onclick = () => {
        const weight = parseFloat(page.querySelector('#bmiWeight').value);
        const heightCm = parseFloat(page.querySelector('#bmiHeight').value);
        const heightM = heightCm / 100;

        if (heightM === 0) return;

        const bmi = weight / (heightM * heightM);
        const roundedBMI = Math.round(bmi * 10) / 10;

        let category, color;
        if (roundedBMI < 18.5) { category = 'Underweight'; color = '#3498db'; }
        else if (roundedBMI < 25) { category = 'Normal'; color = '#2ecc71'; }
        else if (roundedBMI < 30) { category = 'Overweight'; color = '#f1c40f'; }
        else { category = 'Obese'; color = '#e74c3c'; }

        page.querySelector('#bmiResult').innerHTML = `
      <div class="result-box">
        <div class="result-label">Your BMI</div>
        <div class="result-value" style="color: ${color}">${roundedBMI}</div>
        <div class="result-detail">Category: <strong>${category}</strong></div>
      </div>
      <div class="mt-lg">
        <div class="notes-list">
          <div class="note-card" style="border-left: 5px solid #3498db">
            <div class="note-title">Underweight</div> < 18.5
          </div>
          <div class="note-card" style="border-left: 5px solid #2ecc71">
            <div class="note-title">Normal</div> 18.5 – 25
          </div>
          <div class="note-card" style="border-left: 5px solid #f1c40f">
            <div class="note-title">Overweight</div> 25 – 30
          </div>
          <div class="note-card" style="border-left: 5px solid #e74c3c">
            <div class="note-title">Obese</div> > 30
          </div>
        </div>
      </div>
    `;
    };

    return page;
}
