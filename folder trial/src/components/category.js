/**
 * Category Page Component – Lists tools within a category
 */
import { navigate } from '../router.js';

const categoryData = {
    calculator: {
        title: 'Calculator Tools',
        desc: 'Crunch numbers quickly',
        color: 'var(--cat-calculator)',
        tools: [
            { id: 'discount', name: 'Discount Calculator', desc: 'Calculate final price after discount', icon: '🏷️' },
            { id: 'emi', name: 'EMI Calculator', desc: 'Monthly loan payments', icon: '🏦' },
            { id: 'loan', name: 'Loan Calculator', desc: 'Simple loan breakdown', icon: '🏦' },
            { id: 'tip-splitter', name: 'Tip Splitter', desc: 'Split bills among friends', icon: '🍽️' },
            { id: 'profit-loss', name: 'Profit / Loss Calculator', desc: 'Know your earnings', icon: '📊' },
            { id: 'age', name: 'Age Calculator', desc: 'Calculate age with precision', icon: '🎂' },
            { id: 'gst', name: 'GST Calculator', desc: 'Add or remove GST', icon: '📠' },
            { id: 'percentage', name: 'Percentage Calculator', desc: 'Multi-purpose % solver', icon: '🔢' },
            { id: 'bmi', name: 'BMI Calculator', desc: 'Check your health index', icon: '⚖️' },
            { id: 'fuel', name: 'Fuel Cost Calculator', desc: 'Plan your trip expenses', icon: '⛽' },
            { id: 'time-diff', name: 'Time Difference', desc: 'Calc diff between times', icon: '⏳' },
            { id: 'salary', name: 'Salary Calculator', desc: 'Monthly/Weekly breakdown', icon: '💸' },
            { id: 'savings', name: 'Savings Calculator', desc: 'Compound interest solver', icon: '💰' },
            { id: 'speed', name: 'Speed Calculator', desc: 'Solve S/D/T problems', icon: '🏎️' },
            { id: 'date-diff', name: 'Date Difference', desc: 'Days between dates', icon: '📅' }
        ]
    },
    text: {
        title: 'Text Tools',
        desc: 'Work with text effortlessly',
        color: 'var(--cat-text)',
        tools: [
            { id: 'summarizer', name: 'Text Summarizer', desc: 'Get a summary of any text', icon: '📄' },
            { id: 'caption', name: 'Caption Generator', desc: 'Random social media captions', icon: '💬' },
            { id: 'bio', name: 'Bio Generator', desc: 'Generate profile bios', icon: '👤' },
            { id: 'word-counter', name: 'Word Counter', desc: 'Count words, chars & sentences', icon: '🔢' },
            { id: 'case-converter', name: 'Case Converter', desc: 'UPPER, lower, Title Case', icon: 'Aa' },
            { id: 'duplicates', name: 'Remove Duplicates', desc: 'Clean up line lists', icon: '👯' },
            { id: 'reverser', name: 'Text Reverser', desc: 'Mirror your words', icon: '🔄' },
            { id: 'hashtag', name: 'Hashtag Generator', desc: 'Social media growth tags', icon: '#️⃣' },
            { id: 'random-sentence', name: 'Sentence Generator', desc: 'Creative writing prompts', icon: '🎲' },
            { id: 'formatter', name: 'Text Formatter', desc: 'Clean white-spaces & tabs', icon: '🧹' },
            { id: 'username', name: 'Username Generator', desc: 'Catchy handles for apps', icon: '🆔' },
            { id: 'email', name: 'Email Templates', desc: 'Professional email presets', icon: '📧' },
            { id: 'fancy-text', name: 'Fancy Text', desc: 'Unicode font converter', icon: '✨' },
            { id: 'char-remover', name: 'Char Remover', desc: 'Strip specific symbols', icon: '✂️' }
        ]
    },
    file: {
        title: 'File Tools',
        desc: 'Handle files on the go',
        color: 'var(--cat-file)',
        tools: [
            { id: 'image-to-pdf', name: 'Image to PDF', desc: 'Convert images into a PDF', icon: '🖼️' },
            { id: 'pdf-to-images', name: 'PDF to Images', desc: 'Extract PDF pages as images', icon: '📑' },
            { id: 'image-compressor', name: 'Image Compressor', desc: 'Reduce image file size', icon: '📦' },
            { id: 'image-resizer', name: 'Image Resizer', desc: 'Change image dimensions', icon: '📐' },
            { id: 'image-cropper', name: 'Image Cropper', desc: 'Quick square crop', icon: '✂️' },
            { id: 'image-converter', name: 'Format Converter', desc: 'PNG, JPG, WebP', icon: '🔄' },
            { id: 'pdf-merger', name: 'PDF Merger', desc: 'Combine multiple PDFs', icon: '🔗' },
            { id: 'pdf-splitter', name: 'PDF Splitter', desc: 'Extract pages from PDF', icon: '🔪' },
            { id: 'exif', name: 'Metadata Viewer', desc: 'Read image EXIF info', icon: 'ℹ️' }
        ]
    },
    study: {
        title: 'Study Tools',
        desc: 'Focus and organize',
        color: 'var(--cat-study)',
        tools: [
            { id: 'pomodoro', name: 'Pomodoro Timer', desc: '25 min focus + 5 min break', icon: '⏱️' },
            { id: 'notes', name: 'Quick Notes', desc: 'Write and save notes locally', icon: '📒' },
            { id: 'flashcards', name: 'Flashcards Maker', desc: 'Study with digital cards', icon: '🎴' },
            { id: 'study-tracker', name: 'Study Tracker', desc: 'Log your session hours', icon: '📈' },
            { id: 'habit-tracker', name: 'Habit Tracker', desc: 'Build daily discipline', icon: '✅' },
            { id: 'quiz', name: 'Quiz Generator', desc: 'Test your knowledge', icon: '❓' },
            { id: 'exam-timer', name: 'Exam Timer', desc: 'Timed practice sessions', icon: '⌛' },
            { id: 'checklist', name: 'Study Checklist', desc: 'Organize your tasks', icon: '📝' },
            { id: 'daily-goal', name: 'Daily Goal', desc: 'Focus on one big task', icon: '🎯' }
        ]
    },
    daily: {
        title: 'Daily Tools',
        desc: 'Everyday utilities',
        color: 'var(--cat-daily)',
        tools: [
            { id: 'unit-converter', name: 'Unit Converter', desc: 'Length, weight, temp & more', icon: '📐' },
            { id: 'qr-generator', name: 'QR Code Generator', desc: 'Generate QR from text/link', icon: '📱' },
            { id: 'password', name: 'Password Generator', desc: 'Create strong passwords', icon: '🔐' },
            { id: 'random-picker', name: 'Random Picker', desc: 'Pick randomly from options', icon: '🎲' },
            { id: 'stopwatch', name: 'Stopwatch', desc: 'Precise lap timing', icon: '⏱️' },
            { id: 'timer', name: 'Countdown Timer', desc: 'Standard countdown', icon: '⏲️' },
            { id: 'wheel', name: 'Decision Wheel', desc: 'Spin to pick options', icon: '🎡' },
            { id: 'dice', name: 'Dice Roller', desc: 'Roll 1, 2, or 4 dice', icon: '🎲' },
            { id: 'random-num', name: 'Random Number', desc: 'Pick from range', icon: '🔢' },
            { id: 'yes-no', name: 'Yes / No Picker', desc: 'Quick choice helper', icon: '🤔' },
            { id: 'coin-flip', name: 'Coin Flip', desc: 'Heads or Tails', icon: '🪙' },
            { id: 'color-picker', name: 'Color Picker', desc: 'HEX & RGB codes', icon: '🎨' },
            { id: 'brightness', name: 'Screen Light', desc: 'Max bright flashlight', icon: '💡' },
            { id: 'sound-meter', name: 'Sound Meter', desc: 'Check noise levels', icon: '🎙️' },
            { id: 'strobe', name: 'Strobe Light', desc: 'Flashing light effect', icon: '🚨' }
        ]
    },
    health: {
        title: 'Health Tools',
        desc: 'Fitness and wellness',
        color: 'var(--cat-health)',
        tools: [
            { id: 'water-tracker', name: 'Water Tracker', desc: 'Daily intake progress', icon: '💧' },
            { id: 'step-goal', name: 'Step Goal Calc', desc: 'Calculate daily steps', icon: '🚶' },
            { id: 'calories', name: 'Calorie Estimator', desc: 'Daily TDEE calculator', icon: '🍱' },
            { id: 'body-fat', name: 'Body Fat Calc', desc: 'US Navy method estimator', icon: '💪' },
            { id: 'ideal-weight', name: 'Ideal Weight', desc: 'Health range estimator', icon: '⚖️' },
            { id: 'workout-timer', name: 'Workout Timer', desc: 'Rest interval helper', icon: '🏋️' }
        ]
    }
};

export function renderCategory(categoryId) {
    const cat = categoryData[categoryId];
    if (!cat) return '<div class="page-content tool-page"><div class="result-box"><div class="result-label">Error</div><div class="result-value">Category Not Found</div><button class="btn btn-primary mt-lg" onclick="location.hash=\'#/\'">Go Dashboard</button></div></div>';

    const page = document.createElement('div');
    page.className = 'page-content';

    page.innerHTML = `
    <div class="category-header">
      <h2>${cat.title}</h2>
      <p>${cat.desc}</p>
    </div>
    <div class="tools-list">
      ${cat.tools.map(tool => `
        <div class="tool-card" data-tool="${tool.id}" style="--tool-accent: ${cat.color}">
          <div class="tool-icon">${tool.icon}</div>
          <div class="tool-info">
            <div class="tool-name">${tool.name}</div>
            <div class="tool-desc">${tool.desc}</div>
          </div>
          <div class="tool-arrow">›</div>
        </div>
      `).join('')}
    </div>
  `;

    page.querySelectorAll('.tool-card').forEach(card => {
        card.addEventListener('click', () => {
            navigate(`/tool/${card.dataset.tool}`);
        });
    });

    return page;
}
