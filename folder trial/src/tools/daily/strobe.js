/**
 * Strobe Light
 * Fast flashing screen light.
 */
export function renderStrobeLight() {
    const page = document.createElement('div');
    page.className = 'page-content tool-page';

    let interval = null;
    let isOn = false;

    page.innerHTML = `
    <h2>🚨 Strobe Light</h2>
    <div id="strobeScreen" class="tool-card" style="height: 300px; transition: 0.1s; display: flex; align-items: center; justify-content: center;">
      <div style="font-size: 5rem">🚨</div>
    </div>
    
    <div class="form-group mt-lg">
      <label>Frequency (ms)</label>
      <input type="range" id="strobeFreq" class="form-input" min="50" max="500" value="100">
      <div class="text-center mt-xs" id="freqVal">100ms</div>
    </div>

    <button class="btn btn-primary mt-lg" id="strobeToggle">START STROBE</button>
    <p class="text-xs text-danger mt-md text-center">⚠️ Epilepsy Warning: Avoid if sensitive up to flashing lights.</p>
  `;

    const screen = page.querySelector('#strobeScreen');
    const btn = page.querySelector('#strobeToggle');
    const range = page.querySelector('#strobeFreq');

    range.oninput = () => {
        page.querySelector('#freqVal').textContent = `${range.value}ms`;
        if (interval) {
            clearInterval(interval);
            start();
        }
    };

    const start = () => {
        interval = setInterval(() => {
            isOn = !isOn;
            screen.style.background = isOn ? 'white' : 'black';
        }, parseInt(range.value));
    };

    btn.onclick = () => {
        if (interval) {
            clearInterval(interval);
            interval = null;
            btn.textContent = 'START STROBE';
            screen.style.background = 'var(--color-bg-card)';
        } else {
            start();
            btn.textContent = 'STOP STROBE';
        }
    };

    // Clean up
    page.addEventListener('remove', () => clearInterval(interval));

    return page;
}
