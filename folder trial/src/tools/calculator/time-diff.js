/**
 * Time Difference Calculator
 * Calculates the duration between two times or timestamps.
 */
export function renderTimeDiffCalculator() {
    const page = document.createElement('div');
    page.className = 'page-content tool-page';

    page.innerHTML = `
    <h2>⏱️ Time Difference Calculator</h2>
    <div class="form-group">
      <label>Start Time</label>
      <input type="time" id="startTime" class="form-input" value="09:00">
    </div>
    <div class="form-group">
      <label>End Time</label>
      <input type="time" id="endTime" class="form-input" value="17:00">
    </div>
    <button class="btn btn-primary" id="calcTimeDiff">⏱️ Calculate Difference</button>
    <div id="timeDiffResult"></div>

    <div class="mt-xl">
      <h3>Timestamp Difference</h3>
      <div class="form-group">
        <label>Start Date & Time</label>
        <input type="datetime-local" id="startDT" class="form-input">
      </div>
      <div class="form-group">
        <label>End Date & Time</label>
        <input type="datetime-local" id="endDT" class="form-input">
      </div>
      <button class="btn btn-secondary" id="calcDTDiff">📅 Calculate Full Duration</button>
      <div id="dtDiffResult"></div>
    </div>
  `;

    const formatDuration = (ms) => {
        const diffSecs = Math.abs(Math.floor(ms / 1000));
        const hours = Math.floor(diffSecs / 3600);
        const mins = Math.floor((diffSecs % 3600) / 60);
        return `${hours} Hours, ${mins} Minutes`;
    };

    page.querySelector('#calcTimeDiff').onclick = () => {
        const start = page.querySelector('#startTime').value;
        const end = page.querySelector('#endTime').value;

        const [h1, m1] = start.split(':').map(Number);
        const [h2, m2] = end.split(':').map(Number);

        let diffMins = (h2 * 60 + m2) - (h1 * 60 + m1);
        if (diffMins < 0) diffMins += 24 * 60; // Crosses midnight

        const hours = Math.floor(diffMins / 60);
        const mins = diffMins % 60;

        page.querySelector('#timeDiffResult').innerHTML = `
      <div class="result-box">
        <div class="result-label">Duration</div>
        <div class="result-value">${hours}h ${mins}m</div>
        <div class="result-detail">Total: ${diffMins} minutes</div>
      </div>
    `;
    };

    page.querySelector('#calcDTDiff').onclick = () => {
        const start = new Date(page.querySelector('#startDT').value);
        const end = new Date(page.querySelector('#endDT').value);

        if (isNaN(start) || isNaN(end)) return;

        const diffMs = end - start;
        const diffSecs = Math.abs(Math.floor(diffMs / 1000));
        const days = Math.floor(diffSecs / 86400);
        const hours = Math.floor((diffSecs % 86400) / 3600);
        const mins = Math.floor((diffSecs % 3600) / 60);

        page.querySelector('#dtDiffResult').innerHTML = `
      <div class="result-box">
        <div class="result-label">Duration</div>
        <div class="result-value">${days}d ${hours}h ${mins}m</div>
        <div class="result-detail">Total: ${Math.floor(diffSecs / 60).toLocaleString()} minutes</div>
      </div>
    `;
    };

    return page;
}
