/**
 * Coin Flip
 * Simulates a virtual coin toss.
 */
export function renderCoinFlip() {
    const page = document.createElement('div');
    page.className = 'page-content tool-page';

    page.innerHTML = `
    <h2>🪙 Coin Flip</h2>
    
    <div class="coin-container mt-xl">
      <div id="theCoin" class="coin">🪙</div>
    </div>

    <div id="coinResult" class="text-center mt-lg font-bold" style="font-size: 2rem">TAP TO FLIP</div>

    <style>
      .coin-container {
        display: flex;
        justify-content: center;
        perspective: 1000px;
      }
      .coin {
        width: 150px;
        height: 150px;
        background: #f1c40f;
        border: 10px solid #d4ac0d;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 4rem;
        cursor: pointer;
        transition: transform 1s;
        transform-style: preserve-3d;
      }
      .coin.flipping {
        animation: flipCoin 1s ease-out;
      }
      @keyframes flipCoin {
        0% { transform: translateY(0) rotateY(0); }
        50% { transform: translateY(-150px) rotateY(1800deg); }
        100% { transform: translateY(0) rotateY(3600deg); }
      }
    </style>
  `;

    const coin = page.querySelector('#theCoin');
    const res = page.querySelector('#coinResult');

    coin.onclick = () => {
        if (coin.classList.contains('flipping')) return;

        coin.classList.add('flipping');
        res.textContent = '...';

        setTimeout(() => {
            coin.classList.remove('flipping');
            const side = Math.random() > 0.5 ? 'HEADS' : 'TAILS';
            res.textContent = side;
            coin.textContent = side === 'HEADS' ? '🪙' : '🔘';
            if ('vibrate' in navigator) navigator.vibrate([10, 50, 10]);
        }, 1000);
    };

    return page;
}
