/**
 * Bio Generator
 * Template-based bio generation with profession and tone selection.
 */
import { copyToClipboard } from '../../utils/storage.js';

const professions = [
    'Developer', 'Designer', 'Writer', 'Photographer', 'Student',
    'Entrepreneur', 'Freelancer', 'Creator', 'Artist', 'Marketer',
    'Engineer', 'Teacher', 'Musician', 'Blogger', 'Traveler'
];

const tones = {
    professional: {
        label: '💼 Professional',
        templates: [
            '{profession} | Passionate about {interest} | Building the future, one project at a time.',
            '{profession} with {years}+ years of experience. Focused on {interest} and continuous growth.',
            'Results-driven {profession} specializing in {interest}. Let\'s connect and create impact.',
            '{profession} | {interest} enthusiast | Committed to excellence and innovation.',
            'Experienced {profession} helping brands with {interest}. Open for collaborations.',
            'Dedicated {profession} | {interest} expert | Turning ideas into reality.',
        ]
    },
    casual: {
        label: '😊 Casual',
        templates: [
            'Just a {profession} who loves {interest} ✌️',
            '{profession} by day, {interest} lover by night 🌙',
            'Living life one {interest} at a time | {profession} vibes ✨',
            '{profession} 🔥 | {interest} addict | Coffee enthusiast ☕',
            'Making cool stuff as a {profession} | Obsessed with {interest} 🚀',
            'Your friendly neighborhood {profession} | {interest} is life 💯',
        ]
    },
    witty: {
        label: '😄 Witty',
        templates: [
            'Professional {profession}. Amateur {interest} philosopher. Full-time overthinker. 🤔',
            '{profession} who accidentally got good at {interest}. Still surprised. 😅',
            'I put the "pro" in {profession} and the "fun" in {interest}. You\'re welcome. 😎',
            '{profession} | {interest} lover | My mom thinks I\'m cool 😂',
            'Part-time {profession}, full-time {interest} nerd. No regrets. 🤷',
            'Serial {profession} | {interest} fanatic | Will work for pizza 🍕',
        ]
    },
    minimal: {
        label: '✨ Minimal',
        templates: [
            '{profession} · {interest}',
            '{profession} | {interest} | ☕',
            '{interest} · {profession} · ✨',
            '{profession}. {interest}. Simple.',
            '📍 {profession} • {interest}',
            '{profession} → {interest} → 🌟',
        ]
    }
};

const interests = [
    'technology', 'design', 'music', 'photography', 'travel',
    'coffee', 'coding', 'books', 'fitness', 'food',
    'art', 'gaming', 'nature', 'fashion', 'movies',
    'writing', 'cooking', 'yoga', 'science', 'startups'
];

export function renderBio() {
    const page = document.createElement('div');
    page.className = 'page-content tool-page';

    let activeTone = 'professional';

    page.innerHTML = `
    <h2>👤 Bio Generator</h2>
    <div class="form-group">
      <label for="bioProfession">Your Profession</label>
      <select class="form-select" id="bioProfession">
        ${professions.map(p => `<option value="${p}">${p}</option>`).join('')}
      </select>
    </div>
    <div class="form-group">
      <label for="bioInterest">Your Interest</label>
      <select class="form-select" id="bioInterest">
        ${interests.map(i => `<option value="${i}">${i.charAt(0).toUpperCase() + i.slice(1)}</option>`).join('')}
      </select>
    </div>
    <div class="form-group">
      <label>Tone</label>
      <div class="chip-group" id="bioToneChips">
        ${Object.entries(tones).map(([key, val]) => `
          <span class="chip ${key === activeTone ? 'active' : ''}" data-tone="${key}">${val.label}</span>
        `).join('')}
      </div>
    </div>
    <button class="btn btn-primary" id="generateBioBtn">🎲 Generate Bio</button>
    <div id="bioResult"></div>
  `;

    page.querySelectorAll('#bioToneChips .chip').forEach(chip => {
        chip.addEventListener('click', () => {
            page.querySelectorAll('#bioToneChips .chip').forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            activeTone = chip.dataset.tone;
        });
    });

    page.querySelector('#generateBioBtn').addEventListener('click', () => {
        const profession = page.querySelector('#bioProfession').value;
        const interest = page.querySelector('#bioInterest').value;
        const templates = tones[activeTone].templates;
        const template = templates[Math.floor(Math.random() * templates.length)];
        const years = Math.floor(Math.random() * 8) + 2;

        const bio = template
            .replace(/\{profession\}/g, profession)
            .replace(/\{interest\}/g, interest)
            .replace(/\{years\}/g, years);

        page.querySelector('#bioResult').innerHTML = `
      <div class="result-box">
        <div class="result-label">${tones[activeTone].label} Bio</div>
        <div class="output-area" style="font-size: var(--font-size-md); padding: var(--spacing-lg);">
          ${bio}
        </div>
        <div class="btn-row mt-md">
          <button class="btn btn-secondary btn-sm" id="copyBioBtn">📋 Copy</button>
          <button class="btn btn-secondary btn-sm" id="regenBioBtn">🔄 Regenerate</button>
        </div>
      </div>
    `;

        page.querySelector('#copyBioBtn').addEventListener('click', () => copyToClipboard(bio));
        page.querySelector('#regenBioBtn').addEventListener('click', () => {
            page.querySelector('#generateBioBtn').click();
        });
    });

    return page;
}
