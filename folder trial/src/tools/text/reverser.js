/**
 * Text Reverser
 * Reverses characters, words, or lines.
 */
export function renderTextReverser() {
    const page = document.createElement('div');
    page.className = 'page-content tool-page';

    page.innerHTML = `
    <h2>↩️ Text Reverser</h2>
    <div class="form-group">
      <label>Input Text</label>
      <textarea id="revInput" class="form-textarea" placeholder="Enter text to flip..."></textarea>
    </div>
    
    <div class="grid-3-col">
      <button class="btn btn-secondary" data-mode="chars">Reverse Chars</button>
      <button class="btn btn-secondary" data-mode="words">Reverse Words</button>
      <button class="btn btn-secondary" data-mode="lines">Reverse Lines</button>
    </div>

    <div class="result-box mt-lg">
      <div class="result-label">Output</div>
      <div id="revResult" class="output-area"></div>
      <button class="btn btn-sm btn-primary mt-sm" id="copyRev">📋 Copy Result</button>
    </div>
  `;

    page.querySelectorAll('[data-mode]').forEach(btn => {
        btn.onclick = () => {
            const text = page.querySelector('#revInput').value;
            const mode = btn.dataset.mode;
            let res = '';

            if (mode === 'chars') res = text.split('').reverse().join('');
            else if (mode === 'words') res = text.split(/\s+/).reverse().join(' ');
            else if (mode === 'lines') res = text.split('\n').reverse().join('\n');

            page.querySelector('#revResult').textContent = res;
        };
    });

    page.querySelector('#copyRev').onclick = () => {
        navigator.clipboard.writeText(page.querySelector('#revResult').textContent);
        import('../../utils/storage.js').then(m => m.showToast('Copied to clipboard!'));
    };

    return page;
}
