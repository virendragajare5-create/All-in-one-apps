/**
 * Fancy Text Generator
 * Maps standard characters to Unicode "fancy" characters.
 */
export function renderFancyText() {
    const page = document.createElement('div');
    page.className = 'page-content tool-page';

    const maps = {
        bold: { a: '𝐚', b: '𝐛', c: '𝐜', d: '𝐝', e: '𝐞', f: '𝐟', g: '𝐠', h: '𝐡', i: '𝐢', j: '𝐣', k: '𝐤', l: '𝐥', m: '𝐦', n: '𝐧', o: '𝐨', p: '𝐩', q: '𝐪', r: '𝐫', s: '𝐬', t: '𝐭', u: '𝐮', v: '𝐯', w: '𝐰', x: '𝐱', y: '𝐲', z: '𝐳' },
        italic: { a: '𝘢', b: '𝘣', c: '𝘤', d: '𝘥', e: '𝘦', f: '𝘧', g: '𝘨', h: '𝘩', i: '𝘪', j: '𝘫', k: '𝘬', l: '𝘭', m: '𝘮', n: '𝘯', o: '𝘰', p: '𝘱', q: '𝘲', r: '𝘳', s: '𝘴', t: '𝘵', u: '𝘶', v: '𝘷', w: '𝘸', x: '𝘹', y: '𝘺', z: '𝘻' },
        monospace: { a: '𝚊', b: '𝚋', c: '𝚌', d: '𝚍', e: '𝚎', f: '𝚏', g: '𝚐', h: '𝚑', i: '𝚒', j: '𝚓', k: '𝚔', l: '𝚕', m: '𝚖', n: '𝚗', o: '𝚘', p: '𝚙', q: '𝚚', r: '𝚛', s: '𝚜', t: '𝚝', u: '𝚞', v: '𝚟', w: '𝚠', x: '𝚡', y: '𝚢', z: '𝚣' },
        script: { a: '𝒶', b: '𝒷', c: '𝒸', d: '𝒹', e: 'ℯ', f: '𝒻', g: 'ℊ', h: '𝒽', i: '𝒾', j: '𝒿', k: '𝓀', l: '𝓁', m: '𝓂', n: '𝓃', o: 'ℴ', p: '𝓅', q: '𝓆', r: '𝓇', s: '𝓈', t: '𝓉', u: '𝓊', v: '𝓋', w: '𝓌', x: '𝓍', y: '𝓎', z: '𝓏' }
    };

    page.innerHTML = `
    <h2>✨ Fancy Text Generator</h2>
    <div class="form-group">
      <label>Standard Text</label>
      <input type="text" id="fancyInput" class="form-input" placeholder="Type something..." value="Hello World">
    </div>
    
    <div id="fancyResults" class="tools-list mt-lg"></div>
  `;

    const input = page.querySelector('#fancyInput');
    const resultsEl = page.querySelector('#fancyResults');

    const convert = (text, map) => {
        return text.toLowerCase().split('').map(char => map[char] || char).join('');
    };

    const update = () => {
        const text = input.value || 'Hello';
        resultsEl.innerHTML = Object.keys(maps).map(key => {
            const fancy = convert(text, maps[key]);
            return `
          <div class="tool-card uname-item" style="padding: 15px 20px">
            <div class="tool-name" style="font-size: 1.2rem">${fancy}</div>
            <button class="btn btn-sm btn-secondary copy-fancy" data-text="${fancy}">📋</button>
          </div>
        `;
        }).join('');

        resultsEl.querySelectorAll('.copy-fancy').forEach(btn => {
            btn.onclick = () => {
                navigator.clipboard.writeText(btn.dataset.text);
                import('../../utils/storage.js').then(m => m.showToast('Copied!'));
            };
        });
    };

    input.oninput = update;
    update();

    return page;
}
