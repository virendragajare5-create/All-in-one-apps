/**
 * Discount Calculator
 * Calculates final price after applying a discount percentage.
 */

export function renderDiscount() {
    const page = document.createElement('div');
    page.className = 'page-content tool-page';

    page.innerHTML = `
    <h2>🏷️ Discount Calculator</h2>
    <div class="form-group">
      <label for="discountPrice">Original Price</label>
      <input type="number" class="form-input" id="discountPrice" placeholder="e.g. 1500" min="0" step="0.01" />
    </div>
    <div class="form-group">
      <label for="discountPercent">Discount (%)</label>
      <input type="number" class="form-input" id="discountPercent" placeholder="e.g. 20" min="0" max="100" step="0.1" />
    </div>
    <button class="btn btn-primary" id="discountCalcBtn">Calculate</button>
    <div id="discountResult"></div>
  `;

    page.querySelector('#discountCalcBtn').addEventListener('click', () => {
        const price = parseFloat(page.querySelector('#discountPrice').value);
        const discount = parseFloat(page.querySelector('#discountPercent').value);

        if (isNaN(price) || isNaN(discount) || price < 0 || discount < 0 || discount > 100) {
            page.querySelector('#discountResult').innerHTML = `
        <div class="result-box">
          <div class="result-label">⚠️ Error</div>
          <div class="result-detail">Please enter valid price and discount percentage (0-100).</div>
        </div>
      `;
            return;
        }

        const saved = (price * discount) / 100;
        const finalPrice = price - saved;

        page.querySelector('#discountResult').innerHTML = `
      <div class="result-box">
        <div class="result-label">Final Price</div>
        <div class="result-value">₹${finalPrice.toFixed(2)}</div>
        <div class="result-detail">You save ₹${saved.toFixed(2)} (${discount}% off)</div>
      </div>
    `;
    });

    return page;
}
