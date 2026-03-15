/**
 * Brightness Booster
 * Simple white screen tool for maximum light / brightness.
 */
export function renderBrightnessBooster() {
    const page = document.createElement('div');
    page.className = 'page-content tool-page';

    page.innerHTML = `
    <h2>💡 Screen Light</h2>
    <p class="text-sm text-center mb-xl">Use this as a temporary flashlight or for maximum screen brightness.</p>
    
    <div id="lightToggle" class="tool-card text-center p-xl" style="height: 300px; display: flex; flex-direction: column; align-items: center; justify-content: center; cursor: pointer; transition: 0.3s">
        <div style="font-size: 5rem" id="lightIcon">🌑</div>
        <div class="mt-lg font-bold" id="lightText">TAP TO TURN ON</div>
    </div>

    <style>
      .light-on {
        background: white !important;
        color: black !important;
      }
    </style>
  `;

    const toggle = page.querySelector('#lightToggle');
    const icon = page.querySelector('#lightIcon');
    const text = page.querySelector('#lightText');

    let isOn = false;

    toggle.onclick = () => {
        isOn = !isOn;
        if (isOn) {
            toggle.classList.add('light-on');
            icon.textContent = '💡';
            text.textContent = 'MAX BRIGHTNESS ON';
            // Attempt to keep screen awake if supported
            if ('wakeLock' in navigator) {
                navigator.wakeLock.request('screen').catch(() => { });
            }
        } else {
            toggle.classList.remove('light-on');
            icon.textContent = '🌑';
            text.textContent = 'TAP TO TURN ON';
        }
    };

    return page;
}
