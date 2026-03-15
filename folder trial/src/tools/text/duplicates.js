/**
 * Remove Duplicate Lines
 * Strips out repeated lines from a text block.
 */
export function renderDuplicatesRemover() {
    const page = document.createElement('div');
    page.className = 'page-content tool-page';

    page.innerHTML = `
    <h2>📝 Remove Duplicate Lines</h2>
    <div class="form-group">
      <label>Input Text (One item per line)</label>
      <textarea id="dupInput" class="form-textarea" placeholder="Paste lines of text..."></textarea>
    </div>
    
    <div class="toggle-row">
      <label>Trim whitespace</label>
      <div class="toggle active" id="trimToggle"></div>
    </div>
    
    <button class="btn btn-primary mt-md" id="processDups">✨ Remove Duplicates</button>

    <div class="result-box mt-lg">
      <div class="result-label" id="dupStats">Result</div>
      <div id="dupResult" class="output-area"></div>
      <button class="btn btn-sm btn-primary mt-sm" id="copyDups">📋 Copy Result</button>
    </div>
  `;

    const trimToggle = page.querySelector('#trimToggle');
    trimToggle.onclick = () => trimToggle.classList.toggle('active');

    page.querySelector('#processDups').onclick = () => {
        const text = page.querySelector('#dupInput').value;
        const shouldTrim = trimToggle.classList.contains('active');

        let lines = text.split('\n');
        if (shouldTrim) lines = lines.map(l => l.trim()).filter(l => l.length > 0);

        const originalCount = lines.length;
        const uniqueLines = [...new Set(lines)];
        const uniqueCount = uniqueLines.length;

        page.querySelector('#dupResult').textContent = uniqueLines.join('\n');
        page.querySelector('#dupStats').textContent = `Cleaned (${uniqueCount} unique lines, ${originalCount - uniqueCount} removed)`;
    };

    page.querySelector('#copyDups').onclick = () => {
        navigator.clipboard.writeText(page.querySelector('#dupResult').textContent);
        import('../../utils/storage.js').then(m => m.showToast('Copied to clipboard!'));
    };

    return page;
}
