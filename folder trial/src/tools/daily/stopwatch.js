/**
 * Stopwatch
 * Standard stopwatch with lap functionality.
 */
export function renderStopwatch() {
    const page = document.createElement('div');
    page.className = 'page-content tool-page';

    let startTime = 0;
    let elapsedTime = 0;
    let timerInterval = null;
    let laps = [];

    const formatTime = (ms) => {
        const totalSecs = Math.floor(ms / 1000);
        const mm = Math.floor(totalSecs / 60).toString().padStart(2, '0');
        const ss = (totalSecs % 60).toString().padStart(2, '0');
        const msPortion = Math.floor((ms % 1000) / 10).toString().padStart(2, '0');
        return `${mm}:${ss}.${msPortion}`;
    };

    const updateDisplay = () => {
        page.querySelector('#swDisplay').textContent = formatTime(elapsedTime);
    };

    page.innerHTML = `
    <h2>⏱️ Stopwatch</h2>
    <div class="timer-display">
      <div class="timer-time" id="swDisplay" style="font-size: 4rem">00:00.00</div>
    </div>

    <div class="btn-row mt-xl">
      <button class="btn btn-primary" id="startStop">Start</button>
      <button class="btn btn-secondary" id="lapBtn" disabled>Lap</button>
      <button class="btn btn-danger" id="resetBtn">Reset</button>
    </div>

    <div class="mt-xl">
      <div id="lapList" class="tools-list"></div>
    </div>
  `;

    const startStop = page.querySelector('#startStop');
    const lapBtn = page.querySelector('#lapBtn');
    const resetBtn = page.querySelector('#resetBtn');
    const lapList = page.querySelector('#lapList');

    startStop.onclick = () => {
        if (timerInterval) {
            clearInterval(timerInterval);
            timerInterval = null;
            startStop.textContent = 'Start';
            lapBtn.disabled = true;
        } else {
            startTime = Date.now() - elapsedTime;
            timerInterval = setInterval(() => {
                elapsedTime = Date.now() - startTime;
                updateDisplay();
            }, 10);
            startStop.textContent = 'Stop';
            lapBtn.disabled = false;
        }
    };

    lapBtn.onclick = () => {
        laps.push(elapsedTime);
        const lapIdx = laps.length;
        const lapEl = document.createElement('div');
        lapEl.className = 'tool-card uname-item';
        lapEl.style.padding = '10px 15px';
        lapEl.innerHTML = `<span>Lap ${lapIdx}</span><span>${formatTime(elapsedTime)}</span>`;
        lapList.prepend(lapEl);
    };

    resetBtn.onclick = () => {
        clearInterval(timerInterval);
        timerInterval = null;
        elapsedTime = 0;
        laps = [];
        updateDisplay();
        startStop.textContent = 'Start';
        lapBtn.disabled = true;
        lapList.innerHTML = '';
    };

    return page;
}
