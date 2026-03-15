/**
 * Workout Rest Timer
 * Quick timer for rest between sets.
 */
import { showToast } from '../../utils/storage.js';

export function renderWorkoutTimer() {
    const page = document.createElement('div');
    page.className = 'page-content tool-page';

    let timer = null;
    let timeLeft = 0;

    const updateDisplay = () => {
        const mins = Math.floor(timeLeft / 60);
        const secs = timeLeft % 60;
        page.querySelector('#restTime').textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const startTimer = (seconds) => {
        clearInterval(timer);
        timeLeft = seconds;
        updateDisplay();

        timer = setInterval(() => {
            timeLeft--;
            updateDisplay();
            if (timeLeft <= 0) {
                clearInterval(timer);
                showToast('Rest over! Get back to work! 💪');
                if ('vibrate' in navigator) navigator.vibrate([500, 200, 500]);
            }
        }, 1000);
    };

    page.innerHTML = `
    <h2>⏱️ Workout Rest Timer</h2>
    
    <div class="timer-display">
      <div class="timer-time" id="restTime">00:00</div>
      <div class="timer-label">REST TIME</div>
    </div>

    <div class="grid-3-col mt-xl">
      <button class="btn btn-secondary" data-time="30">30s</button>
      <button class="btn btn-secondary" data-time="60">60s</button>
      <button class="btn btn-secondary" data-time="90">90s</button>
      <button class="btn btn-secondary" data-time="120">2m</button>
      <button class="btn btn-secondary" data-time="180">3m</button>
      <button class="btn btn-secondary" data-time="300">5m</button>
    </div>

    <div class="mt-lg">
      <button class="btn btn-danger hidden" id="stopRest">🛑 Stop Timer</button>
    </div>

    <div class="result-box mt-xl">
      <div class="result-label">Pro Tip</div>
      <p class="text-sm">For muscle growth, 60-90 seconds is ideal. For strength, 3-5 minutes allows for better recovery.</p>
    </div>
  `;

    page.querySelectorAll('[data-time]').forEach(btn => {
        btn.onclick = () => {
            startTimer(parseInt(btn.dataset.time));
            page.querySelector('#stopRest').classList.remove('hidden');
        };
    });

    page.querySelector('#stopRest').onclick = () => {
        clearInterval(timer);
        timeLeft = 0;
        updateDisplay();
        page.querySelector('#stopRest').classList.add('hidden');
    };

    return page;
}
