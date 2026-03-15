/**
 * Username Generator
 * Generates catchy usernames based on a name or keyword.
 */
export function renderUsernameGenerator() {
    const page = document.createElement('div');
    page.className = 'page-content tool-page';

    const suffixes = ['_pro', 'x', 'Vibe', 'System', 'Master', 'Dev', 'Craft', 'Hub', 'Zone', '101', 'Official', 'Real'];
    const symbols = ['_', '-', '.', ''];

    page.innerHTML = `
    <h2>👤 Username Generator</h2>
    <div class="form-group">
      <label>Base Name / Keyword</label>
      <input type="text" id="unameBase" class="form-input" placeholder="e.g. John, Pixel">
    </div>
    
    <button class="btn btn-primary" id="genUname">👤 Generate Options</button>

    <div class="result-box mt-lg">
      <div class="result-label">Usernames</div>
      <div id="unameResult" class="tools-list"></div>
    </div>
  `;

    const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

    page.querySelector('#genUname').onclick = () => {
        const base = page.querySelector('#unameBase').value.trim() || 'User';
        let options = [];

        for (let i = 0; i < 10; i++) {
            let u = '';
            const style = Math.floor(Math.random() * 4);

            if (style === 0) u = base + getRandom(symbols) + getRandom(suffixes);
            else if (style === 1) u = getRandom(suffixes) + base;
            else if (style === 2) u = base + Math.floor(Math.random() * 9999);
            else u = base.toLowerCase().replace(/a/g, '4').replace(/e/g, '3') + getRandom(symbols) + getRandom(suffixes);

            options.push(u);
        }

        page.querySelector('#unameResult').innerHTML = options.map(u => `
      <div class="tool-card uname-item" style="padding: 10px 20px">
        <div class="tool-name" style="font-size: 1rem">${u}</div>
        <button class="btn btn-sm btn-secondary copy-item" data-text="${u}">📋</button>
      </div>
    `).join('');

        page.querySelectorAll('.copy-item').forEach(btn => {
            btn.onclick = () => {
                navigator.clipboard.writeText(btn.dataset.text);
                import('../../utils/storage.js').then(m => m.showToast('Copied!'));
            };
        });
    };

    return page;
}
