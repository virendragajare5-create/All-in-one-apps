/**
 * Color Picker
 * Simple tool to select colors and get HEX/RGB codes.
 */
import { showToast } from '../../utils/storage.js';

export function renderColorPicker() {
    const page = document.createElement('div');
    page.className = 'page-content tool-page';

    page.innerHTML = `
    <h2>🎨 Color Picker</h2>
    
    <div class="form-group text-center">
      <input type="color" id="colorInp" class="form-input" style="height: 150px; cursor: pointer; border: none; padding: 0;" value="#6366f1">
    </div>

    <div class="result-box mt-xl">
      <div class="result-label">HEX CODE</div>
      <div id="hexVal" class="result-value" style="font-family: monospace">#6366F1</div>
      <button class="btn btn-sm btn-text copy-color" data-target="hexVal">📋 Copy HEX</button>
    </div>

    <div class="result-box mt-md">
      <div class="result-label">RGB CODE</div>
      <div id="rgbVal" class="result-value" style="font-family: monospace">rgb(99, 102, 241)</div>
      <button class="btn btn-sm btn-text copy-color" data-target="rgbVal">📋 Copy RGB</button>
    </div>

    <div class="mt-xl">
      <h3>Quick Presets</h3>
      <div class="grid-3-col mt-md">
        <div class="tool-card preset-color" style="background: #ef4444; height: 50px" data-color="#ef4444"></div>
        <div class="tool-card preset-color" style="background: #22c55e; height: 50px" data-color="#22c55e"></div>
        <div class="tool-card preset-color" style="background: #3b82f6; height: 50px" data-color="#3b82f6"></div>
        <div class="tool-card preset-color" style="background: #f59e0b; height: 50px" data-color="#f59e0b"></div>
        <div class="tool-card preset-color" style="background: #8b5cf6; height: 50px" data-color="#8b5cf6"></div>
        <div class="tool-card preset-color" style="background: #ec4899; height: 50px" data-color="#ec4899"></div>
      </div>
    </div>
  `;

    const input = page.querySelector('#colorInp');
    const hexVal = page.querySelector('#hexVal');
    const rgbVal = page.querySelector('#rgbVal');

    const update = (hex) => {
        hexVal.textContent = hex.toUpperCase();

        // Hex to RGB
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        rgbVal.textContent = `rgb(${r}, ${g}, ${b})`;
        input.value = hex;
    };

    input.oninput = (e) => update(e.target.value);

    page.querySelectorAll('.preset-color').forEach(btn => {
        btn.onclick = () => update(btn.dataset.color);
    });

    page.querySelectorAll('.copy-color').forEach(btn => {
        btn.onclick = () => {
            const target = page.querySelector('#' + btn.dataset.target);
            navigator.clipboard.writeText(target.textContent);
            showToast('Copied to clipboard!');
        };
    });

    return page;
}
