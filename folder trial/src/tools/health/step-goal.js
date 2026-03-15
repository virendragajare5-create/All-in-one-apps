/**
 * Step Goal Calculator
 * Calculates recommended daily steps based on user profile.
 */
export function renderStepGoal() {
    const page = document.createElement('div');
    page.className = 'page-content tool-page';

    page.innerHTML = `
    <h2>👣 Step Goal Calculator</h2>
    <div class="form-group">
      <label>Age</label>
      <input type="number" id="stepAge" class="form-input" placeholder="e.g. 25" value="25">
    </div>
    <div class="form-group">
      <label>Activity Level</label>
      <select id="stepActivity" class="form-select">
        <option value="sedentary">Sedentary (Office job)</option>
        <option value="lightly" selected>Lightly Active (Occasional walks)</option>
        <option value="moderately">Moderately Active (Daily walks/gym)</option>
        <option value="very">Very Active (Heavy manual work/athlete)</option>
      </select>
    </div>
    <div class="form-group">
      <label>Focus / Goal</label>
      <select id="stepGoalType" class="form-select">
        <option value="maintain">Maintain Health</option>
        <option value="weightLoss">Weight Loss</option>
        <option value="stamina">Build Stamina</option>
      </select>
    </div>
    <button class="btn btn-primary" id="calcSteps">👣 Calculate Goal</button>
    <div id="stepResult"></div>
  `;

    page.querySelector('#calcSteps').onclick = () => {
        const age = parseInt(page.querySelector('#stepAge').value);
        const activity = page.querySelector('#stepActivity').value;
        const goalType = page.querySelector('#stepGoalType').value;

        let baseSteps = 5000;

        // Age adjustments
        if (age < 18) baseSteps = 8000;
        else if (age > 65) baseSteps = 4000;
        else baseSteps = 6000;

        // Activity adjustments
        const activityMultipliers = {
            sedentary: 1,
            lightly: 1.3,
            moderately: 1.6,
            very: 2.0
        };
        baseSteps *= activityMultipliers[activity];

        // Goal adjustments
        if (goalType === 'weightLoss') baseSteps *= 1.4;
        else if (goalType === 'stamina') baseSteps *= 1.2;

        const finalGoal = Math.round(baseSteps / 500) * 500; // Round to nearest 500

        page.querySelector('#stepResult').innerHTML = `
      <div class="result-box">
        <div class="result-label">Recommended Daily Steps</div>
        <div class="result-value">${finalGoal.toLocaleString()} steps</div>
        <div class="result-detail">
          Based on your profile, this goal will help you stay active and achieve your ${goalType === 'weightLoss' ? 'weight loss' : 'fitness'} goals.
        </div>
      </div>
    `;
    };

    return page;
}
