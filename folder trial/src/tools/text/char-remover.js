/**
 * Character Remover
 * Strips specific characters, digits, or symbols from text.
 */
export function renderCharRemover() {
    const page = document.createElement('div');
    page.className = 'page-content tool-page';

    page.innerHTML = `
    <h2>✂️ Character Remover</h2>
    <div class="form-group">
      <label>Input Text</label>
      <textarea id="remInput" class="form-textarea" placeholder="Paste text here..."></textarea>
    </div>
    
    <div class="grid-2-col">
      <button class="btn btn-secondary" id="remDigits">Remove Digits (0-9)</button>
      <button class="btn btn-secondary" id="remAlpha">Remove Letters (a-z)</button>
      <button class="btn btn-secondary" id="remSymbols">Remove Symbols</button>
      <button class="btn btn-secondary" id="remCustom">Remove Custom Char</button>
    </div>

    <div class="form-group mt-md" id="customCharGroup" style="display:none">
      <label>Char to remove</label>
      <input type="text" id="customChar" class="form-input" maxlength="1" placeholder="e.g. ,">
    </div>

    <div class="result-box mt-lg">
      <div class="result-label">Clean Result</div>
      <div id="remResult" class="output-area"></div>
      <button class="btn btn-sm btn-primary mt-sm" id="copyRem">📋 Copy Result</button>
    </div>
  `;

    const input = page.querySelector('#remInput');
    const result = page.querySelector('#remResult');
    const customGroup = page.querySelector('#customCharGroup');
    const customInput = page.querySelector('#customChar');

    page.querySelector('#remDigits').onclick = () => result.textContent = input.value.replace(/\d/g, '');
    page.querySelector('#remAlpha').onclick = () => result.textContent = input.value.replace(/[a-zA-Z]/g, '');
    page.querySelector('#remSymbols').onclick = () => result.textContent = input.value.replace(/[^\w\s]|_/g, '');

    page.querySelector('#remCustom').onclick = () => {
        customGroup.style.display = 'block';
    };

    customInput.oninput = () => {
        const char = customInput.value;
        if (char) {
            result.textContent = input.value.split(char).join('');
        }
    };

    page.querySelector('#copyRem').onclick = () => {
        navigator.clipboard.writeText(result.textContent);
        import('../../utils/storage.js').then(m => m.showToast('Copied!'));
    };

    return page;
}
