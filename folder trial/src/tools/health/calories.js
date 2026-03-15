/**
 * Calorie Estimator
 * Estimates TDEE (Total Daily Energy Expenditure) based on Harris-Benedict Equation.
 */
export function renderCalories() {
    const page = document.createElement('div');
    page.className = 'page-content tool-page';

    page.innerHTML = `
    <h2>🔥 Calorie Estimator</h2>
    <div class="form-row">
      <div class="form-group">
        <label>Gender</label>
        <select id="calGender" class="form-select">
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div class="form-group">
        <label>Age</label>
        <input type="number" id="calAge" class="form-input" value="25">
      </div>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label>Weight (kg)</label>
        <input type="number" id="calWeight" class="form-input" value="70">
      </div>
      <div class="form-group">
        <label>Height (cm)</label>
        <input type="number" id="calHeight" class="form-input" value="175">
      </div>
    </div>
    <div class="form-group">
      <label>Activity Level</label>
      <select id="calActivity" class="form-select">
        <option value="1.2">Sedentary (Little/no exercise)</option>
        <option value="1.375">Lightly Active (1-3 days/week)</option>
        <option value="1.55" selected>Moderately Active (3-5 days/week)</option>
        <option value="1.725">Very Active (6-7 days/week)</option>
        <option value="1.9">Extra Active (Labor job/2x training)</option>
      </select>
    </div>
    <button class="btn btn-primary" id="calcCal">🔥 Calculate Calories</button>
    <div id="calResult"></div>
  `;

    page.querySelector('#calcCal').onclick = () => {
        const gender = page.querySelector('#calGender').value;
        const age = parseInt(page.querySelector('#calAge').value);
        const weight = parseFloat(page.querySelector('#calWeight').value);
        const height = parseFloat(page.querySelector('#calHeight').value);
        const activity = parseFloat(page.querySelector('#calActivity').value);

        // BMR Calculation (Mifflin-St Jeor Equation)
        let bmr;
        if (gender === 'male') {
            bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
        } else {
            bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;
        }

        const tdee = Math.round(bmr * activity);

        page.querySelector('#calResult').innerHTML = `
      <div class="result-box">
        <div class="result-label">Daily Maintenance Calories</div>
        <div class="result-value">${tdee.toLocaleString()} kcal</div>
      </div>
      <div class="result-grid">
        <div class="result-item">
          <div class="result-label">Weight Loss (-0.5kg/wk)</div>
          <div class="result-value">${(tdee - 500).toLocaleString()}</div>
        </div>
        <div class="result-item">
          <div class="result-label">Weight Gain (+0.5kg/wk)</div>
          <div class="result-value">${(tdee + 500).toLocaleString()}</div>
        </div>
      </div>
      <p class="text-sm text-muted mt-md text-center">
        BMR (Basal Metabolic Rate): ${Math.round(bmr).toLocaleString()} kcal
      </p>
    `;
    };

    return page;
}
