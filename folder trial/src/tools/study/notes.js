/**
 * Quick Notes
 * CRUD notes with localStorage persistence.
 */
import { saveData, loadData, generateId, showToast } from '../../utils/storage.js';

export function renderNotes() {
    const page = document.createElement('div');
    page.className = 'page-content tool-page';

    let notes = loadData('notes', []);
    let editingId = null;

    function render() {
        if (editingId !== null) {
            renderEditor();
        } else {
            renderList();
        }
    }

    function renderList() {
        page.innerHTML = `
      <h2>📒 Quick Notes</h2>
      <button class="btn btn-primary mb-md" id="newNoteBtn">➕ New Note</button>
      ${notes.length === 0 ? `
        <div class="empty-state">
          <div class="empty-icon">📝</div>
          <div class="empty-text">No notes yet. Create your first note!</div>
        </div>
      ` : `
        <div class="notes-list">
          ${notes.sort((a, b) => b.timestamp - a.timestamp).map(note => `
            <div class="note-card" data-id="${note.id}">
              <div class="note-title">${escapeHtml(note.title || 'Untitled')}</div>
              <div class="note-preview">${escapeHtml(note.content || 'Empty note')}</div>
              <div class="note-date">${formatDate(note.timestamp)}</div>
            </div>
          `).join('')}
        </div>
      `}
    `;

        page.querySelector('#newNoteBtn').addEventListener('click', () => {
            const newNote = {
                id: generateId(),
                title: '',
                content: '',
                timestamp: Date.now()
            };
            notes.unshift(newNote);
            saveData('notes', notes);
            editingId = newNote.id;
            render();
        });

        page.querySelectorAll('.note-card').forEach(card => {
            card.addEventListener('click', () => {
                editingId = card.dataset.id;
                render();
            });
        });
    }

    function renderEditor() {
        const note = notes.find(n => n.id === editingId);
        if (!note) {
            editingId = null;
            render();
            return;
        }

        page.innerHTML = `
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:var(--spacing-md);">
        <button class="btn btn-secondary btn-sm" id="noteBackBtn" style="width:auto;">← Back</button>
        <button class="btn btn-danger btn-sm" id="noteDeleteBtn" style="width:auto;">🗑️ Delete</button>
      </div>
      <div class="form-group">
        <input type="text" class="form-input" id="noteTitleInput" placeholder="Note title..." value="${escapeAttr(note.title)}" />
      </div>
      <div class="form-group">
        <textarea class="form-textarea" id="noteContentInput" rows="12" placeholder="Write your note here...">${escapeHtml(note.content)}</textarea>
      </div>
      <div class="text-sm text-muted">Last edited: ${formatDate(note.timestamp)}</div>
    `;

        const titleInput = page.querySelector('#noteTitleInput');
        const contentInput = page.querySelector('#noteContentInput');

        // Auto-save on input
        let saveTimeout;
        function autoSave() {
            clearTimeout(saveTimeout);
            saveTimeout = setTimeout(() => {
                note.title = titleInput.value;
                note.content = contentInput.value;
                note.timestamp = Date.now();
                saveData('notes', notes);
            }, 500);
        }

        titleInput.addEventListener('input', autoSave);
        contentInput.addEventListener('input', autoSave);

        page.querySelector('#noteBackBtn').addEventListener('click', () => {
            // Save before going back
            note.title = titleInput.value;
            note.content = contentInput.value;
            note.timestamp = Date.now();
            saveData('notes', notes);
            editingId = null;
            render();
        });

        page.querySelector('#noteDeleteBtn').addEventListener('click', () => {
            notes = notes.filter(n => n.id !== editingId);
            saveData('notes', notes);
            editingId = null;
            showToast('Note deleted');
            render();
        });
    }

    render();
    return page;
}

function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

function escapeAttr(str) {
    return str.replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

function formatDate(timestamp) {
    const d = new Date(timestamp);
    const now = new Date();
    const diff = now - d;

    if (diff < 60000) return 'Just now';
    if (diff < 3600000) return `${Math.floor(diff / 60000)}m ago`;
    if (diff < 86400000) return `${Math.floor(diff / 3600000)}h ago`;
    return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
}
