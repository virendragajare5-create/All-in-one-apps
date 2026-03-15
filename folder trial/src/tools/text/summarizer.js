/**
 * Text Summarizer
 * Extractive summarization using sentence scoring by word frequency.
 * No AI model — pure NLP heuristics.
 */

export function renderSummarizer() {
    const page = document.createElement('div');
    page.className = 'page-content tool-page';

    page.innerHTML = `
    <h2>📄 Text Summarizer</h2>
    <div class="form-group">
      <label for="summarizerInput">Paste your text below</label>
      <textarea class="form-textarea" id="summarizerInput" rows="8" placeholder="Paste a long paragraph or article text here..."></textarea>
    </div>
    <div class="form-group">
      <label>Summary Length</label>
      <div class="chip-group" id="summaryLengthChips">
        <span class="chip active" data-sentences="3">Short (3 sentences)</span>
        <span class="chip" data-sentences="5">Medium (5 sentences)</span>
        <span class="chip" data-sentences="7">Long (7 sentences)</span>
      </div>
    </div>
    <button class="btn btn-primary" id="summarizeBtn">Summarize</button>
    <div id="summarizerResult"></div>
  `;

    let summaryLength = 3;

    page.querySelectorAll('#summaryLengthChips .chip').forEach(chip => {
        chip.addEventListener('click', () => {
            page.querySelectorAll('#summaryLengthChips .chip').forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            summaryLength = parseInt(chip.dataset.sentences);
        });
    });

    page.querySelector('#summarizeBtn').addEventListener('click', () => {
        const text = page.querySelector('#summarizerInput').value.trim();
        if (!text) {
            page.querySelector('#summarizerResult').innerHTML = `
        <div class="result-box">
          <div class="result-label">⚠️ Error</div>
          <div class="result-detail">Please paste some text to summarize.</div>
        </div>
      `;
            return;
        }

        const summary = extractiveSummarize(text, summaryLength);

        page.querySelector('#summarizerResult').innerHTML = `
      <div class="result-box">
        <div class="result-label">📋 Summary (${summary.sentenceCount} sentences)</div>
        <div class="output-area">${summary.text}</div>
        <div class="result-detail mt-sm">
          Original: ${summary.originalWords} words → Summary: ${summary.summaryWords} words
          (${summary.compressionRatio}% shorter)
        </div>
      </div>
    `;
    });

    return page;
}

/**
 * Extractive summarization algorithm:
 * 1. Tokenize text into sentences
 * 2. Calculate word frequency (excluding stop words)
 * 3. Score each sentence by sum of its word frequencies
 * 4. Select top N sentences in original order
 */
function extractiveSummarize(text, numSentences) {
    const stopWords = new Set([
        'the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for',
        'of', 'with', 'by', 'from', 'is', 'are', 'was', 'were', 'be', 'been',
        'being', 'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would',
        'could', 'should', 'may', 'might', 'shall', 'can', 'this', 'that',
        'these', 'those', 'i', 'you', 'he', 'she', 'it', 'we', 'they', 'me',
        'him', 'her', 'us', 'them', 'my', 'your', 'his', 'its', 'our', 'their',
        'what', 'which', 'who', 'whom', 'when', 'where', 'why', 'how', 'all',
        'each', 'every', 'both', 'few', 'more', 'most', 'other', 'some', 'such',
        'no', 'nor', 'not', 'only', 'own', 'same', 'so', 'than', 'too', 'very',
        'just', 'because', 'as', 'until', 'while', 'about', 'between', 'through',
        'during', 'before', 'after', 'above', 'below', 'up', 'down', 'out',
        'off', 'over', 'under', 'again', 'further', 'then', 'once', 'here',
        'there', 'also', 'if', 'into', 'get', 'got', 'like', 'well', 'back',
        'much', 'go', 'going', 'say', 'said', 'make', 'made'
    ]);

    // Split into sentences
    const sentences = text
        .replace(/([.!?])\s+/g, '$1|')
        .split('|')
        .map(s => s.trim())
        .filter(s => s.length > 10);

    if (sentences.length <= numSentences) {
        return {
            text: sentences.join(' '),
            sentenceCount: sentences.length,
            originalWords: text.split(/\s+/).length,
            summaryWords: sentences.join(' ').split(/\s+/).length,
            compressionRatio: 0
        };
    }

    // Build word frequency map
    const wordFreq = {};
    sentences.forEach(sentence => {
        const words = sentence.toLowerCase().replace(/[^a-z0-9\s]/g, '').split(/\s+/);
        words.forEach(word => {
            if (word.length > 2 && !stopWords.has(word)) {
                wordFreq[word] = (wordFreq[word] || 0) + 1;
            }
        });
    });

    // Score sentences
    const scored = sentences.map((sentence, index) => {
        const words = sentence.toLowerCase().replace(/[^a-z0-9\s]/g, '').split(/\s+/);
        let score = 0;
        words.forEach(word => {
            if (wordFreq[word]) score += wordFreq[word];
        });
        // Normalize by sentence length to avoid bias toward long sentences
        score = words.length > 0 ? score / Math.sqrt(words.length) : 0;
        // Slight position bias: first and last sentences often carry more weight
        if (index === 0) score *= 1.2;
        if (index === sentences.length - 1) score *= 1.1;
        return { sentence, score, index };
    });

    // Get top sentences, sorted by original index for coherent reading
    const topSentences = scored
        .sort((a, b) => b.score - a.score)
        .slice(0, numSentences)
        .sort((a, b) => a.index - b.index)
        .map(s => s.sentence);

    const summaryText = topSentences.join(' ');
    const originalWords = text.split(/\s+/).length;
    const summaryWords = summaryText.split(/\s+/).length;
    const compressionRatio = Math.round((1 - summaryWords / originalWords) * 100);

    return {
        text: summaryText,
        sentenceCount: topSentences.length,
        originalWords,
        summaryWords,
        compressionRatio: Math.max(0, compressionRatio)
    };
}
