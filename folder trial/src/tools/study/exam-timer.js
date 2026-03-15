/**
 * Countdown Exam Timer
 * Specialized timer for exam practice with warning alerts.
 */
import { showToast } from '../../utils/storage.js';

export function renderExamTimer() {
    const page = document.createElement('div');
    page.className = 'page-content tool-page';

    let timer = null;
    let timeLeft = 0;

    const updateDisplay = () => {
        const hours = Math.floor(timeLeft / 3600);
        const mins = Math.floor((timeLeft % 3600) / 60);
        const secs = timeLeft % 60;
        page.querySelector('#examTime').textContent =
            `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const startTimer = (minutes) => {
        clearInterval(timer);
        timeLeft = minutes * 60;
        updateDisplay();

        timer = setInterval(() => {
            timeLeft--;
            updateDisplay();

            if (timeLeft === 300) { // 5 mins left
                showToast('⚠️ 5 minutes remaining!');
                if ('vibrate' in navigator) navigator.vibrate([200, 100, 200]);
            }

            if (timeLeft <= 0) {
                clearInterval(timer);
                showToast('⌛ Time is up! Stop writing.');
                if ('vibrate' in navigator) navigator.vibrate([1000, 500, 1000]);
            }
        }, 1000);
    };

    page.innerHTML = `
    <h2>⌛ Exam Countdown Timer</h2>
    
    <div class="timer-display">
      <div class="timer-time" id="examTime" style="font-size: 3.5rem">00:00:00</div>
      <div class="timer-label">TIME REMAINING</div>
    </div>

    <div class="grid-3-col mt-xl">
      <button class="btn btn-secondary" data-time="30">30m</button>
      <button class="btn btn-secondary" data-time="60">1h</button>
      <button class="btn btn-secondary" data-time="90">1.5h</button>
      <button class="btn btn-secondary" data-time="120">2h</button>
      <button class="btn btn-secondary" data-time="150">2.5h</button>
      <button class="btn btn-secondary" data-time="180">3h</button>
    </div>

    <div class="btn-row mt-lg">
      <button class="btn btn-danger hidden" id="stopExam">🛑 End Session</button>
    </div>

    <div class="result-box mt-xl">
      <div class="result-label">Tip</div>
      <p class="text-sm">Practice with a timer to improve your speed and stress management during actual exams.</p>
    </div>
  `;

    page.querySelectorAll('[data-time]').forEach(btn => {
        btn.onclick = () => {
            startTimer(parseInt(btn.dataset.time));
            page.querySelector('#stopExam').classList.remove('hidden');
        };
    });

    page.querySelector('#stopExam').onclick = () => {
        clearInterval(timer);
        timeLeft = 0;
        updateDisplay();
        page.querySelector('#stopExam').classList.add('hidden');
    };

    return page;
}
