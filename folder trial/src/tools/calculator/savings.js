/**
 * Savings Calculator (Compound Interest)
 * Calculates future value of savings with monthly contributions.
 */
export function renderSavingsCalculator() {
    const page = document.createElement('div');
    page.className = 'page-content tool-page';

    page.innerHTML = `
    <h2>🏦 Savings Calculator</h2>
    <div class="form-group">
      <label>Initial Deposit</label>
      <input type="number" id="savInitial" class="form-input" value="10000">
    </div>
    <div class="form-group">
      <label>Monthly Contribution</label>
      <input type="number" id="savMonthly" class="form-input" value="5000">
    </div>
    <div class="form-row">
      <div class="form-group">
        <label>Interest Rate (Annual %)</label>
        <input type="number" id="savRate" class="form-input" value="8">
      </div>
      <div class="form-group">
        <label>Duration (Years)</label>
        <input type="number" id="savYears" class="form-input" value="5">
      </div>
    </div>
    <button class="btn btn-primary" id="calcSavings">🏦 Calculate Growth</button>
    <div id="savingsResult"></div>
  `;

    page.querySelector('#calcSavings').onclick = () => {
        const P = parseFloat(page.querySelector('#savInitial').value);
        const PMT = parseFloat(page.querySelector('#savMonthly').value);
        const r = parseFloat(page.querySelector('#savRate').value) / 100 / 12;
        const n = parseFloat(page.querySelector('#savYears').value) * 12;

        // Compound Interest for Principal: FV_P = P * (1+r)^n
        // Future Value of Series: FV_PMT = PMT * [((1+r)^n - 1) / r]

        const fvP = P * Math.pow(1 + r, n);
        const fvPMT = PMT * ((Math.pow(1 + r, n) - 1) / r);
        const totalValue = fvP + fvPMT;
        const totalInvested = P + (PMT * n);
        const totalInterest = totalValue - totalInvested;

        page.querySelector('#savingsResult').innerHTML = `
      <div class="result-box">
        <div class="result-label">Estimated Total Value</div>
        <div class="result-value">₹${Math.round(totalValue).toLocaleString()}</div>
      </div>
      <div class="result-grid">
        <div class="result-item">
          <div class="result-label">Total Invested</div>
          <div class="result-value">₹${Math.round(totalInvested).toLocaleString()}</div>
        </div>
        <div class="result-item">
          <div class="result-label">Total Interest</div>
          <div class="result-value">₹${Math.round(totalInterest).toLocaleString()}</div>
        </div>
      </div>
      <div class="progress-bar mt-md" style="height: 10px">
        <div class="progress-fill" style="width: ${(totalInvested / totalValue * 100).toFixed(1)}%; background: var(--color-primary)"></div>
        <div class="progress-fill" style="width: ${(totalInterest / totalValue * 100).toFixed(1)}%; background: var(--color-accent); position: relative; left: ${(totalInvested / totalValue * 100).toFixed(1)}%"></div>
      </div>
      <p class="text-xs text-muted mt-sm text-center">
        Purple: Principal | Teal: Interest Earned
      </p>
    `;
    };

    return page;
}
