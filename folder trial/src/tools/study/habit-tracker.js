/**
 * Habit Tracker
 * Daily habit completion tracking (7-day view).
 */
import { saveData, loadData, showToast } from '../../utils/storage.js';

export function renderHabitTracker() {
    const page = document.createElement('div');
    page.className = 'page-content tool-page';

    let habits = loadData('study_habits', []);
    const today = new Date().toISOString().split('T')[0];

    const renderHabits = () => {
        const list = page.querySelector('#habitList');
        if (habits.length === 0) {
            list.innerHTML = '<p class="text-center text-muted p-md">No habits added. Start tracking one below!</p>';
            return;
        }

        list.innerHTML = habits.map((habit, hIdx) => {
            const isDoneToday = habit.history && habit.history[today];
            return `
          <div class="note-card mb-sm">
            <div class="toggle-row">
              <div class="note-title">${habit.name}</div>
              <button class="btn btn-sm ${isDoneToday ? 'btn-success' : 'btn-secondary'}" data-hidx="${hIdx}">
                ${isDoneToday ? '✅ Done' : '⭕ Mark'}
              </button>
            </div>
          </div>
        `;
        }).join('');

        list.querySelectorAll('[data-hidx]').forEach(btn => {
            btn.onclick = () => {
                const idx = btn.dataset.hidx;
                if (!habits[idx].history) habits[idx].history = {};
                habits[idx].history[today] = !habits[idx].history[today];
                saveData('study_habits', habits);
                renderHabits();
                if (habits[idx].history[today]) showToast('Great job! Habit completed for today.');
            };
        });
    };

    page.innerHTML = `
    <h2>✅ Habit Tracker</h2>
    
    <div id="habitList" class="notes-list mb-xl"></div>

    <div class="note-card">
      <div class="note-title">New Habit</div>
      <div class="form-group mt-sm">
        <label>Habit Name</label>
        <input type="text" id="habitName" class="form-input" placeholder="e.g. Read for 30 mins">
      </div>
      <button class="btn btn-primary" id="addHabit">➕ Add Habit</button>
    </div>

    <button class="btn btn-danger mt-xl" id="clearHabits">🗑️ Clear All Habits</button>
  `;

    page.querySelector('#addHabit').onclick = () => {
        const name = page.querySelector('#habitName').value.trim();
        if (!name) return;

        habits.push({ name, history: {} });
        saveData('study_habits', habits);
        page.querySelector('#habitName').value = '';
        showToast('Habit added!');
        renderHabits();
    };

    page.querySelector('#clearHabits').onclick = () => {
        if (confirm('Delete all habits?')) {
            habits = [];
            saveData('study_habits', habits);
            renderHabits();
        }
    };

    renderHabits();
    return page;
}
