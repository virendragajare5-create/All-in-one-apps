/**
 * Date Difference Calculator
 * Calculates calendar days between two specific dates.
 */
export function renderDateDiffCalculator() {
    const page = document.createElement('div');
    page.className = 'page-content tool-page';

    page.innerHTML = `
    <h2>📅 Date Difference Calculator</h2>
    <div class="form-group">
      <label>State Date</label>
      <input type="date" id="date1" class="form-input" value="${new Date().toISOString().split('T')[0]}">
    </div>
    <div class="form-group">
      <label>End Date</label>
      <input type="date" id="date2" class="form-input">
    </div>
    <button class="btn btn-primary" id="calcDateDiff">📅 Calculate Days</button>
    <div id="dateDiffResult"></div>

    <div class="mt-xl">
      <h3>Add/Subtract Days</h3>
      <div class="form-group">
        <label>Start From</label>
        <input type="date" id="addBase" class="form-input" value="${new Date().toISOString().split('T')[0]}">
      </div>
      <div class="form-group">
        <label>Days to Add (+/-)</label>
        <input type="number" id="addCount" class="form-input" value="30">
      </div>
      <button class="btn btn-secondary" id="calcDateAdd">🗓️ Find New Date</button>
      <div id="dateAddResult"></div>
    </div>
  `;

    page.querySelector('#calcDateDiff').onclick = () => {
        const d1 = new Date(page.querySelector('#date1').value);
        const d2 = new Date(page.querySelector('#date2').value);

        if (isNaN(d1) || isNaN(d2)) return;

        const diffMs = Math.abs(d2 - d1);
        const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

        // Detailed breakdown
        let years = d2.getFullYear() - d1.getFullYear();
        let months = d2.getMonth() - d1.getMonth();
        if (months < 0 || (months === 0 && d2.getDate() < d1.getDate())) {
            years--;
        }

        page.querySelector('#dateDiffResult').innerHTML = `
      <div class="result-box">
        <div class="result-label">Difference</div>
        <div class="result-value">${diffDays.toLocaleString()} Days</div>
        <div class="result-detail">Approx. ${years} years, ${(diffDays / 30.4).toFixed(1)} months</div>
      </div>
    `;
    };

    page.querySelector('#calcDateAdd').onclick = () => {
        const base = new Date(page.querySelector('#addBase').value);
        const count = parseInt(page.querySelector('#addCount').value);

        if (isNaN(base)) return;

        const result = new Date(base);
        result.setDate(base.getDate() + count);

        page.querySelector('#dateAddResult').innerHTML = `
      <div class="result-box">
        <div class="result-label">New Date</div>
        <div class="result-value">${result.toDateString()}</div>
      </div>
    `;
    };

    return page;
}
