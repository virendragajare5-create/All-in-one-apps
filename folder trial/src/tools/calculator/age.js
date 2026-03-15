/**
 * Age Calculator
 * Calculates precise age between two dates.
 */
export function renderAgeCalculator() {
    const page = document.createElement('div');
    page.className = 'page-content tool-page';

    page.innerHTML = `
    <h2>🎂 Age Calculator</h2>
    <div class="form-group">
      <label>Date of Birth</label>
      <input type="date" id="dob" class="form-input">
    </div>
    <div class="form-group">
      <label>Today's Date</label>
      <input type="date" id="targetDate" class="form-input" value="${new Date().toISOString().split('T')[0]}">
    </div>
    <button class="btn btn-primary" id="calcAge">🎂 Calculate Precise Age</button>
    <div id="ageResult"></div>
  `;

    page.querySelector('#calcAge').onclick = () => {
        const dob = new Date(page.querySelector('#dob').value);
        const now = new Date(page.querySelector('#targetDate').value);

        if (isNaN(dob.getTime())) {
            alert('Please select a valid date of birth');
            return;
        }

        let years = now.getFullYear() - dob.getFullYear();
        let months = now.getMonth() - dob.getMonth();
        let days = now.getDate() - dob.getDate();

        if (days < 0) {
            months--;
            const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
            days += prevMonth.getDate();
        }
        if (months < 0) {
            years--;
            months += 12;
        }

        const totalDays = Math.floor((now - dob) / (1000 * 60 * 60 * 24));
        const nextBirthday = new Date(now.getFullYear(), dob.getMonth(), dob.getDate());
        if (nextBirthday < now) nextBirthday.setFullYear(now.getFullYear() + 1);
        const daysToBirthday = Math.floor((nextBirthday - now) / (1000 * 60 * 60 * 24));

        page.querySelector('#ageResult').innerHTML = `
      <div class="result-box">
        <div class="result-label">Current Age</div>
        <div class="result-value">${years} Years, ${months} Months, ${days} Days</div>
      </div>
      <div class="result-grid">
        <div class="result-item">
          <div class="result-label">Total Days</div>
          <div class="result-value">${totalDays.toLocaleString()}</div>
        </div>
        <div class="result-item">
          <div class="result-label">Next Birthday</div>
          <div class="result-value">${daysToBirthday} Days</div>
        </div>
      </div>
    `;
    };

    return page;
}
