/**
 * Decision Maker Wheel
 * Spin the wheel to pick a random choice.
 */
export function renderDecisionWheel() {
    const page = document.createElement('div');
    page.className = 'page-content tool-page';

    let choices = ['Yes', 'No', 'Maybe', 'Later', 'Go for it', 'Wait'];

    const renderChoices = () => {
        const list = page.querySelector('#wheelChoiceList');
        list.innerHTML = choices.map((c, i) => `
      <div class="note-card mb-xs" style="padding: 10px">
        <div class="toggle-row">
          <span>${c}</span>
          <button class="btn btn-sm btn-text del-choice" data-idx="${i}">✕</button>
        </div>
      </div>
    `).join('');

        list.querySelectorAll('.del-choice').forEach(btn => {
            btn.onclick = () => {
                choices.splice(btn.dataset.idx, 1);
                renderChoices();
            };
        });
    };

    page.innerHTML = `
    <h2>🎡 Decision Maker Wheel</h2>
    
    <div class="wheel-container text-center mb-xl">
        <div id="wheelPointer" style="font-size: 2rem; margin-bottom: -10px; z-index: 2; position: relative;">📍</div>
        <div id="theWheel" class="decision-box">
             <div id="wheelResult" style="font-size: 1.5rem; font-weight: bold; color: var(--color-primary)">?</div>
        </div>
        <button class="btn btn-primary mt-lg" id="spinBtn" style="width: 150px; height: 150px; border-radius: 50%; border: 5px solid white;">SPIN</button>
    </div>

    <div class="note-card">
      <div class="note-title">Options</div>
      <div class="form-row mt-sm">
        <input type="text" id="choiceInput" class="form-input" placeholder="Add option...">
        <button class="btn btn-secondary" id="addChoice">+</button>
      </div>
      <div id="wheelChoiceList" class="mt-md" style="max-height: 200px; overflow-y: auto;"></div>
    </div>

    <style>
      .decision-box {
        width: 250px;
        height: 250px;
        border-radius: 50%;
        border: 10px solid var(--color-bg-secondary);
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
        background: var(--color-bg-card);
        transition: transform 3s cubic-bezier(0.1, 0.7, 0.1, 1);
        position: relative;
        box-shadow: var(--shadow-lg);
      }
      .spinning {
         animation: pulseScale 0.5s infinite alternate;
      }
      @keyframes pulseScale {
        from { transform: scale(1); }
        to { transform: scale(1.05); }
      }
    </style>
  `;

    const wheel = page.querySelector('#theWheel');
    const result = page.querySelector('#wheelResult');
    const spinBtn = page.querySelector('#spinBtn');

    spinBtn.onclick = () => {
        if (choices.length === 0) return;

        result.textContent = '...';
        wheel.classList.add('spinning');
        spinBtn.disabled = true;

        // Simulate spin animation
        const deg = Math.floor(3600 + Math.random() * 3600);
        wheel.style.transform = `rotate(${deg}deg)`;

        setTimeout(() => {
            wheel.classList.remove('spinning');
            const winner = choices[Math.floor(Math.random() * choices.length)];
            result.textContent = winner;
            spinBtn.disabled = false;
            wheel.style.transform = `rotate(0deg)`; // Reset visually without snap if possible? No, simple is better.
            import('../../utils/storage.js').then(m => m.showToast(`Result: ${winner}`));
        }, 3000);
    };

    page.querySelector('#addChoice').onclick = () => {
        const val = page.querySelector('#choiceInput').value.trim();
        if (val) {
            choices.push(val);
            page.querySelector('#choiceInput').value = '';
            renderChoices();
        }
    };

    renderChoices();
    return page;
}
