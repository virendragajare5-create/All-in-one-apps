/**
 * AdMob Mock Service
 * Simulates Banner, Interstitial, and Rewarded ads for web.
 * In a real Capacitor/Cordova app, this would wrap the native SDK.
 */
import { showToast } from './storage.js';

const TEST_AD_IDS = {
  banner: 'ca-app-pub-3940256099942544/6300978111',
  interstitial: 'ca-app-pub-3940256099942544/1033173712',
  rewarded: 'ca-app-pub-3940256099942544/5224354917'
};

let adCounter = 0;

export const Ads = {
  /**
   * Initialize Banner ad at the bottom of the page
   */
  initBanner() {
    if (document.getElementById('ad-banner')) return;

    const banner = document.createElement('div');
    banner.id = 'ad-banner';
    banner.className = 'ad-banner';
    banner.innerHTML = `
      <div class="ad-label">ADVERTISEMENT (Test)</div>
      <div class="ad-content">
        <span>Google AdMob Banner Content</span>
      </div>
    `;
    document.body.appendChild(banner);
  },

  /**
   * Show Interstitial ad occasionally
   */
  async showInterstitial() {
    if (document.querySelector('.ad-overlay')) return;
    adCounter++;
    // Show every 4th navigation
    if (adCounter % 4 !== 0) return;

    return new Promise((resolve) => {
      const overlay = document.createElement('div');
      overlay.className = 'ad-overlay';
      overlay.innerHTML = `
        <div class="ad-modal">
          <div class="ad-header">
            <span>Interstitial Ad</span>
            <button class="ad-close">✕</button>
          </div>
          <div class="ad-body">
            <div class="ad-placeholder">Ad Content Mock</div>
            <p>This is a simulated AdMob Interstitial.</p>
          </div>
          <button class="btn btn-primary ad-cta">Dismiss Ad</button>
        </div>
      `;

      document.body.appendChild(overlay);

      const close = () => {
        document.body.removeChild(overlay);
        resolve();
      };

      overlay.querySelector('.ad-close').onclick = close;
      overlay.querySelector('.ad-cta').onclick = close;
    });
  },

  /**
   * Show Rewarded ad to unlock features
   */
  async showRewarded() {
    return new Promise((resolve, reject) => {
      const overlay = document.createElement('div');
      overlay.className = 'ad-overlay';
      overlay.innerHTML = `
        <div class="ad-modal">
          <div class="ad-header">
            <span>Rewarded Ad</span>
          </div>
          <div class="ad-body">
            <div class="reward-timer">Reward in <span id="reward-sec">5</span>s</div>
            <p>Watch to unlock premium features.</p>
          </div>
        </div>
      `;

      document.body.appendChild(overlay);

      let timeLeft = 5;
      const interval = setInterval(() => {
        timeLeft--;
        const secEl = overlay.querySelector('#reward-sec');
        if (secEl) secEl.textContent = timeLeft;

        if (timeLeft <= 0) {
          clearInterval(interval);
          document.body.removeChild(overlay);
          showToast('Reward granted! Ads removed temporarily.');
          resolve(true);
        }
      }, 1000);
    });
  }
};
