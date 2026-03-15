/**
 * App Dashboard Component
 * Displays categories and supports global search for tools.
 */
import { navigate } from '../router.js';

const CATEGORIES = [
  { id: 'calculator', name: 'Calculator Tools', desc: 'Discounts, EMI, tips & more', icon: '🧮', count: 14 },
  { id: 'text', name: 'Text Tools', desc: 'Summarize, generate & count', icon: '✍️', count: 14 },
  { id: 'file', name: 'File Tools', desc: 'PDF, images & compression', icon: '📁', count: 9 },
  { id: 'study', name: 'Study Tools', desc: 'Focus timer & quick notes', icon: '🎓', count: 9 },
  { id: 'daily', name: 'Daily Tools', desc: 'Convert, generate & pick', icon: '⚡', count: 14 },
  { id: 'health', name: 'Health Tools', desc: 'Fitness & wellness utilities', icon: '🏥', count: 6 },
];

// Flat list of all tools for searching
const ALL_TOOLS = [
  // Calculator
  { name: 'Discount Calculator', path: '/tool/discount', cat: 'calculator' },
  { name: 'EMI Calculator', path: '/tool/emi', cat: 'calculator' },
  { name: 'Loan Calculator', path: '/tool/loan', cat: 'calculator' },
  { name: 'Tip Splitter', path: '/tool/tip-splitter', cat: 'calculator' },
  { name: 'Profit / Loss Calculator', path: '/tool/profit-loss', cat: 'calculator' },
  { name: 'Age Calculator', path: '/tool/age', cat: 'calculator' },
  { name: 'GST Calculator', path: '/tool/gst', cat: 'calculator' },
  { name: 'Percentage Calculator', path: '/tool/percentage', cat: 'calculator' },
  { name: 'BMI Calculator', path: '/tool/bmi', cat: 'calculator' },
  { name: 'Fuel Cost Calculator', path: '/tool/fuel', cat: 'calculator' },
  { name: 'Time Difference Calculator', path: '/tool/time-diff', cat: 'calculator' },
  { name: 'Salary Calculator', path: '/tool/salary', cat: 'calculator' },
  { name: 'Savings Calculator', path: '/tool/savings', cat: 'calculator' },
  { name: 'Speed / Distance Calculator', path: '/tool/speed', cat: 'calculator' },
  { name: 'Date Difference Calculator', path: '/tool/date-diff', cat: 'calculator' },

  // Text
  { name: 'Summarizer', path: '/tool/summarizer', cat: 'text' },
  { name: 'Caption Generator', path: '/tool/caption', cat: 'text' },
  { name: 'Bio Generator', path: '/tool/bio', cat: 'text' },
  { name: 'Word Counter', path: '/tool/word-counter', cat: 'text' },
  { name: 'Case Converter', path: '/tool/case-converter', cat: 'text' },
  { name: 'Remove Duplicate Lines', path: '/tool/duplicates', cat: 'text' },
  { name: 'Text Reverser', path: '/tool/reverser', cat: 'text' },
  { name: 'Hashtag Generator', path: '/tool/hashtag', cat: 'text' },
  { name: 'Random Sentence Generator', path: '/tool/random-sentence', cat: 'text' },
  { name: 'Text Formatter', path: '/tool/formatter', cat: 'text' },
  { name: 'Username Generator', path: '/tool/username', cat: 'text' },
  { name: 'Email Template Generator', path: '/tool/email', cat: 'text' },
  { name: 'Fancy Text Generator', path: '/tool/fancy-text', cat: 'text' },
  { name: 'Character Remover', path: '/tool/char-remover', cat: 'text' },

  // Daily
  { name: 'Unit Converter', path: '/tool/unit-converter', cat: 'daily' },
  { name: 'QR Code Generator', path: '/tool/qr-generator', cat: 'daily' },
  { name: 'Password Generator', path: '/tool/password', cat: 'daily' },
  { name: 'Random Picker', path: '/tool/random-picker', cat: 'daily' },
  { name: 'Stopwatch', path: '/tool/stopwatch', cat: 'daily' },
  { name: 'Countdown Timer', path: '/tool/timer', cat: 'daily' },
  { name: 'Decision Wheel', path: '/tool/wheel', cat: 'daily' },
  { name: 'Dice Roller', path: '/tool/dice', cat: 'daily' },
  { name: 'Random Number Generator', path: '/tool/random-num', cat: 'daily' },
  { name: 'Yes / No Picker', path: '/tool/yes-no', cat: 'daily' },
  { name: 'Coin Flip', path: '/tool/coin-flip', cat: 'daily' },
  { name: 'Color Picker', path: '/tool/color-picker', cat: 'daily' },
  { name: 'Brightness Booster', path: '/tool/brightness', cat: 'daily' },
  { name: 'Sound Level Meter', path: '/tool/sound-meter', cat: 'daily' },
  { name: 'Strobe Light', path: '/tool/strobe', cat: 'daily' },

  // Study
  { name: 'Pomodoro Timer', path: '/tool/pomodoro', cat: 'study' },
  { name: 'Quick Notes', path: '/tool/notes', cat: 'study' },
  { name: 'Flashcards Maker', path: '/tool/flashcards', cat: 'study' },
  { name: 'Study Tracker', path: '/tool/study-tracker', cat: 'study' },
  { name: 'Habit Tracker', path: '/tool/habit-tracker', cat: 'study' },
  { name: 'Random Quiz Generator', path: '/tool/quiz', cat: 'study' },
  { name: 'Countdown Exam Timer', path: '/tool/exam-timer', cat: 'study' },
  { name: 'Study Checklist', path: '/tool/checklist', cat: 'study' },
  { name: 'Daily Goal Tracker', path: '/tool/daily-goal', cat: 'study' },

  // Health
  { name: 'Water Intake Tracker', path: '/tool/water-tracker', cat: 'health' },
  { name: 'Step Goal Calculator', path: '/tool/step-goal', cat: 'health' },
  { name: 'Calorie Estimator', path: '/tool/calories', cat: 'health' },
  { name: 'Body Fat Calculator', path: '/tool/body-fat', cat: 'health' },
  { name: 'Ideal Weight Calculator', path: '/tool/ideal-weight', cat: 'health' },
  { name: 'Workout Rest Timer', path: '/tool/workout-timer', cat: 'health' },

  // File
  { name: 'Image to PDF', path: '/tool/image-to-pdf', cat: 'file' },
  { name: 'PDF to Images', path: '/tool/pdf-to-images', cat: 'file' },
  { name: 'Image Compressor', path: '/tool/image-compressor', cat: 'file' },
  { name: 'Image Resizer', path: '/tool/image-resizer', cat: 'file' },
  { name: 'Image Cropper', path: '/tool/image-cropper', cat: 'file' },
  { name: 'Format Converter', path: '/tool/image-converter', cat: 'file' },
  { name: 'PDF Merger', path: '/tool/pdf-merger', cat: 'file' },
  { name: 'PDF Splitter', path: '/tool/pdf-splitter', cat: 'file' },
  { name: 'Image Metadata Viewer', path: '/tool/exif', cat: 'file' },
];

