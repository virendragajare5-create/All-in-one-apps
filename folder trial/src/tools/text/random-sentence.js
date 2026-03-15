/**
 * Random Sentence Generator
 * Generates dummy text using a curated word bank.
 */
export function renderRandomSentence() {
    const page = document.createElement('div');
    page.className = 'page-content tool-page';

    const wordBank = {
        subjects: ['The cat', 'A small robot', 'The quick runner', 'Our neighbor', 'A mysterious traveler', 'The scientist'],
        verbs: ['jumped over', 'discovered', 'is watching', 'painted', 'found', 'quietly fixed'],
        objects: ['a golden key', 'the ancient map', 'a shiny new gadget', 'the colorful mural', 'a secret passage', 'the broken shelf'],
        adverbs: ['quickly', 'carefully', 'magically', 'under the moonlight', 'without warning', 'with a smile']
    };

    page.innerHTML = `
    <h2>🎲 Random Sentence Generator</h2>
    <div class="form-group">
      <label>How many sentences?</label>
      <input type="number" id="sentCount" class="form-input" value="3" min="1" max="20">
    </div>
    
    <button class="btn btn-primary" id="genSent">🎲 Generate Text</button>

    <div class="result-box mt-lg">
      <div class="result-label">Generated Text</div>
      <div id="sentResult" class="output-area"></div>
      <button class="btn btn-sm btn-primary mt-sm" id="copySent">📋 Copy Result</button>
    </div>
  `;

    const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

    page.querySelector('#genSent').onclick = () => {
        const count = parseInt(page.querySelector('#sentCount').value);
        let sentences = [];

        for (let i = 0; i < count; i++) {
            const s = `${getRandom(wordBank.subjects)} ${getRandom(wordBank.verbs)} ${getRandom(wordBank.objects)} ${getRandom(wordBank.adverbs)}.`;
            sentences.push(s);
        }

        page.querySelector('#sentResult').textContent = sentences.join(' ');
    };

    page.querySelector('#copySent').onclick = () => {
        navigator.clipboard.writeText(page.querySelector('#sentResult').textContent);
        import('../../utils/storage.js').then(m => m.showToast('Copied to clipboard!'));
    };

    return page;
}
