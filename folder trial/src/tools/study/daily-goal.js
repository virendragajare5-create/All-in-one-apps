/**
 * Daily Goal Tracker
 * Set and visualize a single primary goal for the day.
 */
import { saveData, loadData, showToast } from '../../utils/storage.js';

export function renderDailyGoal() {
    const page = document.createElement('div');
    page.className = 'page-content tool-page';

    const today = new Date().toDateString();
    let goalData = loadData('daily_goal_data', { date: '', goal: '', done: false });

    if (goalData.date !== today) {
        goalData = { date: today, goal: '', done: false };
        saveData('daily_goal_data', goalData);
    }

    const updateUI = () => {
        const container = page.querySelector('#goalContainer');
        if (!goalData.goal) {
            container.innerHTML = `
        <div class="note-card">
          <div class="note-title">What is your #1 goal today?</div>
          <input type="text" id="goalInput" class="form-input mt-sm" placeholder="e.g. Finish chemistry project">
          <button class="btn btn-primary mt-md" id="setGoal">🎯 Set Daily Goal</button>
        </div>
      `;
            container.querySelector('#setGoal').onclick = () => {
                const val = container.querySelector('#goalInput').value.trim();
                if (!val) return;
                goalData.goal = val;
                saveData('daily_goal_data', goalData);
                updateUI();
            };
        } else {
            container.innerHTML = `
        <div class="result-box ${goalData.done ? 'opacity-50' : ''}">
          <div class="result-label">TODAY'S #1 GOAL</div>
          <div class="result-value" style="font-size: 1.5rem; text-decoration: ${goalData.done ? 'line-through' : 'none'}">${goalData.goal}</div>
          <button class="btn ${goalData.done ? 'btn-secondary' : 'btn-success'} mt-lg" id="toggleGoal">
            ${goalData.done ? '⭕ Mark Incomplete' : '✅ Mark Complete'}
          </button>
        </div>
        <button class="btn btn-sm btn-text mt-md" id="resetGoal">Edit Goal</button>
      `;
            container.querySelector('#toggleGoal').onclick = () => {
                goalData.done = !goalData.done;
                saveData('daily_goal_data', goalData);
                updateUI();
                if (goalData.done) showToast('🎉 Goal Achieved! Great job.');
            };
            container.querySelector('#resetGoal').onclick = () => {
                goalData.goal = '';
                saveData('daily_goal_data', goalData);
                updateUI();
            };
        }
    };

    page.innerHTML = `
    <h2>🎯 Daily Goal Tracker</h2>
    <p class="text-sm text-center text-muted mb-lg">Focus on one big thing and get it done.</p>
    <div id="goalContainer"></div>
  `;

    updateUI();
    return page;
}
