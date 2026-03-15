/**
 * Hashtag Generator
 * Converts phrases or words into optimized hashtags.
 */
export function renderHashtagGenerator() {
    const page = document.createElement('div');
    page.className = 'page-content tool-page';

    page.innerHTML = `
    <h2>#️⃣ Hashtag Generator</h2>
    <div class="form-group">
      <label>Enter keywords or phrases</label>
      <textarea id="hashInput" class="form-textarea" placeholder="e.g. coffee morning, healthy life"></textarea>
    </div>
    
    <div class="form-group">
      <label>Style</label>
      <select id="hashStyle" class="form-select">
        <option value="camel">#CamelCase</option>
        <option value="lower">#lowercase</option>
      </select>
    </div>

    <button class="btn btn-primary" id="genHash">#️⃣ Generate Hashtags</button>

    <div class="result-box mt-lg">
      <div class="result-label">Hashtags</div>
      <div id="hashResult" class="output-area"></div>
      <button class="btn btn-sm btn-primary mt-sm" id="copyHash">📋 Copy Result</button>
    </div>
  `;

    page.querySelector('#genHash').onclick = () => {
        const text = page.querySelector('#hashInput').value;
        const style = page.querySelector('#hashStyle').value;

        if (!text) return;

        let phrases = text.split(/,|\n/).map(p => p.trim()).filter(p => p.length > 0);

        const hashtags = phrases.map(p => {
            let tag = p;
            if (style === 'camel') {
                tag = p.replace(/(?:^\w|[A-Z]|\b\w)/g, word => word.toUpperCase()).replace(/\s+/g, '');
            } else {
                tag = p.toLowerCase().replace(/\s+/g, '');
            }
            return '#' + tag;
        });

        page.querySelector('#hashResult').textContent = hashtags.join(' ');
    };

    page.querySelector('#copyHash').onclick = () => {
        navigator.clipboard.writeText(page.querySelector('#hashResult').textContent);
        import('../../utils/storage.js').then(m => m.showToast('Copied to clipboard!'));
    };

    return page;
}
