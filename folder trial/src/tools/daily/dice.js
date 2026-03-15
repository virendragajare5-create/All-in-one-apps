/**
 * Dice Roller
 * Roll 1, 2, or 4 dice with random results.
 */
export function renderDiceRoller() {
    const page = document.createElement('div');
    page.className = 'page-content tool-page';

    page.innerHTML = `
    <h2>🎲 Dice Roller</h2>
    
    <div id="diceArea" class="flex flex-wrap items-center justify-center gap-md p-xl" style="min-height: 200px">
        <div class="dice">?</div>
    </div>

    <div class="grid-3-col mt-xl">
      <button class="btn btn-primary" id="roll1">Roll 1</button>
      <button class="btn btn-primary" id="roll2">Roll 2</button>
      <button class="btn btn-primary" id="roll4">Roll 4</button>
    </div>

    <style>
      .dice {
        width: 80px;
        height: 80px;
        background: white;
        color: black;
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 3rem;
        font-weight: bold;
        box-shadow: 0 4px 0 #ccc;
        animation: shake 0.5s ease;
      }
      @keyframes shake {
        0% { transform: translateY(0) rotate(0); }
        25% { transform: translateY(-10px) rotate(5deg); }
        50% { transform: translateY(0) rotate(-5deg); }
        75% { transform: translateY(-5px) rotate(3deg); }
        100% { transform: translateY(0) rotate(0); }
      }
    </style>
  `;

    const diceArea = page.querySelector('#diceArea');

    const roll = (count) => {
        diceArea.innerHTML = '';
        for (let i = 0; i < count; i++) {
            const val = Math.floor(Math.random() * 6) + 1;
            const d = document.createElement('div');
            d.className = 'dice';
            d.textContent = val;
            diceArea.appendChild(d);
        }
        if ('vibrate' in navigator) navigator.vibrate(50);
    };

    page.querySelector('#roll1').onclick = () => roll(1);
    page.querySelector('#roll2').onclick = () => roll(2);
    page.querySelector('#roll4').onclick = () => roll(4);

    return page;
}
