/**
 * Salary Calculator
 * Breaks down annual salary into monthly, weekly, and daily rates.
 */
export function renderSalaryCalculator() {
    const page = document.createElement('div');
    page.className = 'page-content tool-page';

    page.innerHTML = `
    <h2>💰 Salary Calculator</h2>
    <div class="form-group">
      <label>Annual Salary (Gross)</label>
      <input type="number" id="annualSalary" class="form-input" value="1200000">
    </div>
    <div class="form-group">
      <label>Working Days per Week</label>
      <select id="workDays" class="form-select">
        <option value="5" selected>5 Days</option>
        <option value="6">6 Days</option>
        <option value="7">7 Days</option>
      </select>
    </div>
    <button class="btn btn-primary" id="calcSalary">💰 Calculate Breakdown</button>
    <div id="salaryResult"></div>
  `;

    page.querySelector('#calcSalary').onclick = () => {
        const annual = parseFloat(page.querySelector('#annualSalary').value);
        const daysPerWeek = parseInt(page.querySelector('#workDays').value);

        const monthly = annual / 12;
        const weekly = annual / 52;
        const daily = weekly / daysPerWeek;
        const hourly = daily / 8; // Assuming 8h workday

        page.querySelector('#salaryResult').innerHTML = `
      <div class="result-box">
        <div class="result-label">Monthly Salary</div>
        <div class="result-value">₹${Math.round(monthly).toLocaleString()}</div>
      </div>
      <div class="result-grid">
        <div class="result-item">
          <div class="result-label">Weekly</div>
          <div class="result-value">₹${Math.round(weekly).toLocaleString()}</div>
        </div>
        <div class="result-item">
          <div class="result-label">Daily</div>
          <div class="result-value">₹${Math.round(daily).toLocaleString()}</div>
        </div>
        <div class="result-item">
          <div class="result-label">Hourly (8h)</div>
          <div class="result-value">₹${Math.round(hourly).toLocaleString()}</div>
        </div>
        <div class="result-item">
          <div class="result-label">Quarterly</div>
          <div class="result-value">₹${Math.round(annual / 4).toLocaleString()}</div>
        </div>
      </div>
    `;
    };

    return page;
}
