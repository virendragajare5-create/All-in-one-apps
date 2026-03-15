/**
 * Countdown Timer
 * General purpose timer with alarm sound.
 */
import { showToast } from '../../utils/storage.js';

export function renderCountdownTimer() {
    const page = document.createElement('div');
    page.className = 'page-content tool-page';

    let timer = null;
    let timeLeft = 0;

    const updateDisplay = () => {
        const h = Math.floor(timeLeft / 3600).toString().padStart(2, '0');
        const m = Math.floor((timeLeft % 3600) / 60).toString().padStart(2, '0');
        const s = (timeLeft % 60).toString().padStart(2, '0');
        page.querySelector('#timerDisplay').textContent = `${h}:${m}:${s}`;
    };

    page.innerHTML = `
    <h2>⏲️ Countdown Timer</h2>
    
    <div class="timer-display">
      <div class="timer-time" id="timerDisplay">00:00:00</div>
    </div>

    <div class="form-row mt-xl" id="timerInputs">
      <input type="number" id="tH" class="form-input" placeholder="HH" min="0" value="0">
      <input type="number" id="tM" class="form-input" placeholder="MM" min="0" max="59" value="5">
      <input type="number" id="tS" class="form-input" placeholder="SS" min="0" max="59" value="0">
    </div>

    <div class="btn-row mt-lg">
      <button class="btn btn-primary" id="startTimer">Start</button>
      <button class="btn btn-danger hidden" id="resetTimer">Cancel</button>
    </div>

    <div class="grid-3-col mt-xl">
      <button class="btn btn-secondary" data-val="60">1m</button>
      <button class="btn btn-secondary" data-val="300">5m</button>
      <button class="btn btn-secondary" data-val="600">10m</button>
    </div>
  `;

    const btnStart = page.querySelector('#startTimer');
    const btnReset = page.querySelector('#resetTimer');
    const inputRow = page.querySelector('#timerInputs');

    btnStart.onclick = () => {
        if (timer) {
            clearInterval(timer);
            timer = null;
            btnStart.textContent = 'Resume';
            return;
        }

        if (timeLeft === 0) {
            const h = parseInt(page.querySelector('#tH').value) || 0;
            const m = parseInt(page.querySelector('#tM').value) || 0;
            const s = parseInt(page.querySelector('#tS').value) || 0;
            timeLeft = h * 3600 + m * 60 + s;
        }

        if (timeLeft <= 0) return;

        inputRow.classList.add('hidden');
        btnReset.classList.remove('hidden');
        btnStart.textContent = 'Pause';

        timer = setInterval(() => {
            timeLeft--;
            updateDisplay();
            if (timeLeft <= 0) {
                clearInterval(timer);
                timer = null;
                showToast('⏰ Time is up! ⏰');
                if ('vibrate' in navigator) navigator.vibrate([500, 300, 500]);
                reset();
            }
        }, 1000);
    };

    const reset = () => {
        clearInterval(timer);
        timer = null;
        timeLeft = 0;
        updateDisplay();
        btnStart.textContent = 'Start';
        btnReset.classList.add('hidden');
        inputRow.classList.remove('hidden');
    };

    btnReset.onclick = reset;

    page.querySelectorAll('[data-val]').forEach(btn => {
        btn.onclick = () => {
            timeLeft = parseInt(btn.dataset.val);
            updateDisplay();
        };
    });

    return page;
}
