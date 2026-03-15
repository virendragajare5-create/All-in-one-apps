/**
 * Profit / Loss Calculator
 * Calculates profit or loss based on cost price and selling price.
 */

export function renderProfitLoss() {
    const page = document.createElement('div');
    page.className = 'page-content tool-page';

    page.innerHTML = `
    <h2>📊 Profit / Loss Calculator</h2>
    <div class="form-group">
      <label for="plCost">Cost Price</label>
      <input type="number" class="form-input" id="plCost" placeholder="e.g. 500" min="0" step="0.01" />
    </div>
    <div class="form-group">
      <label for="plSell">Selling Price</label>
      <input type="number" class="form-input" id="plSell" placeholder="e.g. 650" min="0" step="0.01" />
    </div>
    <button class="btn btn-primary" id="plCalcBtn">Calculate</button>
    <div id="plResult"></div>
  `;

    page.querySelector('#plCalcBtn').addEventListener('click', () => {
        const costPrice = parseFloat(page.querySelector('#plCost').value);
        const sellPrice = parseFloat(page.querySelector('#plSell').value);

        if (isNaN(costPrice) || isNaN(sellPrice) || costPrice < 0 || sellPrice < 0) {
            page.querySelector('#plResult').innerHTML = `
        <div class="result-box">
          <div class="result-label">⚠️ Error</div>
          <div class="result-detail">Please enter valid cost and selling prices.</div>
        </div>
      `;
            return;
        }

        const diff = sellPrice - costPrice;
        const percentage = costPrice > 0 ? Math.abs(diff / costPrice * 100) : 0;
        const isProfit = diff >= 0;

        page.querySelector('#plResult').innerHTML = `
      <div class="result-box">
        <div class="result-label">${isProfit ? '✅ Profit' : '❌ Loss'}</div>
        <div class="result-value" style="color: ${isProfit ? 'var(--color-success)' : 'var(--color-danger)'}">
          ₹${Math.abs(diff).toFixed(2)}
        </div>
        <div class="result-detail">${percentage.toFixed(2)}% ${isProfit ? 'profit' : 'loss'} on cost price</div>
      </div>
      <div class="result-grid">
        <div class="result-item">
          <div class="result-label">Cost Price</div>
          <div class="result-value">₹${costPrice.toFixed(2)}</div>
        </div>
        <div class="result-item">
          <div class="result-label">Selling Price</div>
          <div class="result-value">₹${sellPrice.toFixed(2)}</div>
        </div>
      </div>
    `;
    });

    return page;
}
