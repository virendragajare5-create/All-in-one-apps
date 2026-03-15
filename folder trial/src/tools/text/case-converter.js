/**
 * Case Converter
 * Converts text between various cases (upper, lower, sentence, etc).
 */
export function renderCaseConverter() {
    const page = document.createElement('div');
    page.className = 'page-content tool-page';

    page.innerHTML = `
    <h2>🔠 Case Converter</h2>
    <div class="form-group">
      <label>Input Text</label>
      <textarea id="caseInput" class="form-textarea" placeholder="Enter or paste text here..."></textarea>
    </div>
    
    <div class="grid-2-col">
      <button class="btn btn-secondary" data-case="upper">UPPERCASE</button>
      <button class="btn btn-secondary" data-case="lower">lowercase</button>
      <button class="btn btn-secondary" data-case="sentence">Sentence case</button>
      <button class="btn btn-secondary" data-case="title">Title Case</button>
      <button class="btn btn-secondary" data-case="camel">camelCase</button>
      <button class="btn btn-secondary" data-case="slug">slug-case</button>
    </div>

    <div class="result-box mt-lg">
      <div class="result-label">Result</div>
      <div id="caseResult" class="output-area"></div>
      <button class="btn btn-sm btn-primary mt-sm" id="copyCase">📋 Copy Result</button>
    </div>
  `;

    const input = page.querySelector('#caseInput');
    const result = page.querySelector('#caseResult');

    page.querySelectorAll('[data-case]').forEach(btn => {
        btn.onclick = () => {
            const text = input.value;
            let converted = '';
            const mode = btn.dataset.case;

            if (mode === 'upper') converted = text.toUpperCase();
            else if (mode === 'lower') converted = text.toLowerCase();
            else if (mode === 'sentence') {
                converted = text.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g, c => c.toUpperCase());
            }
            else if (mode === 'title') {
                converted = text.toLowerCase().split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
            }
            else if (mode === 'camel') {
                converted = text.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
            }
            else if (mode === 'slug') {
                converted = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
            }

            result.textContent = converted;
        };
    });

    page.querySelector('#copyCase').onclick = () => {
        navigator.clipboard.writeText(result.textContent);
        import('../../utils/storage.js').then(m => m.showToast('Copied to clipboard!'));
    };

    return page;
}