export function renderDashboard() {
  const page = document.createElement('div');
  page.className = 'page-content';

  const hour = new Date().getHours();
  const greeting = hour < 12 ? 'Good Morning' : hour < 18 ? 'Good Afternoon' : 'Good Evening';

  page.innerHTML = `
    <div class="dashboard-greeting">
      <h1>${greeting} 👋</h1>
      <p>What would you like to do today?</p>
    </div>

    <div class="search-container">
      <div class="search-input-wrapper">
        <span class="search-icon">🔍</span>
        <input type="text" id="toolSearch" class="form-input search-input" placeholder="Search 60+ tools...">
      </div>
    </div>

    <div id="searchResults" class="tools-list hidden mb-lg"></div>

    <div id="categoriesList" class="category-grid mt-lg">
      ${CATEGORIES.map(cat => `
        <div class="category-card" data-id="${cat.id}" style="--card-accent: var(--cat-${cat.id})">
          <div class="card-icon">${cat.icon}</div>
          <div class="card-title">${cat.name}</div>
          <div class="card-desc">${cat.desc}</div>
          <div class="card-count">${cat.count} tools</div>
        </div>
      `).join('')}
    </div>
  `;

  // Search logic
  const searchInput = page.querySelector('#toolSearch');
  const searchResults = page.querySelector('#searchResults');
  const categoriesList = page.querySelector('#categoriesList');

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();

    if (query.length < 2) {
      searchResults.classList.add('hidden');
      categoriesList.classList.remove('hidden');
      return;
    }

    const matches = ALL_TOOLS.filter(t => t.name.toLowerCase().includes(query));

    if (matches.length > 0) {
      searchResults.classList.remove('hidden');
      categoriesList.classList.add('hidden');
      searchResults.innerHTML = matches.map(tool => `
        <div class="tool-card" data-path="${tool.path}" style="--tool-accent: var(--cat-${tool.cat})">
          <div class="tool-icon">${CATEGORIES.find(c => c.id === tool.cat).icon}</div>
          <div class="tool-info">
            <div class="tool-name">${tool.name}</div>
            <div class="tool-desc">${tool.cat.charAt(0).toUpperCase() + tool.cat.slice(1)}</div>
          </div>
          <div class="tool-arrow">→</div>
        </div>
      `).join('');

      searchResults.querySelectorAll('.tool-card').forEach(card => {
        card.addEventListener('click', () => navigate(card.dataset.path));
      });
    } else {
      searchResults.classList.remove('hidden');
      categoriesList.classList.add('hidden');
      searchResults.innerHTML = '<p class="text-center text-muted p-md">No tools found matching your search.</p>';
    }
  });

  // Category navigation
  page.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', () => {
      navigate(`/category/${card.dataset.id}`);
    });
  });

  return page;
}
