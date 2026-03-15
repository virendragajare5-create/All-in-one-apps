/**
 * Study Session Tracker
 * Logs study hours and subjects.
 */
import { saveData, loadData, showToast } from '../../utils/storage.js';

export function renderStudyTracker() {
    const page = document.createElement('div');
    page.className = 'page-content tool-page';

    let logs = loadData('study_logs', []);

    const renderLogs = () => {
        const list = page.querySelector('#logList');
        if (logs.length === 0) {
            list.innerHTML = '<p class="text-center text-muted p-md">No sessions logged yet.</p>';
            return;
        }

        list.innerHTML = logs.slice().reverse().map((log, idx) => `
      <div class="note-card">
        <div class="note-title">${log.subject}</div>
        <div class="note-preview">${log.hours} hours on ${log.date}</div>
        <div class="note-date">${log.notes || 'No notes'}</div>
      </div>
    `).join('');
    };

    page.innerHTML = `
    <h2>📚 Study Session Tracker</h2>
    
    <div class="note-card mb-lg">
      <div class="note-title">Log New Session</div>
      <div class="form-group mt-sm">
        <label>Subject</label>
        <input type="text" id="studySubject" class="form-input" placeholder="e.g. Mathematics">
      </div>
      <div class="form-row">
        <div class="form-group">
          <label>Hours</label>
          <input type="number" id="studyHours" class="form-input" value="1" step="0.5">
        </div>
        <div class="form-group">
          <label>Date</label>
          <input type="date" id="studyDate" class="form-input" value="${new Date().toISOString().split('T')[0]}">
        </div>
      </div>
      <div class="form-group">
        <label>Notes (Optional)</label>
        <input type="text" id="studyNotes" class="form-input" placeholder="What did you learn?">
      </div>
      <button class="btn btn-primary" id="addLog">➕ Log Session</button>
    </div>

    <div class="mt-xl">
      <h3>Recent Sessions</h3>
      <div id="logList" class="notes-list mt-md"></div>
    </div>

    <button class="btn btn-danger mt-xl" id="clearLogs">🗑️ Clear History</button>
  `;

    page.querySelector('#addLog').onclick = () => {
        const subject = page.querySelector('#studySubject').value.trim();
        const hours = page.querySelector('#studyHours').value;
        const date = page.querySelector('#studyDate').value;
        const notes = page.querySelector('#studyNotes').value.trim();

        if (!subject || !hours || !date) return;

        logs.push({ subject, hours, date, notes });
        saveData('study_logs', logs);

        page.querySelector('#studySubject').value = '';
        showToast('Session logged!');
        renderLogs();
    };

    page.querySelector('#clearLogs').onclick = () => {
        if (confirm('Delete all study logs?')) {
            logs = [];
            saveData('study_logs', logs);
            renderLogs();
        }
    };

    renderLogs();
    return page;
}
