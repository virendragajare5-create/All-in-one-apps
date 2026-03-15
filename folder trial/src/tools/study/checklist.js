/**
 * Study Checklist
 * Persistent task list for specific subjects or projects.
 */
import { saveData, loadData, showToast } from '../../utils/storage.js';

export function renderStudyChecklist() {
    const page = document.createElement('div');
    page.className = 'page-content tool-page';

    let items = loadData('study_checklist', []);

    const renderItems = () => {
        const list = page.querySelector('#checkList');
        if (items.length === 0) {
            list.innerHTML = '<p class="text-center text-muted p-md">No tasks in your checklist.</p>';
            return;
        }

        list.innerHTML = items.map((item, idx) => `
      <div class="tool-card uname-item ${item.done ? 'opacity-50' : ''}" style="padding: 10px 15px">
        <div class="tool-info" style="flex-direction: row; align-items: center; gap: 10px">
          <input type="checkbox" class="task-check" data-idx="${idx}" ${item.done ? 'checked' : ''}>
          <div class="tool-name" style="font-size: 1rem; ${item.done ? 'text-decoration: line-through' : ''}">${item.text}</div>
        </div>
        <button class="btn btn-sm btn-danger del-task" data-idx="${idx}">🗑️</button>
      </div>
    `).join('');

        list.querySelectorAll('.task-check').forEach(cb => {
            cb.onchange = () => {
                const idx = cb.dataset.idx;
                items[idx].done = cb.checked;
                saveData('study_checklist', items);
                renderItems();
            };
        });

        list.querySelectorAll('.del-task').forEach(btn => {
            btn.onclick = () => {
                items.splice(btn.dataset.idx, 1);
                saveData('study_checklist', items);
                renderItems();
            };
        });
    };

    page.innerHTML = `
    <h2>📝 Study Checklist</h2>
    
    <div class="form-row mb-lg">
      <input type="text" id="taskInput" class="form-input" placeholder="Add a new task...">
      <button class="btn btn-primary" id="addTask">➕</button>
    </div>

    <div id="checkList" class="tools-list mb-xl"></div>
    
    <button class="btn btn-danger mt-xl" id="clearCheck">🗑️ Clear All Tasks</button>
  `;

    page.querySelector('#addTask').onclick = () => {
        const text = page.querySelector('#taskInput').value.trim();
        if (!text) return;
        items.push({ text, done: false });
        saveData('study_checklist', items);
        page.querySelector('#taskInput').value = '';
        renderItems();
    };

    page.querySelector('#clearCheck').onclick = () => {
        if (confirm('Delete all tasks?')) {
            items = [];
            saveData('study_checklist', items);
            renderItems();
        }
    };

    renderItems();
    return page;
}
