/**
 * Flashcards Maker
 * Create and review flashcards for study sessions.
 */
import { saveData, loadData, showToast } from '../../utils/storage.js';

export function renderFlashcards() {
    const page = document.createElement('div');
    page.className = 'page-content tool-page';

    let cards = loadData('study_flashcards', []);
    let currentIdx = 0;
    let isFlipped = false;

    const updateCard = () => {
        const cardEl = page.querySelector('#flashcard');
        const counterEl = page.querySelector('#cardCounter');

        if (cards.length === 0) {
            cardEl.innerHTML = '<div class="text-center p-xl">No cards yet. Add some below!</div>';
            counterEl.textContent = '0 / 0';
            return;
        }

        const card = cards[currentIdx];
        cardEl.innerHTML = `
      <div class="card-inner ${isFlipped ? 'flipped' : ''}">
        <div class="card-front">${card.front}</div>
        <div class="card-back">${card.back}</div>
      </div>
    `;
        counterEl.textContent = `${currentIdx + 1} / ${cards.length}`;
    };

    page.innerHTML = `
    <h2>🗂️ Flashcards Maker</h2>
    
    <div class="flashcard-container mb-lg">
      <div id="flashcard" class="flashcard-box"></div>
      <div class="text-center mt-sm" id="cardCounter">0 / 0</div>
    </div>

    <div class="grid-3-col mb-xl">
      <button class="btn btn-secondary" id="prevCard">← Prev</button>
      <button class="btn btn-primary" id="flipCard">🔄 Flip</button>
      <button class="btn btn-secondary" id="nextCard">Next →</button>
    </div>

    <div class="note-card">
      <div class="note-title">Add New Card</div>
      <div class="form-group mt-sm">
        <label>Front (Question)</label>
        <input type="text" id="cardFront" class="form-input" placeholder="e.g. 7 * 8">
      </div>
      <div class="form-group">
        <label>Back (Answer)</label>
        <input type="text" id="cardBack" class="form-input" placeholder="e.g. 56">
      </div>
      <button class="btn btn-success" id="addCard">➕ Add Card</button>
    </div>

    <button class="btn btn-danger mt-md" id="clearCards">🗑️ Clear All Cards</button>

    <style>
      .flashcard-box {
        perspective: 1000px;
        height: 200px;
        cursor: pointer;
      }
      .card-inner {
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform 0.6s;
        transform-style: preserve-3d;
        background: var(--color-bg-card);
        border: 2px solid var(--color-primary);
        border-radius: var(--radius-lg);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
        font-weight: 600;
        padding: 20px;
      }
      .card-inner.flipped {
        transform: rotateY(180deg);
      }
      .card-front, .card-back {
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .card-back {
        transform: rotateY(180deg);
        color: var(--color-accent);
      }
    </style>
  `;

    page.querySelector('#flipCard').onclick = () => {
        isFlipped = !isFlipped;
        updateCard();
    };

    page.querySelector('#flashcard').onclick = () => {
        isFlipped = !isFlipped;
        updateCard();
    };

    page.querySelector('#prevCard').onclick = () => {
        if (cards.length === 0) return;
        currentIdx = (currentIdx - 1 + cards.length) % cards.length;
        isFlipped = false;
        updateCard();
    };

    page.querySelector('#nextCard').onclick = () => {
        if (cards.length === 0) return;
        currentIdx = (currentIdx + 1) % cards.length;
        isFlipped = false;
        updateCard();
    };

    page.querySelector('#addCard').onclick = () => {
        const front = page.querySelector('#cardFront').value.trim();
        const back = page.querySelector('#cardBack').value.trim();

        if (!front || !back) return;

        cards.push({ front, back });
        saveData('study_flashcards', cards);
        page.querySelector('#cardFront').value = '';
        page.querySelector('#cardBack').value = '';
        showToast('Card added!');
        updateCard();
    };

    page.querySelector('#clearCards').onclick = () => {
        if (confirm('Delete all flashcards?')) {
            cards = [];
            saveData('study_flashcards', cards);
            currentIdx = 0;
            updateCard();
        }
    };

    updateCard();
    return page;
}
