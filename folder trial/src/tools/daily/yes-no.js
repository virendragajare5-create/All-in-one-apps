/**
 * Yes / No Picker
 * Simple 50/50 decision maker.
 */
export function renderYesNoPicker() {
    const page = document.createElement('div');
    page.className = 'page-content tool-page';

    page.innerHTML = `
    <h2>🤔 Yes / No Picker</h2>
    
    <div class="result-box mt-xl" style="height: 200px; display: flex; align-items: center; justify-content: center;">
      <div id="yesNoResult" class="result-value" style="font-size: 5rem">?</div>
    </div>

    <button class="btn btn-primary mt-xl" id="pickBtn" style="height: 80px; font-size: 1.5rem">PICK FOR ME</button>
  `;

    page.querySelector('#pickBtn').onclick = () => {
        const res = page.querySelector('#yesNoResult');
        res.textContent = '...';

        setTimeout(() => {
            const val = Math.random() > 0.5 ? 'YES' : 'NO';
            res.textContent = val;
            res.style.color = val === 'YES' ? 'var(--color-success)' : 'var(--color-danger)';
            if ('vibrate' in navigator) navigator.vibrate(50);
        }, 500);
    };

    return page;
}
