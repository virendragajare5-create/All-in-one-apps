/**
 * GST Calculator
 * Calculates Net, GST, and Total price.
 */
export function renderGSTCalculator() {
    const page = document.createElement('div');
    page.className = 'page-content tool-page';

    page.innerHTML = `
    <h2>🧾 GST Calculator</h2>
    <div class="form-group">
      <label>Amount (Price)</label>
      <input type="number" id="gstAmount" class="form-input" value="1000">
    </div>
    <div class="form-group">
      <label>GST Rate (%)</label>
      <select id="gstRate" class="form-select">
        <option value="5">5%</option>
        <option value="12">12%</option>
        <option value="18" selected>18%</option>
        <option value="28">28%</option>
      </select>
    </div>
    <div class="btn-row">
      <button class="btn btn-primary" id="addGST">➕ Add GST</button>
      <button class="btn btn-secondary" id="removeGST">➖ Remove GST</button>
    </div>
    <div id="gstResult"></div>
  `;

    const calculate = (add) => {
        const amount = parseFloat(page.querySelector('#gstAmount').value);
        const rate = parseFloat(page.querySelector('#gstRate').value);

        let net, gst, total;
        if (add) {
            gst = (amount * rate) / 100;
            net = amount;
            total = amount + gst;
        } else {
            total = amount;
            net = amount / (1 + (rate / 100));
            gst = amount - net;
        }

        page.querySelector('#gstResult').innerHTML = `
      <div class="result-box">
        <div class="result-label">${add ? 'Total (Inc. GST)' : 'Net (Excl. GST)'}</div>
        <div class="result-value">₹${(add ? total : net).toFixed(2)}</div>
      </div>
      <div class="result-grid">
        <div class="result-item">
          <div class="result-label">GST Amount</div>
          <div class="result-value">₹${gst.toFixed(2)}</div>
        </div>
        <div class="result-item"> net.toFixed(2) : amount.toFixed(2) }</div>
          <div class="result-label">Original Price</div>
          <div class="result-value">₹${(add ? net : total).toFixed(2)}</div>
        </div>
      </div>
    `;
    };

    page.querySelector('#addGST').onclick = () => calculate(true);
    page.querySelector('#removeGST').onclick = () => calculate(false);

    return page;
}
