/**
 * Simple Loan Calculator
 * Calculates monthly payments for basic loans.
 */
export function renderLoanCalculator() {
    const page = document.createElement('div');
    page.className = 'page-content tool-page';

    page.innerHTML = `
    <h2>🏦 Simple Loan Calculator</h2>
    <div class="form-group">
      <label>Loan Amount</label>
      <input type="number" id="loanAmt" class="form-input" value="100000">
    </div>
    <div class="form-group">
      <label>Annual Interest Rate (%)</label>
      <input type="number" id="loanRate" class="form-input" value="10">
    </div>
    <div class="form-group">
      <label>Loan Term (Years)</label>
      <input type="number" id="loanTerm" class="form-input" value="5">
    </div>
    <button class="btn btn-primary" id="calcLoan">🏦 Calculate EMI</button>
    <div id="loanResult"></div>
  `;

    page.querySelector('#calcLoan').onclick = () => {
        const P = parseFloat(page.querySelector('#loanAmt').value);
        const R = parseFloat(page.querySelector('#loanRate').value) / 12 / 100;
        const N = parseFloat(page.querySelector('#loanTerm').value) * 12;

        const emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
        const totalP = emi * N;
        const totalInt = totalP - P;

        page.querySelector('#loanResult').innerHTML = `
      <div class="result-box">
        <div class="result-label">Monthly EMI</div>
        <div class="result-value">₹${Math.round(emi).toLocaleString()}</div>
      </div>
      <div class="result-grid">
        <div class="result-item">
          <div class="result-label">Total Payable</div>
          <div class="result-value">₹${Math.round(totalP).toLocaleString()}</div>
        </div>
        <div class="result-item">
          <div class="result-label">Total Interest</div>
          <div class="result-value">₹${Math.round(totalInt).toLocaleString()}</div>
        </div>
      </div>
    `;
    };

    return page;
}
