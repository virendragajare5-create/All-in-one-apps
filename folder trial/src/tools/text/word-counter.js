/**
 * Word Counter
 * Counts words, characters, sentences, paragraphs, and reading time.
 */

export function renderWordCounter() {
    const page = document.createElement('div');
    page.className = 'page-content tool-page';

    page.innerHTML = `
    <h2>🔢 Word Counter</h2>
    <div class="form-group">
      <label for="wordCounterInput">Type or paste text below</label>
      <textarea class="form-textarea" id="wordCounterInput" rows="8" placeholder="Start typing or paste your text here..."></textarea>
    </div>
    <div class="result-grid" id="wordCounterStats">
      <div class="result-item">
        <div class="result-label">Words</div>
        <div class="result-value" id="statWords">0</div>
      </div>
      <div class="result-item">
        <div class="result-label">Characters</div>
        <div class="result-value" id="statChars">0</div>
      </div>
      <div class="result-item">
        <div class="result-label">Sentences</div>
        <div class="result-value" id="statSentences">0</div>
      </div>
      <div class="result-item">
        <div class="result-label">Paragraphs</div>
        <div class="result-value" id="statParagraphs">0</div>
      </div>
      <div class="result-item">
        <div class="result-label">Characters (no spaces)</div>
        <div class="result-value" id="statCharsNoSpace">0</div>
      </div>
      <div class="result-item">
        <div class="result-label">Reading Time</div>
        <div class="result-value" id="statReadTime">0s</div>
      </div>
    </div>
  `;

    const input = page.querySelector('#wordCounterInput');
    const stats = {
        words: page.querySelector('#statWords'),
        chars: page.querySelector('#statChars'),
        sentences: page.querySelector('#statSentences'),
        paragraphs: page.querySelector('#statParagraphs'),
        charsNoSpace: page.querySelector('#statCharsNoSpace'),
        readTime: page.querySelector('#statReadTime'),
    };

    function updateStats() {
        const text = input.value;

        // Word count
        const words = text.trim() ? text.trim().split(/\s+/).length : 0;
        stats.words.textContent = words;

        // Character count
        stats.chars.textContent = text.length;

        // Characters without spaces
        stats.charsNoSpace.textContent = text.replace(/\s/g, '').length;

        // Sentence count
        const sentences = text.trim() ? text.split(/[.!?]+/).filter(s => s.trim().length > 0).length : 0;
        stats.sentences.textContent = sentences;

        // Paragraph count
        const paragraphs = text.trim() ? text.split(/\n\s*\n/).filter(p => p.trim().length > 0).length : 0;
        stats.paragraphs.textContent = paragraphs || (text.trim() ? 1 : 0);

        // Reading time (average 200 words per minute)
        const minutes = words / 200;
        if (minutes < 1) {
            stats.readTime.textContent = `${Math.ceil(minutes * 60)}s`;
        } else {
            stats.readTime.textContent = `${Math.ceil(minutes)}m`;
        }
    }

    input.addEventListener('input', updateStats);

    return page;
}
