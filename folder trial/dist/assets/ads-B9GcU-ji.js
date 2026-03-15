import{t as e}from"./index-C3F13eg4.js";var t=0,n={initBanner(){if(document.getElementById(`ad-banner`))return;let e=document.createElement(`div`);e.id=`ad-banner`,e.className=`ad-banner`,e.innerHTML=`
      <div class="ad-label">ADVERTISEMENT (Test)</div>
      <div class="ad-content">
        <span>Google AdMob Banner Content</span>
      </div>
    `,document.body.appendChild(e)},async showInterstitial(){if(!document.querySelector(`.ad-overlay`)&&(t++,t%4==0))return new Promise(e=>{let t=document.createElement(`div`);t.className=`ad-overlay`,t.innerHTML=`
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
      `,document.body.appendChild(t);let n=()=>{document.body.removeChild(t),e()};t.querySelector(`.ad-close`).onclick=n,t.querySelector(`.ad-cta`).onclick=n})},async showRewarded(){return new Promise((t,n)=>{let r=document.createElement(`div`);r.className=`ad-overlay`,r.innerHTML=`
        <div class="ad-modal">
          <div class="ad-header">
            <span>Rewarded Ad</span>
          </div>
          <div class="ad-body">
            <div class="reward-timer">Reward in <span id="reward-sec">5</span>s</div>
            <p>Watch to unlock premium features.</p>
          </div>
        </div>
      `,document.body.appendChild(r);let i=5,a=setInterval(()=>{i--;let n=r.querySelector(`#reward-sec`);n&&(n.textContent=i),i<=0&&(clearInterval(a),document.body.removeChild(r),e(`Reward granted! Ads removed temporarily.`),t(!0))},1e3)})}};export{n as Ads};