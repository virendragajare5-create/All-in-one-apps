/**
 * Caption Generator
 * Curated captions with category filters, random selection.
 */
import { copyToClipboard } from '../../utils/storage.js';

const captions = {
    motivational: [
        "Dream big. Start small. Act now. 🚀",
        "Your only limit is your mind. 💪",
        "Be the energy you want to attract. ✨",
        "Stay hungry, stay foolish. 🌟",
        "Hustle in silence, let success make the noise. 🔥",
        "Good things take time. Be patient. ⏳",
        "Turn your wounds into wisdom. 🧠",
        "If not now, then when? ⚡",
        "Stop wishing, start doing. 💯",
        "The best time to start was yesterday. The next best is now. 🌅",
        "Work hard in silence, let your success be your noise. 🤫",
        "Believe you can and you're halfway there. 🙌",
        "Small steps every day lead to big results. 👣",
        "Don't stop until you're proud. 🏆",
        "Rise above the storm and you will find the sunshine. ☀️",
        "The struggle you're in today is developing the strength for tomorrow. 💎",
        "Push harder than yesterday if you want a different tomorrow. 🔥",
        "Success doesn't come to you, you go to it. 🎯",
        "Be a voice, not an echo. 📢",
        "Fall seven times, stand up eight. 🥊"
    ],
    funny: [
        "I need a six-month vacation, twice a year. 🏖️",
        "My bed is a magical place where I suddenly remember everything I forgot to do. 😴",
        "I'm not lazy, I'm on energy-saving mode. 🔋",
        "Life is short. Smile while you still have teeth. 😁",
        "I followed my heart and it led me to the fridge. 🍕",
        "Friday is my second favorite F word. 🎉",
        "I don't sweat, I sparkle. ✨",
        "Reality called, so I hung up. 📞",
        "I'm not arguing, I'm just explaining why I'm right. 💁",
        "Diet starts Monday... next Monday. 🍔",
        "Common sense is like deodorant. Those who need it most never use it. 😂",
        "I'm on a seafood diet. I see food and I eat it. 🦐",
        "My wallet is like an onion. Opening it makes me cry. 😭",
        "Exercise? I thought you said extra fries! 🍟",
        "I'm not old, I'm vintage. 🍷"
    ],
    aesthetic: [
        "Lost in the right direction. 🧭",
        "Less perfection, more authenticity. 🌿",
        "Find beauty in the chaos. 🌸",
        "Wandering is not being lost. 🌙",
        "Sunsets and palm trees. 🌴",
        "Collect moments, not things. 📸",
        "Stay wild, moon child. 🌙",
        "She was chaos and beauty intertwined. 🦋",
        "Golden hour state of mind. 🌅",
        "Bloom where you are planted. 🌺",
        "Dancing through life with bare feet and a full heart. 💃",
        "Stars can't shine without darkness. ⭐",
        "Life is art, live yours in color. 🎨",
        "Between the pages of a book is a lovely place to be. 📖",
        "Ocean air, salty hair. 🌊"
    ],
    selfie: [
        "Confidence level: Selfie with no filter. 😎",
        "But first, let me take a selfie. 📱",
        "Be yourself, there's no one better. 💫",
        "Serving looks since [birth year]. 💅",
        "Not everyone likes me, but not everyone matters. 👑",
        "Too glam to give a damn. 💋",
        "I woke up like this. 😏",
        "Smile big, laugh often. 😊",
        "Living my best life. 🌟",
        "Mood: feeling myself. ✨",
        "This is my resting nice face. 😇",
        "Warning: hot content ahead. 🔥",
        "Why fit in when you were born to stand out? 🦄",
        "Me, myself, and I. 💖",
        "Living proof that good things come in small packages. 📦"
    ],
    travel: [
        "Adventure awaits. 🗺️",
        "Take only memories, leave only footprints. 👣",
        "The world is a book and those who don't travel read only one page. 📖",
        "Jet lag is for amateurs. ✈️",
        "Wander often, wonder always. 🌍",
        "Life is short and the world is wide. 🌎",
        "Travel far enough to meet yourself. 🧳",
        "I haven't been everywhere, but it's on my list. 📝",
        "Catch flights, not feelings. 🛫",
        "Not all classrooms have four walls. 🏔️",
        "Eat. Sleep. Travel. Repeat. 🔄",
        "Go where you feel most alive. 🌋",
        "Passport: ready. Adventure: pending. ⏳",
        "Let's find some beautiful place to get lost. 🗺️",
        "Exploring the world, one city at a time. 🏙️"
    ]
};

const categoryLabels = {
    motivational: '💪 Motivational',
    funny: '😂 Funny',
    aesthetic: '🌸 Aesthetic',
    selfie: '📱 Selfie',
    travel: '✈️ Travel'
};

export function renderCaption() {
    const page = document.createElement('div');
    page.className = 'page-content tool-page';

    let activeCategory = 'motivational';

    page.innerHTML = `
    <h2>💬 Caption Generator</h2>
    <div class="form-group">
      <label>Choose a vibe</label>
      <div class="chip-group" id="captionChips">
        ${Object.entries(categoryLabels).map(([key, label]) => `
          <span class="chip ${key === activeCategory ? 'active' : ''}" data-cat="${key}">${label}</span>
        `).join('')}
      </div>
    </div>
    <button class="btn btn-primary" id="generateCaptionBtn">🎲 Generate Caption</button>
    <div id="captionResult"></div>
  `;

    page.querySelectorAll('#captionChips .chip').forEach(chip => {
        chip.addEventListener('click', () => {
            page.querySelectorAll('#captionChips .chip').forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            activeCategory = chip.dataset.cat;
        });
    });

    page.querySelector('#generateCaptionBtn').addEventListener('click', () => {
        const categoryList = captions[activeCategory];
        const randomCaption = categoryList[Math.floor(Math.random() * categoryList.length)];

        page.querySelector('#captionResult').innerHTML = `
      <div class="result-box">
        <div class="result-label">${categoryLabels[activeCategory]}</div>
        <div class="output-area" style="font-size: var(--font-size-md); text-align: center; padding: var(--spacing-lg);">
          ${randomCaption}
        </div>
        <button class="btn btn-secondary btn-sm mt-md" id="copyCaptionBtn">📋 Copy Caption</button>
      </div>
    `;

        page.querySelector('#copyCaptionBtn').addEventListener('click', () => {
            copyToClipboard(randomCaption);
        });
    });

    return page;
}
