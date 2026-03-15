/**
 * Loan EMI Calculator
 * EMI = P × r × (1+r)^n / ((1+r)^n - 1)
 * P = Principal, r = monthly rate, n = months
 */

export function renderEMI() {
    const page = document.createElement('div');
    page.className = 'page-content tool-page';

    page.innerHTML = `
    <h2>🏦 Loan EMI Calculator</h2>
    <div class="form-group">
      <label for="emiPrincipal">Loan Amount (₹)</label>
      <input type="number" class="form-input" id="emiPrincipal" placeholder="e.g. 500000" min="0" step="1000" />
    </div>
    <div class="form-row">
      <div class="form-group">
        <label for="emiRate">Interest Rate (% per year)</label>
        <input type="number" class="form-input" id="emiRate" placeholder="e.g. 8.5" min="0" step="0.1" />
      </div>
      <div class="form-group">
        <label for="emiTenure">Duration (months)</label>
        <input type="number" class="form-input" id="emiTenure" placeholder="e.g. 60" min="1" step="1" />
      </div>
    </div>
    <button class="btn btn-primary" id="emiCalcBtn">Calculate EMI</button>
    <div id="emiResult"></div>
  `;

    page.querySelector('#emiCalcBtn').addEventListener('click', () => {
        const P = parseFloat(page.querySelector('#emiPrincipal').value);
        const annualRate = parseFloat(page.querySelector('#emiRate').value);
        const n = parseInt(page.querySelector('#emiTenure').value);

        if (isNaN(P) || isNaN(annualRate) || isNaN(n) || P <= 0 || annualRate < 0 || n <= 0) {
            page.querySelector('#emiResult').innerHTML = `
        <div class="result-box">
          <div class="result-label">⚠️ Error</div>
          <div class="result-detail">Please enter valid loan amount, interest rate, and duration.</div>
        </div>
      `;
            return;
        }

        let emi, totalPayment, totalInterest;

        if (annualRate === 0) {
            emi = P / n;
            totalPayment = P;
            totalInterest = 0;
        } else {
            const r = annualRate / 12 / 100;
            const rPowN = Math.pow(1 + r, n);
            emi = (P * r * rPowN) / (rPowN - 1);
            totalPayment = emi * n;
            totalInterest = totalPayment - P;
        }

        page.querySelector('#emiResult').innerHTML = `
      <div class="result-box">
        <div class="result-label">Monthly EMI</div>
        <div class="result-value">₹${emi.toFixed(2)}</div>
      </div>
      <div class="result-grid">
        <div class="result-item">
          <div class="result-label">Total Payment</div>
          <div class="result-value">₹${totalPayment.toFixed(0)}</div>
        </div>
        <div class="result-item">
          <div class="result-label">Total Interest</div>
          <div class="result-value">₹${totalInterest.toFixed(0)}</div>
        </div>
      </div>
    `;
    });

    return page;
}
