/**
 * Water Intake Tracker
 * Tracks daily water consumption using localStorage.
 */
import { saveData, loadData, showToast } from '../../utils/storage.js';

export function renderWaterTracker() {
    const page = document.createElement('div');
    page.className = 'page-content tool-page';

    const today = new Date().toISOString().split('T')[0];
    let waterData = loadData('water_tracker', {});
    if (!waterData[today]) {
        waterData[today] = 0;
    }

    const updateDisplay = () => {
        const amount = waterData[today];
        const progress = Math.min((amount / 2000) * 100, 100);

        page.querySelector('#currentWater').textContent = `${amount} ml`;
        page.querySelector('#waterProgress').style.width = `${progress}%`;
        page.querySelector('#glassCount').textContent = Math.round(amount / 250);
    };

    page.innerHTML = `
    <h2>💧 Water Intake Tracker</h2>
    
    <div class="result-box text-center">
      <div class="result-label">Daily Progress (Goal: 2000ml)</div>
      <div class="result-value" id="currentWater">${waterData[today]} ml</div>
      <div class="progress-bar mt-md">
        <div class="progress-fill" id="waterProgress" style="width: 0%"></div>
      </div>
      <p class="text-sm text-muted mt-sm">You've drunk about <span id="glassCount">0</span> glasses today.</p>
    </div>

    <div class="grid-2-col mt-lg">
      <button class="btn btn-secondary" id="add250">🥤 +250ml (Glass)</button>
      <button class="btn btn-secondary" id="add500">🍼 +500ml (Bottle)</button>
    </div>
    
    <button class="btn btn-danger mt-md" id="resetWater">🔄 Reset Today</button>

    <div class="mt-xl">
      <h3>History (Last 7 Days)</h3>
      <div class="notes-list mt-md" id="waterHistory"></div>
    </div>
  `;

    const renderHistory = () => {
        const historyEl = page.querySelector('#waterHistory');
        const dates = Object.keys(waterData).sort().reverse().slice(0, 7);
        historyEl.innerHTML = dates.map(date => `
      <div class="note-card">
        <div class="note-title">${date === today ? 'Today' : date}</div>
        <div class="note-preview">${waterData[date]} ml / 2000 ml</div>
      </div>
    `).join('');
    };

    const addWater = (ml) => {
        waterData[today] += ml;
        saveData('water_tracker', waterData);
        updateDisplay();
        renderHistory();
        showToast(`Added ${ml}ml of water!`);
    };

    page.querySelector('#add250').onclick = () => addWater(250);
    page.querySelector('#add500').onclick = () => addWater(500);
    page.querySelector('#resetWater').onclick = () => {
        if (confirm('Reset today\'s intake?')) {
            waterData[today] = 0;
            saveData('water_tracker', waterData);
            updateDisplay();
            renderHistory();
        }
    };

    updateDisplay();
    renderHistory();

    return page;
}
