/**
 * Random Number Generator
 * Generates a random number within a specified range.
 */
export function renderRandomNum() {
    const page = document.createElement('div');
    page.className = 'page-content tool-page';

    page.innerHTML = `
    <h2>🎲 Random Number Generator</h2>
    <div class="form-row">
      <div class="form-group">
        <label>Min</label>
        <input type="number" id="minVal" class="form-input" value="1">
      </div>
      <div class="form-group">
        <label>Max</label>
        <input type="number" id="maxVal" class="form-input" value="100">
      </div>
    </div>
    
    <div class="toggle-row mb-lg">
      <label>Allow decimals</label>
      <div class="toggle" id="decimalToggle"></div>
    </div>

    <button class="btn btn-primary" id="genNum">🎲 Generate Random Number</button>

    <div class="result-box mt-xl">
      <div class="result-label">Result</div>
      <div id="numResult" class="result-value" style="font-size: 4rem">?</div>
    </div>
  `;

    const toggle = page.querySelector('#decimalToggle');
    toggle.onclick = () => toggle.classList.toggle('active');

    page.querySelector('#genNum').onclick = () => {
        const min = parseFloat(page.querySelector('#minVal').value);
        const max = parseFloat(page.querySelector('#maxVal').value);
        const isDecimal = toggle.classList.contains('active');

        if (min >= max) {
            alert('Min must be less than Max');
            return;
        }

        let res;
        if (isDecimal) {
            res = (Math.random() * (max - min) + min).toFixed(2);
        } else {
            res = Math.floor(Math.random() * (max - min + 1)) + min;
        }

        page.querySelector('#numResult').textContent = res;
        if ('vibrate' in navigator) navigator.vibrate(20);
    };

    return page;
}
