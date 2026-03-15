/**
 * Text Formatter
 * Cleans up messy text (removing extra spaces, fixing lines, etc).
 */
export function renderTextFormatter() {
    const page = document.createElement('div');
    page.className = 'page-content tool-page';

    page.innerHTML = `
    <h2>✨ Text Formatter</h2>
    <div class="form-group">
      <label>Messy Text</label>
      <textarea id="formatInput" class="form-textarea" placeholder="Paste text here..."></textarea>
    </div>
    
    <div class="grid-2-col">
      <button class="btn btn-secondary" id="cleanSpaces">Remove Extra Spaces</button>
      <button class="btn btn-secondary" id="cleanLines">Remove Empty Lines</button>
      <button class="btn btn-secondary" id="trimAll">Trim Every Line</button>
      <button class="btn btn-secondary" id="smartFormat">Smart Format</button>
    </div>

    <div class="result-box mt-lg">
      <div class="result-label">Clean Result</div>
      <div id="formatResult" class="output-area"></div>
      <button class="btn btn-sm btn-primary mt-sm" id="copyFormat">📋 Copy Result</button>
    </div>
  `;

    const input = page.querySelector('#formatInput');
    const result = page.querySelector('#formatResult');

    page.querySelector('#cleanSpaces').onclick = () => {
        result.textContent = input.value.replace(/[ \t]+/g, ' ').trim();
    };

    page.querySelector('#cleanLines').onclick = () => {
        result.textContent = input.value.split('\n').filter(l => l.trim().length > 0).join('\n');
    };

    page.querySelector('#trimAll').onclick = () => {
        result.textContent = input.value.split('\n').map(l => l.trim()).join('\n');
    };

    page.querySelector('#smartFormat').onclick = () => {
        result.textContent = input.value
            .replace(/[ \t]+/g, ' ')               // Single spaces
            .split('\n')
            .map(l => l.trim())                     // Trim lines
            .filter(l => l.length > 0)             // Remove empty
            .join('\n')
            .replace(/([.!?])\s*(\w)/g, (m, p, n) => `${p} ${n.toUpperCase()}`); // Fix sentence casing
    };

    page.querySelector('#copyFormat').onclick = () => {
        navigator.clipboard.writeText(result.textContent);
        import('../../utils/storage.js').then(m => m.showToast('Copied to clipboard!'));
    };

    return page;
}
