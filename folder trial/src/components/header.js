/**
 * App Header Component
 */
import { goBack } from '../router.js';
import { saveData, loadData } from '../utils/storage.js';

export function createHeader() {
  const header = document.createElement('header');
  header.className = 'app-header';

  const isDark = loadData('theme', 'dark') === 'dark';
  document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');

  header.innerHTML = `
    <div class="header-left">
      <button class="back-btn" id="backBtn" aria-label="Go back">←</button>
      <img src="/logo.png" alt="Life Admin Logo" class="app-logo">
      <span class="app-title">Life Admin</span>
    </div>
    <button class="theme-toggle" id="themeToggle" aria-label="Toggle theme">
      ${isDark ? '☀️' : '🌙'}
    </button>
  `;

  // Back button
  header.querySelector('#backBtn').addEventListener('click', goBack);

  // Theme toggle
  header.querySelector('#themeToggle').addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    saveData('theme', newTheme);
    header.querySelector('#themeToggle').textContent = newTheme === 'dark' ? '☀️' : '🌙';
  });

  return header;
}
