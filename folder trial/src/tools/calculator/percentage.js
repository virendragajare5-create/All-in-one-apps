/**
 * Percentage Calculator
 * Solves common percentage problems.
 */
export function renderPercentageCalculator() {
    const page = document.createElement('div');
    page.className = 'page-content tool-page';

    page.innerHTML = `
    <h2>📊 Percentage Calculator</h2>
    
    <div class="note-card mb-md">
      <div class="note-title">What is X% of Y?</div>
      <div class="form-row mt-sm">
        <input type="number" id="p1_x" class="form-input" placeholder="X">
        <input type="number" id="p1_y" class="form-input" placeholder="Y">
      </div>
      <button class="btn btn-sm btn-primary mt-sm" id="calcP1">Calculate</button>
      <div id="resP1" class="mt-sm font-bold text-primary"></div>
    </div>

    <div class="note-card mb-md">
      <div class="note-title">X is what % of Y?</div>
      <div class="form-row mt-sm">
        <input type="number" id="p2_x" class="form-input" placeholder="X">
        <input type="number" id="p2_y" class="form-input" placeholder="Y">
      </div>
      <button class="btn btn-sm btn-primary mt-sm" id="calcP2">Calculate</button>
      <div id="resP2" class="mt-sm font-bold text-primary"></div>
    </div>

    <div class="note-card">
      <div class="note-title">% Increase/Decrease (X to Y)</div>
      <div class="form-row mt-sm">
        <input type="number" id="p3_x" class="form-input" placeholder="From">
        <input type="number" id="p3_y" class="form-input" placeholder="To">
      </div>
      <button class="btn btn-sm btn-primary mt-sm" id="calcP3">Calculate</button>
      <div id="resP3" class="mt-sm font-bold text-primary"></div>
    </div>
  `;

    page.querySelector('#calcP1').onclick = () => {
        const x = parseFloat(page.querySelector('#p1_x').value);
        const y = parseFloat(page.querySelector('#p1_y').value);
        const res = (x / 100) * y;
        page.querySelector('#resP1').textContent = `Result: ${res}`;
    };

    page.querySelector('#calcP2').onclick = () => {
        const x = parseFloat(page.querySelector('#p2_x').value);
        const y = parseFloat(page.querySelector('#p2_y').value);
        const res = (x / y) * 100;
        page.querySelector('#resP2').textContent = `Result: ${res.toFixed(2)}%`;
    };

    page.querySelector('#calcP3').onclick = () => {
        const x = parseFloat(page.querySelector('#p3_x').value);
        const y = parseFloat(page.querySelector('#p3_y').value);
        const res = ((y - x) / x) * 100;
        page.querySelector('#resP3').textContent = `Result: ${res > 0 ? '+' : ''}${res.toFixed(2)}%`;
    };

    return page;
}
