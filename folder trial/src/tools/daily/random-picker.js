/**
 * Random Picker
 * Randomly selects one option from user-provided list.
 * Includes animated selection effect.
 */

export function renderRandomPicker() {
    const page = document.createElement('div');
    page.className = 'page-content tool-page';

    page.innerHTML = `
    <h2>🎲 Random Picker</h2>
    <div class="form-group">
      <label for="pickerInput">Enter options (one per line)</label>
      <textarea class="form-textarea" id="pickerInput" rows="6" placeholder="Pizza\nBurger\nSushi\nTacos\nPasta"></textarea>
    </div>
    <button class="btn btn-primary" id="pickBtn">🎲 Pick Random!</button>
    <div id="pickerResult"></div>
    <div id="pickerHistory" class="mt-lg"></div>
  `;

    const history = [];

    page.querySelector('#pickBtn').addEventListener('click', () => {
        const text = page.querySelector('#pickerInput').value.trim();
        if (!text) {
            page.querySelector('#pickerResult').innerHTML = `
        <div class="result-box">
          <div class="result-label">⚠️ Error</div>
          <div class="result-detail">Please enter at least one option.</div>
        </div>
      `;
            return;
        }

        const options = text.split('\n').map(s => s.trim()).filter(s => s.length > 0);
        if (options.length === 0) return;

        // Animate selection
        const resultDiv = page.querySelector('#pickerResult');
        let animationCount = 0;
        const totalAnimations = 15;
        const pickBtn = page.querySelector('#pickBtn');
        pickBtn.disabled = true;

        const animInterval = setInterval(() => {
            const randomOption = options[Math.floor(Math.random() * options.length)];
            resultDiv.innerHTML = `
        <div class="result-box" style="text-align: center;">
          <div style="font-size: var(--font-size-xl); font-weight: 700; color: var(--color-text-secondary);">
            ${escapeHtml(randomOption)}
          </div>
        </div>
      `;
            animationCount++;

            if (animationCount >= totalAnimations) {
                clearInterval(animInterval);

                // Final pick
                const finalPick = options[Math.floor(Math.random() * options.length)];
                history.unshift(finalPick);

                resultDiv.innerHTML = `
          <div class="picker-result">
            <div class="picked-item">🎉 ${escapeHtml(finalPick)}</div>
          </div>
        `;

                pickBtn.disabled = false;

                // Update history
                if (history.length > 0) {
                    page.querySelector('#pickerHistory').innerHTML = `
            <div class="text-sm text-muted mb-md">Previous picks:</div>
            <div class="chip-group">
              ${history.slice(0, 10).map(h => `<span class="chip">${escapeHtml(h)}</span>`).join('')}
            </div>
          `;
                }
            }
        }, 80);
    });

    return page;
}

function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}
