/**
 * Tip Splitter
 * Splits bill equally among people, with optional tip percentage.
 */

export function renderTipSplitter() {
    const page = document.createElement('div');
    page.className = 'page-content tool-page';

    page.innerHTML = `
    <h2>🍽️ Tip Splitter</h2>
    <div class="form-group">
      <label for="tipBill">Bill Amount</label>
      <input type="number" class="form-input" id="tipBill" placeholder="e.g. 2400" min="0" step="0.01" />
    </div>
    <div class="form-row">
      <div class="form-group">
        <label for="tipPercent">Tip (%)</label>
        <input type="number" class="form-input" id="tipPercent" placeholder="e.g. 10" min="0" max="100" value="0" step="1" />
      </div>
      <div class="form-group">
        <label for="tipPeople">Number of People</label>
        <input type="number" class="form-input" id="tipPeople" placeholder="e.g. 4" min="1" step="1" />
      </div>
    </div>
    <button class="btn btn-primary" id="tipCalcBtn">Split Bill</button>
    <div id="tipResult"></div>
  `;

    page.querySelector('#tipCalcBtn').addEventListener('click', () => {
        const bill = parseFloat(page.querySelector('#tipBill').value);
        const tipPercent = parseFloat(page.querySelector('#tipPercent').value) || 0;
        const people = parseInt(page.querySelector('#tipPeople').value);

        if (isNaN(bill) || isNaN(people) || bill <= 0 || people <= 0) {
            page.querySelector('#tipResult').innerHTML = `
        <div class="result-box">
          <div class="result-label">⚠️ Error</div>
          <div class="result-detail">Please enter valid bill amount and number of people.</div>
        </div>
      `;
            return;
        }

        const tipAmount = (bill * tipPercent) / 100;
        const totalBill = bill + tipAmount;
        const perPerson = totalBill / people;

        page.querySelector('#tipResult').innerHTML = `
      <div class="result-box">
        <div class="result-label">Per Person</div>
        <div class="result-value">₹${perPerson.toFixed(2)}</div>
      </div>
      <div class="result-grid">
        <div class="result-item">
          <div class="result-label">Tip Amount</div>
          <div class="result-value">₹${tipAmount.toFixed(2)}</div>
        </div>
        <div class="result-item">
          <div class="result-label">Total Bill</div>
          <div class="result-value">₹${totalBill.toFixed(2)}</div>
        </div>
      </div>
    `;
    });

    return page;
}
