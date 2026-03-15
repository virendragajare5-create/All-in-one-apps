/**
 * Password Generator
 * Generates strong random passwords using crypto.getRandomValues.
 */
import { copyToClipboard } from '../../utils/storage.js';

const CHAR_SETS = {
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    numbers: '0123456789',
    symbols: '!@#$%^&*()_+-=[]{}|;:,.<>?'
};

export function renderPasswordGenerator() {
    const page = document.createElement('div');
    page.className = 'page-content tool-page';

    let options = {
        length: 16,
        uppercase: true,
        lowercase: true,
        numbers: true,
        symbols: true
    };

    page.innerHTML = `
    <h2>🔐 Password Generator</h2>
    <div class="password-display">
      <span class="password-text" id="passwordText">Click Generate</span>
      <button class="copy-btn" id="passwordCopyBtn" title="Copy">📋</button>
    </div>
    <div class="range-group">
      <div class="range-header">
        <span>Password Length</span>
        <span id="lengthValue">${options.length}</span>
      </div>
      <input type="range" id="passwordLength" min="6" max="64" value="${options.length}" />
    </div>
    <div class="toggle-row">
      <label>Uppercase (A-Z)</label>
      <div class="toggle active" id="toggleUppercase" data-key="uppercase"></div>
    </div>
    <div class="toggle-row">
      <label>Lowercase (a-z)</label>
      <div class="toggle active" id="toggleLowercase" data-key="lowercase"></div>
    </div>
    <div class="toggle-row">
      <label>Numbers (0-9)</label>
      <div class="toggle active" id="toggleNumbers" data-key="numbers"></div>
    </div>
    <div class="toggle-row">
      <label>Symbols (!@#$...)</label>
      <div class="toggle active" id="toggleSymbols" data-key="symbols"></div>
    </div>
    <button class="btn btn-primary mt-md" id="generatePasswordBtn">🔐 Generate Password</button>
    <div id="passwordStrength" class="mt-md"></div>
  `;

    const passwordText = page.querySelector('#passwordText');
    const lengthSlider = page.querySelector('#passwordLength');
    const lengthValue = page.querySelector('#lengthValue');

    lengthSlider.addEventListener('input', (e) => {
        options.length = parseInt(e.target.value);
        lengthValue.textContent = options.length;
    });

    // Toggle handlers
    page.querySelectorAll('.toggle').forEach(toggle => {
        toggle.addEventListener('click', () => {
            const key = toggle.dataset.key;
            options[key] = !options[key];
            toggle.classList.toggle('active', options[key]);

            // Ensure at least one option is selected
            const anyActive = options.uppercase || options.lowercase || options.numbers || options.symbols;
            if (!anyActive) {
                options[key] = true;
                toggle.classList.add('active');
            }
        });
    });

    function generatePassword() {
        let charset = '';
        if (options.uppercase) charset += CHAR_SETS.uppercase;
        if (options.lowercase) charset += CHAR_SETS.lowercase;
        if (options.numbers) charset += CHAR_SETS.numbers;
        if (options.symbols) charset += CHAR_SETS.symbols;

        if (!charset) charset = CHAR_SETS.lowercase;

        const array = new Uint32Array(options.length);
        crypto.getRandomValues(array);

        let password = '';
        for (let i = 0; i < options.length; i++) {
            password += charset[array[i] % charset.length];
        }
        return password;
    }

    function getStrength(password) {
        let score = 0;
        if (password.length >= 8) score++;
        if (password.length >= 12) score++;
        if (password.length >= 16) score++;
        if (/[A-Z]/.test(password)) score++;
        if (/[a-z]/.test(password)) score++;
        if (/[0-9]/.test(password)) score++;
        if (/[^A-Za-z0-9]/.test(password)) score++;

        if (score <= 2) return { label: 'Weak', color: 'var(--color-danger)', percent: 25 };
        if (score <= 4) return { label: 'Fair', color: 'var(--color-warning)', percent: 50 };
        if (score <= 5) return { label: 'Strong', color: 'var(--color-info)', percent: 75 };
        return { label: 'Very Strong', color: 'var(--color-success)', percent: 100 };
    }

    page.querySelector('#generatePasswordBtn').addEventListener('click', () => {
        const password = generatePassword();
        passwordText.textContent = password;

        const strength = getStrength(password);
        page.querySelector('#passwordStrength').innerHTML = `
      <div class="progress-bar">
        <div class="progress-fill" style="width: ${strength.percent}%; background: ${strength.color};"></div>
      </div>
      <div class="text-sm mt-sm" style="color: ${strength.color}; font-weight: 600;">
        Strength: ${strength.label}
      </div>
    `;
    });

    page.querySelector('#passwordCopyBtn').addEventListener('click', () => {
        const text = passwordText.textContent;
        if (text && text !== 'Click Generate') {
            copyToClipboard(text);
        }
    });

    return page;
}
