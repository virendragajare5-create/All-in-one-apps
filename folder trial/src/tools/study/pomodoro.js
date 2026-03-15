/**
 * Pomodoro Timer
 * 25 min focus + 5 min break with audio notification.
 */

export function renderPomodoro() {
    const page = document.createElement('div');
    page.className = 'page-content tool-page';

    const FOCUS_TIME = 25 * 60; // 25 minutes in seconds
    const BREAK_TIME = 5 * 60;  // 5 minutes in seconds

    let timeLeft = FOCUS_TIME;
    let isRunning = false;
    let isFocus = true;
    let interval = null;
    let totalSessions = 0;

    page.innerHTML = `
    <h2>⏱️ Pomodoro Timer</h2>
    <div class="timer-display">
      <div class="timer-label" id="pomodoroLabel">Focus Time</div>
      <div class="timer-time" id="pomodoroTime">25:00</div>
      <div class="progress-bar">
        <div class="progress-fill" id="pomodoroProgress" style="width: 100%"></div>
      </div>
    </div>
    <div class="timer-controls">
      <button class="btn btn-primary" id="pomodoroStartBtn">▶️ Start</button>
      <button class="btn btn-secondary" id="pomodoroResetBtn">🔄 Reset</button>
    </div>
    <div class="result-grid mt-lg">
      <div class="result-item">
        <div class="result-label">Mode</div>
        <div class="result-value" id="pomodoroMode" style="font-size:var(--font-size-base)">🎯 Focus</div>
      </div>
      <div class="result-item">
        <div class="result-label">Sessions Done</div>
        <div class="result-value" id="pomodoroSessions">0</div>
      </div>
    </div>
  `;

    const timeDisplay = page.querySelector('#pomodoroTime');
    const labelDisplay = page.querySelector('#pomodoroLabel');
    const progressFill = page.querySelector('#pomodoroProgress');
    const startBtn = page.querySelector('#pomodoroStartBtn');
    const resetBtn = page.querySelector('#pomodoroResetBtn');
    const modeDisplay = page.querySelector('#pomodoroMode');
    const sessionsDisplay = page.querySelector('#pomodoroSessions');

    function formatTime(seconds) {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    }

    function updateDisplay() {
        timeDisplay.textContent = formatTime(timeLeft);
        const totalTime = isFocus ? FOCUS_TIME : BREAK_TIME;
        const progress = (timeLeft / totalTime) * 100;
        progressFill.style.width = `${progress}%`;
    }

    function playNotification() {
        try {
            const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioCtx.createOscillator();
            const gainNode = audioCtx.createGain();
            oscillator.connect(gainNode);
            gainNode.connect(audioCtx.destination);
            oscillator.frequency.value = isFocus ? 800 : 600;
            oscillator.type = 'sine';
            gainNode.gain.value = 0.3;
            oscillator.start();
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.8);
            oscillator.stop(audioCtx.currentTime + 0.8);
        } catch (e) {
            // Audio not available, silent fallback
        }
    }

    function tick() {
        if (timeLeft > 0) {
            timeLeft--;
            updateDisplay();
        } else {
            // Timer ended
            playNotification();

            if (isFocus) {
                totalSessions++;
                sessionsDisplay.textContent = totalSessions;
                // Switch to break
                isFocus = false;
                timeLeft = BREAK_TIME;
                labelDisplay.textContent = 'Break Time ☕';
                modeDisplay.textContent = '☕ Break';
            } else {
                // Switch to focus
                isFocus = true;
                timeLeft = FOCUS_TIME;
                labelDisplay.textContent = 'Focus Time';
                modeDisplay.textContent = '🎯 Focus';
            }
            updateDisplay();
        }
    }

    startBtn.addEventListener('click', () => {
        if (isRunning) {
            // Pause
            clearInterval(interval);
            isRunning = false;
            startBtn.textContent = '▶️ Resume';
        } else {
            // Start
            interval = setInterval(tick, 1000);
            isRunning = true;
            startBtn.textContent = '⏸️ Pause';
        }
    });

    resetBtn.addEventListener('click', () => {
        clearInterval(interval);
        isRunning = false;
        isFocus = true;
        timeLeft = FOCUS_TIME;
        labelDisplay.textContent = 'Focus Time';
        modeDisplay.textContent = '🎯 Focus';
        startBtn.textContent = '▶️ Start';
        updateDisplay();
    });

    // Cleanup on route change
    const observer = new MutationObserver(() => {
        if (!document.contains(page)) {
            clearInterval(interval);
            observer.disconnect();
        }
    });
    observer.observe(document.body, { childList: true, subtree: true });

    updateDisplay();
    return page;
}
