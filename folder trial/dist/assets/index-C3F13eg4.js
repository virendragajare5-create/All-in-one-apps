var e=Object.defineProperty,t=(t,n)=>{let r={};for(var i in t)e(r,i,{get:t[i],enumerable:!0});return n||e(r,Symbol.toStringTag,{value:`Module`}),r};(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var n=`modulepreload`,r=function(e){return`/`+e},i={},a=function(e,t,a){let o=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),s=document.querySelector(`meta[property=csp-nonce]`),c=s?.nonce||s?.getAttribute(`nonce`);function l(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}o=l(t.map(t=>{if(t=r(t,a),t in i)return;i[t]=!0;let o=t.endsWith(`.css`),s=o?`[rel="stylesheet"]`:``;if(a)for(let n=e.length-1;n>=0;n--){let r=e[n];if(r.href===t&&(!o||r.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${s}`))return;let l=document.createElement(`link`);if(l.rel=o?`stylesheet`:n,o||(l.as=`script`),l.crossOrigin=``,l.href=t,c&&l.setAttribute(`nonce`,c),document.head.appendChild(l),o)return new Promise((e,n)=>{l.addEventListener(`load`,e),l.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function s(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return o.then(t=>{for(let e of t||[])e.status===`rejected`&&s(e.reason);return e().catch(s)})},o={};function s(e,t){o[e]=t}function c(e){window.location.hash=e}function l(){window.history.length>1?window.history.back():c(`/`)}function u(e){let t=document.querySelector(e);function n(){let e=window.location.hash.slice(1)||`/`,n=o[e];if(n){a(async()=>{let{Ads:e}=await import(`./ads-B9GcU-ji.js`);return{Ads:e}},[]).then(({Ads:e})=>e.showInterstitial()),t.innerHTML=``;let e=n();typeof e==`string`?t.innerHTML=e:e instanceof HTMLElement&&t.appendChild(e)}else c(`/`);let r=document.querySelector(`.back-btn`);r&&r.classList.toggle(`visible`,e!==`/`),window.scrollTo(0,0)}window.addEventListener(`hashchange`,n),n()}var d=t({copyToClipboard:()=>h,formatFileSize:()=>g,generateId:()=>_,loadData:()=>p,saveData:()=>f,showToast:()=>m});function f(e,t){try{localStorage.setItem(`lifeadmin_${e}`,JSON.stringify(t))}catch(e){console.warn(`Storage save failed:`,e)}}function p(e,t=null){try{let n=localStorage.getItem(`lifeadmin_${e}`);return n?JSON.parse(n):t}catch(e){return console.warn(`Storage load failed:`,e),t}}function m(e,t=2500){let n=document.querySelector(`.toast`);n||(n=document.createElement(`div`),n.className=`toast`,document.body.appendChild(n)),n.textContent=e,n.classList.add(`show`),setTimeout(()=>n.classList.remove(`show`),t)}async function h(e){try{await navigator.clipboard.writeText(e),m(`Copied to clipboard!`)}catch{let t=document.createElement(`textarea`);t.value=e,t.style.position=`fixed`,t.style.opacity=`0`,document.body.appendChild(t),t.select(),document.execCommand(`copy`),document.body.removeChild(t),m(`Copied to clipboard!`)}}function g(e){return e<1024?e+` B`:e<1048576?(e/1024).toFixed(1)+` KB`:(e/1048576).toFixed(1)+` MB`}function _(){return Date.now().toString(36)+Math.random().toString(36).slice(2,7)}function v(){let e=document.createElement(`header`);e.className=`app-header`;let t=p(`theme`,`dark`)===`dark`;return document.documentElement.setAttribute(`data-theme`,t?`dark`:`light`),e.innerHTML=`
    <div class="header-left">
      <button class="back-btn" id="backBtn" aria-label="Go back">←</button>
      <img src="/logo.png" alt="Life Admin Logo" class="app-logo">
      <span class="app-title">Life Admin</span>
    </div>
    <button class="theme-toggle" id="themeToggle" aria-label="Toggle theme">
      ${t?`☀️`:`🌙`}
    </button>
  `,e.querySelector(`#backBtn`).addEventListener(`click`,l),e.querySelector(`#themeToggle`).addEventListener(`click`,()=>{let t=document.documentElement.getAttribute(`data-theme`)===`dark`?`light`:`dark`;document.documentElement.setAttribute(`data-theme`,t),f(`theme`,t),e.querySelector(`#themeToggle`).textContent=t===`dark`?`☀️`:`🌙`}),e}var y=[{id:`calculator`,name:`Calculator Tools`,desc:`Discounts, EMI, tips & more`,icon:`🧮`,count:14},{id:`text`,name:`Text Tools`,desc:`Summarize, generate & count`,icon:`✍️`,count:14},{id:`file`,name:`File Tools`,desc:`PDF, images & compression`,icon:`📁`,count:9},{id:`study`,name:`Study Tools`,desc:`Focus timer & quick notes`,icon:`🎓`,count:9},{id:`daily`,name:`Daily Tools`,desc:`Convert, generate & pick`,icon:`⚡`,count:14},{id:`health`,name:`Health Tools`,desc:`Fitness & wellness utilities`,icon:`🏥`,count:6}],b=[{name:`Discount Calculator`,path:`/tool/discount`,cat:`calculator`},{name:`EMI Calculator`,path:`/tool/emi`,cat:`calculator`},{name:`Loan Calculator`,path:`/tool/loan`,cat:`calculator`},{name:`Tip Splitter`,path:`/tool/tip-splitter`,cat:`calculator`},{name:`Profit / Loss Calculator`,path:`/tool/profit-loss`,cat:`calculator`},{name:`Age Calculator`,path:`/tool/age`,cat:`calculator`},{name:`GST Calculator`,path:`/tool/gst`,cat:`calculator`},{name:`Percentage Calculator`,path:`/tool/percentage`,cat:`calculator`},{name:`BMI Calculator`,path:`/tool/bmi`,cat:`calculator`},{name:`Fuel Cost Calculator`,path:`/tool/fuel`,cat:`calculator`},{name:`Time Difference Calculator`,path:`/tool/time-diff`,cat:`calculator`},{name:`Salary Calculator`,path:`/tool/salary`,cat:`calculator`},{name:`Savings Calculator`,path:`/tool/savings`,cat:`calculator`},{name:`Speed / Distance Calculator`,path:`/tool/speed`,cat:`calculator`},{name:`Date Difference Calculator`,path:`/tool/date-diff`,cat:`calculator`},{name:`Summarizer`,path:`/tool/summarizer`,cat:`text`},{name:`Caption Generator`,path:`/tool/caption`,cat:`text`},{name:`Bio Generator`,path:`/tool/bio`,cat:`text`},{name:`Word Counter`,path:`/tool/word-counter`,cat:`text`},{name:`Case Converter`,path:`/tool/case-converter`,cat:`text`},{name:`Remove Duplicate Lines`,path:`/tool/duplicates`,cat:`text`},{name:`Text Reverser`,path:`/tool/reverser`,cat:`text`},{name:`Hashtag Generator`,path:`/tool/hashtag`,cat:`text`},{name:`Random Sentence Generator`,path:`/tool/random-sentence`,cat:`text`},{name:`Text Formatter`,path:`/tool/formatter`,cat:`text`},{name:`Username Generator`,path:`/tool/username`,cat:`text`},{name:`Email Template Generator`,path:`/tool/email`,cat:`text`},{name:`Fancy Text Generator`,path:`/tool/fancy-text`,cat:`text`},{name:`Character Remover`,path:`/tool/char-remover`,cat:`text`},{name:`Unit Converter`,path:`/tool/unit-converter`,cat:`daily`},{name:`QR Code Generator`,path:`/tool/qr-generator`,cat:`daily`},{name:`Password Generator`,path:`/tool/password`,cat:`daily`},{name:`Random Picker`,path:`/tool/random-picker`,cat:`daily`},{name:`Stopwatch`,path:`/tool/stopwatch`,cat:`daily`},{name:`Countdown Timer`,path:`/tool/timer`,cat:`daily`},{name:`Decision Wheel`,path:`/tool/wheel`,cat:`daily`},{name:`Dice Roller`,path:`/tool/dice`,cat:`daily`},{name:`Random Number Generator`,path:`/tool/random-num`,cat:`daily`},{name:`Yes / No Picker`,path:`/tool/yes-no`,cat:`daily`},{name:`Coin Flip`,path:`/tool/coin-flip`,cat:`daily`},{name:`Color Picker`,path:`/tool/color-picker`,cat:`daily`},{name:`Brightness Booster`,path:`/tool/brightness`,cat:`daily`},{name:`Sound Level Meter`,path:`/tool/sound-meter`,cat:`daily`},{name:`Strobe Light`,path:`/tool/strobe`,cat:`daily`},{name:`Pomodoro Timer`,path:`/tool/pomodoro`,cat:`study`},{name:`Quick Notes`,path:`/tool/notes`,cat:`study`},{name:`Flashcards Maker`,path:`/tool/flashcards`,cat:`study`},{name:`Study Tracker`,path:`/tool/study-tracker`,cat:`study`},{name:`Habit Tracker`,path:`/tool/habit-tracker`,cat:`study`},{name:`Random Quiz Generator`,path:`/tool/quiz`,cat:`study`},{name:`Countdown Exam Timer`,path:`/tool/exam-timer`,cat:`study`},{name:`Study Checklist`,path:`/tool/checklist`,cat:`study`},{name:`Daily Goal Tracker`,path:`/tool/daily-goal`,cat:`study`},{name:`Water Intake Tracker`,path:`/tool/water-tracker`,cat:`health`},{name:`Step Goal Calculator`,path:`/tool/step-goal`,cat:`health`},{name:`Calorie Estimator`,path:`/tool/calories`,cat:`health`},{name:`Body Fat Calculator`,path:`/tool/body-fat`,cat:`health`},{name:`Ideal Weight Calculator`,path:`/tool/ideal-weight`,cat:`health`},{name:`Workout Rest Timer`,path:`/tool/workout-timer`,cat:`health`},{name:`Image to PDF`,path:`/tool/image-to-pdf`,cat:`file`},{name:`PDF to Images`,path:`/tool/pdf-to-images`,cat:`file`},{name:`Image Compressor`,path:`/tool/image-compressor`,cat:`file`},{name:`Image Resizer`,path:`/tool/image-resizer`,cat:`file`},{name:`Image Cropper`,path:`/tool/image-cropper`,cat:`file`},{name:`Format Converter`,path:`/tool/image-converter`,cat:`file`},{name:`PDF Merger`,path:`/tool/pdf-merger`,cat:`file`},{name:`PDF Splitter`,path:`/tool/pdf-splitter`,cat:`file`},{name:`Image Metadata Viewer`,path:`/tool/exif`,cat:`file`}];function x(){let e=document.createElement(`div`);e.className=`page-content`;let t=new Date().getHours();e.innerHTML=`
    <div class="dashboard-greeting">
      <h1>${t<12?`Good Morning`:t<18?`Good Afternoon`:`Good Evening`} 👋</h1>
      <p>What would you like to do today?</p>
    </div>

    <div class="search-container">
      <div class="search-input-wrapper">
        <span class="search-icon">🔍</span>
        <input type="text" id="toolSearch" class="form-input search-input" placeholder="Search 60+ tools...">
      </div>
    </div>

    <div id="searchResults" class="tools-list hidden mb-lg"></div>

    <div id="categoriesList" class="category-grid mt-lg">
      ${y.map(e=>`
        <div class="category-card" data-id="${e.id}" style="--card-accent: var(--cat-${e.id})">
          <div class="card-icon">${e.icon}</div>
          <div class="card-title">${e.name}</div>
          <div class="card-desc">${e.desc}</div>
          <div class="card-count">${e.count} tools</div>
        </div>
      `).join(``)}
    </div>
  `;let n=e.querySelector(`#toolSearch`),r=e.querySelector(`#searchResults`),i=e.querySelector(`#categoriesList`);return n.addEventListener(`input`,e=>{let t=e.target.value.toLowerCase().trim();if(t.length<2){r.classList.add(`hidden`),i.classList.remove(`hidden`);return}let n=b.filter(e=>e.name.toLowerCase().includes(t));n.length>0?(r.classList.remove(`hidden`),i.classList.add(`hidden`),r.innerHTML=n.map(e=>`
        <div class="tool-card" data-path="${e.path}" style="--tool-accent: var(--cat-${e.cat})">
          <div class="tool-icon">${y.find(t=>t.id===e.cat).icon}</div>
          <div class="tool-info">
            <div class="tool-name">${e.name}</div>
            <div class="tool-desc">${e.cat.charAt(0).toUpperCase()+e.cat.slice(1)}</div>
          </div>
          <div class="tool-arrow">→</div>
        </div>
      `).join(``),r.querySelectorAll(`.tool-card`).forEach(e=>{e.addEventListener(`click`,()=>c(e.dataset.path))})):(r.classList.remove(`hidden`),i.classList.add(`hidden`),r.innerHTML=`<p class="text-center text-muted p-md">No tools found matching your search.</p>`)}),e.querySelectorAll(`.category-card`).forEach(e=>{e.addEventListener(`click`,()=>{c(`/category/${e.dataset.id}`)})}),e}var ee={calculator:{title:`Calculator Tools`,desc:`Crunch numbers quickly`,color:`var(--cat-calculator)`,tools:[{id:`discount`,name:`Discount Calculator`,desc:`Calculate final price after discount`,icon:`🏷️`},{id:`emi`,name:`EMI Calculator`,desc:`Monthly loan payments`,icon:`🏦`},{id:`loan`,name:`Loan Calculator`,desc:`Simple loan breakdown`,icon:`🏦`},{id:`tip-splitter`,name:`Tip Splitter`,desc:`Split bills among friends`,icon:`🍽️`},{id:`profit-loss`,name:`Profit / Loss Calculator`,desc:`Know your earnings`,icon:`📊`},{id:`age`,name:`Age Calculator`,desc:`Calculate age with precision`,icon:`🎂`},{id:`gst`,name:`GST Calculator`,desc:`Add or remove GST`,icon:`📠`},{id:`percentage`,name:`Percentage Calculator`,desc:`Multi-purpose % solver`,icon:`🔢`},{id:`bmi`,name:`BMI Calculator`,desc:`Check your health index`,icon:`⚖️`},{id:`fuel`,name:`Fuel Cost Calculator`,desc:`Plan your trip expenses`,icon:`⛽`},{id:`time-diff`,name:`Time Difference`,desc:`Calc diff between times`,icon:`⏳`},{id:`salary`,name:`Salary Calculator`,desc:`Monthly/Weekly breakdown`,icon:`💸`},{id:`savings`,name:`Savings Calculator`,desc:`Compound interest solver`,icon:`💰`},{id:`speed`,name:`Speed Calculator`,desc:`Solve S/D/T problems`,icon:`🏎️`},{id:`date-diff`,name:`Date Difference`,desc:`Days between dates`,icon:`📅`}]},text:{title:`Text Tools`,desc:`Work with text effortlessly`,color:`var(--cat-text)`,tools:[{id:`summarizer`,name:`Text Summarizer`,desc:`Get a summary of any text`,icon:`📄`},{id:`caption`,name:`Caption Generator`,desc:`Random social media captions`,icon:`💬`},{id:`bio`,name:`Bio Generator`,desc:`Generate profile bios`,icon:`👤`},{id:`word-counter`,name:`Word Counter`,desc:`Count words, chars & sentences`,icon:`🔢`},{id:`case-converter`,name:`Case Converter`,desc:`UPPER, lower, Title Case`,icon:`Aa`},{id:`duplicates`,name:`Remove Duplicates`,desc:`Clean up line lists`,icon:`👯`},{id:`reverser`,name:`Text Reverser`,desc:`Mirror your words`,icon:`🔄`},{id:`hashtag`,name:`Hashtag Generator`,desc:`Social media growth tags`,icon:`#️⃣`},{id:`random-sentence`,name:`Sentence Generator`,desc:`Creative writing prompts`,icon:`🎲`},{id:`formatter`,name:`Text Formatter`,desc:`Clean white-spaces & tabs`,icon:`🧹`},{id:`username`,name:`Username Generator`,desc:`Catchy handles for apps`,icon:`🆔`},{id:`email`,name:`Email Templates`,desc:`Professional email presets`,icon:`📧`},{id:`fancy-text`,name:`Fancy Text`,desc:`Unicode font converter`,icon:`✨`},{id:`char-remover`,name:`Char Remover`,desc:`Strip specific symbols`,icon:`✂️`}]},file:{title:`File Tools`,desc:`Handle files on the go`,color:`var(--cat-file)`,tools:[{id:`image-to-pdf`,name:`Image to PDF`,desc:`Convert images into a PDF`,icon:`🖼️`},{id:`pdf-to-images`,name:`PDF to Images`,desc:`Extract PDF pages as images`,icon:`📑`},{id:`image-compressor`,name:`Image Compressor`,desc:`Reduce image file size`,icon:`📦`},{id:`image-resizer`,name:`Image Resizer`,desc:`Change image dimensions`,icon:`📐`},{id:`image-cropper`,name:`Image Cropper`,desc:`Quick square crop`,icon:`✂️`},{id:`image-converter`,name:`Format Converter`,desc:`PNG, JPG, WebP`,icon:`🔄`},{id:`pdf-merger`,name:`PDF Merger`,desc:`Combine multiple PDFs`,icon:`🔗`},{id:`pdf-splitter`,name:`PDF Splitter`,desc:`Extract pages from PDF`,icon:`🔪`},{id:`exif`,name:`Metadata Viewer`,desc:`Read image EXIF info`,icon:`ℹ️`}]},study:{title:`Study Tools`,desc:`Focus and organize`,color:`var(--cat-study)`,tools:[{id:`pomodoro`,name:`Pomodoro Timer`,desc:`25 min focus + 5 min break`,icon:`⏱️`},{id:`notes`,name:`Quick Notes`,desc:`Write and save notes locally`,icon:`📒`},{id:`flashcards`,name:`Flashcards Maker`,desc:`Study with digital cards`,icon:`🎴`},{id:`study-tracker`,name:`Study Tracker`,desc:`Log your session hours`,icon:`📈`},{id:`habit-tracker`,name:`Habit Tracker`,desc:`Build daily discipline`,icon:`✅`},{id:`quiz`,name:`Quiz Generator`,desc:`Test your knowledge`,icon:`❓`},{id:`exam-timer`,name:`Exam Timer`,desc:`Timed practice sessions`,icon:`⌛`},{id:`checklist`,name:`Study Checklist`,desc:`Organize your tasks`,icon:`📝`},{id:`daily-goal`,name:`Daily Goal`,desc:`Focus on one big task`,icon:`🎯`}]},daily:{title:`Daily Tools`,desc:`Everyday utilities`,color:`var(--cat-daily)`,tools:[{id:`unit-converter`,name:`Unit Converter`,desc:`Length, weight, temp & more`,icon:`📐`},{id:`qr-generator`,name:`QR Code Generator`,desc:`Generate QR from text/link`,icon:`📱`},{id:`password`,name:`Password Generator`,desc:`Create strong passwords`,icon:`🔐`},{id:`random-picker`,name:`Random Picker`,desc:`Pick randomly from options`,icon:`🎲`},{id:`stopwatch`,name:`Stopwatch`,desc:`Precise lap timing`,icon:`⏱️`},{id:`timer`,name:`Countdown Timer`,desc:`Standard countdown`,icon:`⏲️`},{id:`wheel`,name:`Decision Wheel`,desc:`Spin to pick options`,icon:`🎡`},{id:`dice`,name:`Dice Roller`,desc:`Roll 1, 2, or 4 dice`,icon:`🎲`},{id:`random-num`,name:`Random Number`,desc:`Pick from range`,icon:`🔢`},{id:`yes-no`,name:`Yes / No Picker`,desc:`Quick choice helper`,icon:`🤔`},{id:`coin-flip`,name:`Coin Flip`,desc:`Heads or Tails`,icon:`🪙`},{id:`color-picker`,name:`Color Picker`,desc:`HEX & RGB codes`,icon:`🎨`},{id:`brightness`,name:`Screen Light`,desc:`Max bright flashlight`,icon:`💡`},{id:`sound-meter`,name:`Sound Meter`,desc:`Check noise levels`,icon:`🎙️`},{id:`strobe`,name:`Strobe Light`,desc:`Flashing light effect`,icon:`🚨`}]},health:{title:`Health Tools`,desc:`Fitness and wellness`,color:`var(--cat-health)`,tools:[{id:`water-tracker`,name:`Water Tracker`,desc:`Daily intake progress`,icon:`💧`},{id:`step-goal`,name:`Step Goal Calc`,desc:`Calculate daily steps`,icon:`🚶`},{id:`calories`,name:`Calorie Estimator`,desc:`Daily TDEE calculator`,icon:`🍱`},{id:`body-fat`,name:`Body Fat Calc`,desc:`US Navy method estimator`,icon:`💪`},{id:`ideal-weight`,name:`Ideal Weight`,desc:`Health range estimator`,icon:`⚖️`},{id:`workout-timer`,name:`Workout Timer`,desc:`Rest interval helper`,icon:`🏋️`}]}};function te(e){let t=ee[e];if(!t)return`<div class="page-content tool-page"><div class="result-box"><div class="result-label">Error</div><div class="result-value">Category Not Found</div><button class="btn btn-primary mt-lg" onclick="location.hash='#/'">Go Dashboard</button></div></div>`;let n=document.createElement(`div`);return n.className=`page-content`,n.innerHTML=`
    <div class="category-header">
      <h2>${t.title}</h2>
      <p>${t.desc}</p>
    </div>
    <div class="tools-list">
      ${t.tools.map(e=>`
        <div class="tool-card" data-tool="${e.id}" style="--tool-accent: ${t.color}">
          <div class="tool-icon">${e.icon}</div>
          <div class="tool-info">
            <div class="tool-name">${e.name}</div>
            <div class="tool-desc">${e.desc}</div>
          </div>
          <div class="tool-arrow">›</div>
        </div>
      `).join(``)}
    </div>
  `,n.querySelectorAll(`.tool-card`).forEach(e=>{e.addEventListener(`click`,()=>{c(`/tool/${e.dataset.tool}`)})}),n}function ne(){let e=document.createElement(`div`);return e.className=`page-content tool-page`,e.innerHTML=`
    <h2>🏷️ Discount Calculator</h2>
    <div class="form-group">
      <label for="discountPrice">Original Price</label>
      <input type="number" class="form-input" id="discountPrice" placeholder="e.g. 1500" min="0" step="0.01" />
    </div>
    <div class="form-group">
      <label for="discountPercent">Discount (%)</label>
      <input type="number" class="form-input" id="discountPercent" placeholder="e.g. 20" min="0" max="100" step="0.1" />
    </div>
    <button class="btn btn-primary" id="discountCalcBtn">Calculate</button>
    <div id="discountResult"></div>
  `,e.querySelector(`#discountCalcBtn`).addEventListener(`click`,()=>{let t=parseFloat(e.querySelector(`#discountPrice`).value),n=parseFloat(e.querySelector(`#discountPercent`).value);if(isNaN(t)||isNaN(n)||t<0||n<0||n>100){e.querySelector(`#discountResult`).innerHTML=`
        <div class="result-box">
          <div class="result-label">⚠️ Error</div>
          <div class="result-detail">Please enter valid price and discount percentage (0-100).</div>
        </div>
      `;return}let r=t*n/100,i=t-r;e.querySelector(`#discountResult`).innerHTML=`
      <div class="result-box">
        <div class="result-label">Final Price</div>
        <div class="result-value">₹${i.toFixed(2)}</div>
        <div class="result-detail">You save ₹${r.toFixed(2)} (${n}% off)</div>
      </div>
    `}),e}function re(){let e=document.createElement(`div`);return e.className=`page-content tool-page`,e.innerHTML=`
    <h2>🏦 Loan EMI Calculator</h2>
    <div class="form-group">
      <label for="emiPrincipal">Loan Amount (₹)</label>
      <input type="number" class="form-input" id="emiPrincipal" placeholder="e.g. 500000" min="0" step="1000" />
    </div>
    <div class="form-row">
      <div class="form-group">
        <label for="emiRate">Interest Rate (% per year)</label>
        <input type="number" class="form-input" id="emiRate" placeholder="e.g. 8.5" min="0" step="0.1" />
      </div>
      <div class="form-group">
        <label for="emiTenure">Duration (months)</label>
        <input type="number" class="form-input" id="emiTenure" placeholder="e.g. 60" min="1" step="1" />
      </div>
    </div>
    <button class="btn btn-primary" id="emiCalcBtn">Calculate EMI</button>
    <div id="emiResult"></div>
  `,e.querySelector(`#emiCalcBtn`).addEventListener(`click`,()=>{let t=parseFloat(e.querySelector(`#emiPrincipal`).value),n=parseFloat(e.querySelector(`#emiRate`).value),r=parseInt(e.querySelector(`#emiTenure`).value);if(isNaN(t)||isNaN(n)||isNaN(r)||t<=0||n<0||r<=0){e.querySelector(`#emiResult`).innerHTML=`
        <div class="result-box">
          <div class="result-label">⚠️ Error</div>
          <div class="result-detail">Please enter valid loan amount, interest rate, and duration.</div>
        </div>
      `;return}let i,a,o;if(n===0)i=t/r,a=t,o=0;else{let e=n/12/100,s=(1+e)**+r;i=t*e*s/(s-1),a=i*r,o=a-t}e.querySelector(`#emiResult`).innerHTML=`
      <div class="result-box">
        <div class="result-label">Monthly EMI</div>
        <div class="result-value">₹${i.toFixed(2)}</div>
      </div>
      <div class="result-grid">
        <div class="result-item">
          <div class="result-label">Total Payment</div>
          <div class="result-value">₹${a.toFixed(0)}</div>
        </div>
        <div class="result-item">
          <div class="result-label">Total Interest</div>
          <div class="result-value">₹${o.toFixed(0)}</div>
        </div>
      </div>
    `}),e}function ie(){let e=document.createElement(`div`);return e.className=`page-content tool-page`,e.innerHTML=`
    <h2>🍽️ Tip Splitter</h2>
    <div class="form-group">
      <label for="tipBill">Bill Amount</label>
      <input type="number" class="form-input" id="tipBill" placeholder="e.g. 2400" min="0" step="0.01" />
    </div>
    <div class="form-row">
      <div class="form-group">
        <label for="tipPercent">Tip (%)</label>
        <input type="number" class="form-input" id="tipPercent" placeholder="e.g. 10" min="0" max="100" value="0" step="1" />
      </div>
      <div class="form-group">
        <label for="tipPeople">Number of People</label>
        <input type="number" class="form-input" id="tipPeople" placeholder="e.g. 4" min="1" step="1" />
      </div>
    </div>
    <button class="btn btn-primary" id="tipCalcBtn">Split Bill</button>
    <div id="tipResult"></div>
  `,e.querySelector(`#tipCalcBtn`).addEventListener(`click`,()=>{let t=parseFloat(e.querySelector(`#tipBill`).value),n=parseFloat(e.querySelector(`#tipPercent`).value)||0,r=parseInt(e.querySelector(`#tipPeople`).value);if(isNaN(t)||isNaN(r)||t<=0||r<=0){e.querySelector(`#tipResult`).innerHTML=`
        <div class="result-box">
          <div class="result-label">⚠️ Error</div>
          <div class="result-detail">Please enter valid bill amount and number of people.</div>
        </div>
      `;return}let i=t*n/100,a=t+i,o=a/r;e.querySelector(`#tipResult`).innerHTML=`
      <div class="result-box">
        <div class="result-label">Per Person</div>
        <div class="result-value">₹${o.toFixed(2)}</div>
      </div>
      <div class="result-grid">
        <div class="result-item">
          <div class="result-label">Tip Amount</div>
          <div class="result-value">₹${i.toFixed(2)}</div>
        </div>
        <div class="result-item">
          <div class="result-label">Total Bill</div>
          <div class="result-value">₹${a.toFixed(2)}</div>
        </div>
      </div>
    `}),e}function ae(){let e=document.createElement(`div`);return e.className=`page-content tool-page`,e.innerHTML=`
    <h2>📊 Profit / Loss Calculator</h2>
    <div class="form-group">
      <label for="plCost">Cost Price</label>
      <input type="number" class="form-input" id="plCost" placeholder="e.g. 500" min="0" step="0.01" />
    </div>
    <div class="form-group">
      <label for="plSell">Selling Price</label>
      <input type="number" class="form-input" id="plSell" placeholder="e.g. 650" min="0" step="0.01" />
    </div>
    <button class="btn btn-primary" id="plCalcBtn">Calculate</button>
    <div id="plResult"></div>
  `,e.querySelector(`#plCalcBtn`).addEventListener(`click`,()=>{let t=parseFloat(e.querySelector(`#plCost`).value),n=parseFloat(e.querySelector(`#plSell`).value);if(isNaN(t)||isNaN(n)||t<0||n<0){e.querySelector(`#plResult`).innerHTML=`
        <div class="result-box">
          <div class="result-label">⚠️ Error</div>
          <div class="result-detail">Please enter valid cost and selling prices.</div>
        </div>
      `;return}let r=n-t,i=t>0?Math.abs(r/t*100):0,a=r>=0;e.querySelector(`#plResult`).innerHTML=`
      <div class="result-box">
        <div class="result-label">${a?`✅ Profit`:`❌ Loss`}</div>
        <div class="result-value" style="color: ${a?`var(--color-success)`:`var(--color-danger)`}">
          ₹${Math.abs(r).toFixed(2)}
        </div>
        <div class="result-detail">${i.toFixed(2)}% ${a?`profit`:`loss`} on cost price</div>
      </div>
      <div class="result-grid">
        <div class="result-item">
          <div class="result-label">Cost Price</div>
          <div class="result-value">₹${t.toFixed(2)}</div>
        </div>
        <div class="result-item">
          <div class="result-label">Selling Price</div>
          <div class="result-value">₹${n.toFixed(2)}</div>
        </div>
      </div>
    `}),e}function oe(){let e=document.createElement(`div`);return e.className=`page-content tool-page`,e.innerHTML=`
    <h2>🎂 Age Calculator</h2>
    <div class="form-group">
      <label>Date of Birth</label>
      <input type="date" id="dob" class="form-input">
    </div>
    <div class="form-group">
      <label>Today's Date</label>
      <input type="date" id="targetDate" class="form-input" value="${new Date().toISOString().split(`T`)[0]}">
    </div>
    <button class="btn btn-primary" id="calcAge">🎂 Calculate Precise Age</button>
    <div id="ageResult"></div>
  `,e.querySelector(`#calcAge`).onclick=()=>{let t=new Date(e.querySelector(`#dob`).value),n=new Date(e.querySelector(`#targetDate`).value);if(isNaN(t.getTime())){alert(`Please select a valid date of birth`);return}let r=n.getFullYear()-t.getFullYear(),i=n.getMonth()-t.getMonth(),a=n.getDate()-t.getDate();if(a<0){i--;let e=new Date(n.getFullYear(),n.getMonth(),0);a+=e.getDate()}i<0&&(r--,i+=12);let o=Math.floor((n-t)/(1e3*60*60*24)),s=new Date(n.getFullYear(),t.getMonth(),t.getDate());s<n&&s.setFullYear(n.getFullYear()+1);let c=Math.floor((s-n)/(1e3*60*60*24));e.querySelector(`#ageResult`).innerHTML=`
      <div class="result-box">
        <div class="result-label">Current Age</div>
        <div class="result-value">${r} Years, ${i} Months, ${a} Days</div>
      </div>
      <div class="result-grid">
        <div class="result-item">
          <div class="result-label">Total Days</div>
          <div class="result-value">${o.toLocaleString()}</div>
        </div>
        <div class="result-item">
          <div class="result-label">Next Birthday</div>
          <div class="result-value">${c} Days</div>
        </div>
      </div>
    `},e}function S(){let e=document.createElement(`div`);e.className=`page-content tool-page`,e.innerHTML=`
    <h2>🧾 GST Calculator</h2>
    <div class="form-group">
      <label>Amount (Price)</label>
      <input type="number" id="gstAmount" class="form-input" value="1000">
    </div>
    <div class="form-group">
      <label>GST Rate (%)</label>
      <select id="gstRate" class="form-select">
        <option value="5">5%</option>
        <option value="12">12%</option>
        <option value="18" selected>18%</option>
        <option value="28">28%</option>
      </select>
    </div>
    <div class="btn-row">
      <button class="btn btn-primary" id="addGST">➕ Add GST</button>
      <button class="btn btn-secondary" id="removeGST">➖ Remove GST</button>
    </div>
    <div id="gstResult"></div>
  `;let t=t=>{let n=parseFloat(e.querySelector(`#gstAmount`).value),r=parseFloat(e.querySelector(`#gstRate`).value),i,a,o;t?(a=n*r/100,i=n,o=n+a):(o=n,i=n/(1+r/100),a=n-i),e.querySelector(`#gstResult`).innerHTML=`
      <div class="result-box">
        <div class="result-label">${t?`Total (Inc. GST)`:`Net (Excl. GST)`}</div>
        <div class="result-value">₹${(t?o:i).toFixed(2)}</div>
      </div>
      <div class="result-grid">
        <div class="result-item">
          <div class="result-label">GST Amount</div>
          <div class="result-value">₹${a.toFixed(2)}</div>
        </div>
        <div class="result-item"> net.toFixed(2) : amount.toFixed(2) }</div>
          <div class="result-label">Original Price</div>
          <div class="result-value">₹${(t?i:o).toFixed(2)}</div>
        </div>
      </div>
    `};return e.querySelector(`#addGST`).onclick=()=>t(!0),e.querySelector(`#removeGST`).onclick=()=>t(!1),e}function C(){let e=document.createElement(`div`);return e.className=`page-content tool-page`,e.innerHTML=`
    <h2>📊 Percentage Calculator</h2>
    
    <div class="note-card mb-md">
      <div class="note-title">What is X% of Y?</div>
      <div class="form-row mt-sm">
        <input type="number" id="p1_x" class="form-input" placeholder="X">
        <input type="number" id="p1_y" class="form-input" placeholder="Y">
      </div>
      <button class="btn btn-sm btn-primary mt-sm" id="calcP1">Calculate</button>
      <div id="resP1" class="mt-sm font-bold text-primary"></div>
    </div>

    <div class="note-card mb-md">
      <div class="note-title">X is what % of Y?</div>
      <div class="form-row mt-sm">
        <input type="number" id="p2_x" class="form-input" placeholder="X">
        <input type="number" id="p2_y" class="form-input" placeholder="Y">
      </div>
      <button class="btn btn-sm btn-primary mt-sm" id="calcP2">Calculate</button>
      <div id="resP2" class="mt-sm font-bold text-primary"></div>
    </div>

    <div class="note-card">
      <div class="note-title">% Increase/Decrease (X to Y)</div>
      <div class="form-row mt-sm">
        <input type="number" id="p3_x" class="form-input" placeholder="From">
        <input type="number" id="p3_y" class="form-input" placeholder="To">
      </div>
      <button class="btn btn-sm btn-primary mt-sm" id="calcP3">Calculate</button>
      <div id="resP3" class="mt-sm font-bold text-primary"></div>
    </div>
  `,e.querySelector(`#calcP1`).onclick=()=>{let t=parseFloat(e.querySelector(`#p1_x`).value),n=parseFloat(e.querySelector(`#p1_y`).value),r=t/100*n;e.querySelector(`#resP1`).textContent=`Result: ${r}`},e.querySelector(`#calcP2`).onclick=()=>{let t=parseFloat(e.querySelector(`#p2_x`).value)/parseFloat(e.querySelector(`#p2_y`).value)*100;e.querySelector(`#resP2`).textContent=`Result: ${t.toFixed(2)}%`},e.querySelector(`#calcP3`).onclick=()=>{let t=parseFloat(e.querySelector(`#p3_x`).value),n=(parseFloat(e.querySelector(`#p3_y`).value)-t)/t*100;e.querySelector(`#resP3`).textContent=`Result: ${n>0?`+`:``}${n.toFixed(2)}%`},e}function w(){let e=document.createElement(`div`);return e.className=`page-content tool-page`,e.innerHTML=`
    <h2>⚖️ BMI Calculator</h2>
    <div class="form-group">
      <label>Weight (kg)</label>
      <input type="number" id="bmiWeight" class="form-input" value="70">
    </div>
    <div class="form-group">
      <label>Height (cm)</label>
      <input type="number" id="bmiHeight" class="form-input" value="175">
    </div>
    <button class="btn btn-primary" id="calcBMI">⚖️ Calculate BMI</button>
    <div id="bmiResult"></div>
  `,e.querySelector(`#calcBMI`).onclick=()=>{let t=parseFloat(e.querySelector(`#bmiWeight`).value),n=parseFloat(e.querySelector(`#bmiHeight`).value)/100;if(n===0)return;let r=t/(n*n),i=Math.round(r*10)/10,a,o;i<18.5?(a=`Underweight`,o=`#3498db`):i<25?(a=`Normal`,o=`#2ecc71`):i<30?(a=`Overweight`,o=`#f1c40f`):(a=`Obese`,o=`#e74c3c`),e.querySelector(`#bmiResult`).innerHTML=`
      <div class="result-box">
        <div class="result-label">Your BMI</div>
        <div class="result-value" style="color: ${o}">${i}</div>
        <div class="result-detail">Category: <strong>${a}</strong></div>
      </div>
      <div class="mt-lg">
        <div class="notes-list">
          <div class="note-card" style="border-left: 5px solid #3498db">
            <div class="note-title">Underweight</div> < 18.5
          </div>
          <div class="note-card" style="border-left: 5px solid #2ecc71">
            <div class="note-title">Normal</div> 18.5 – 25
          </div>
          <div class="note-card" style="border-left: 5px solid #f1c40f">
            <div class="note-title">Overweight</div> 25 – 30
          </div>
          <div class="note-card" style="border-left: 5px solid #e74c3c">
            <div class="note-title">Obese</div> > 30
          </div>
        </div>
      </div>
    `},e}function T(){let e=document.createElement(`div`);return e.className=`page-content tool-page`,e.innerHTML=`
    <h2>⛽ Fuel Cost Calculator</h2>
    <div class="form-group">
      <label>Distance (km)</label>
      <input type="number" id="fuelDist" class="form-input" value="100">
    </div>
    <div class="form-group">
      <label>Fuel Consumption (km per Litre)</label>
      <input type="number" id="fuelEf" class="form-input" value="15">
    </div>
    <div class="form-group">
      <label>Fuel Price (per Litre)</label>
      <input type="number" id="fuelPrice" class="form-input" value="100">
    </div>
    <button class="btn btn-primary" id="calcFuel">⛽ Calculate Cost</button>
    <div id="fuelResult"></div>
  `,e.querySelector(`#calcFuel`).onclick=()=>{let t=parseFloat(e.querySelector(`#fuelDist`).value),n=parseFloat(e.querySelector(`#fuelEf`).value),r=parseFloat(e.querySelector(`#fuelPrice`).value);if(n===0)return;let i=t/n,a=i*r;e.querySelector(`#fuelResult`).innerHTML=`
      <div class="result-box">
        <div class="result-label">Estimated Fuel Cost</div>
        <div class="result-value">₹${a.toFixed(2)}</div>
      </div>
      <div class="result-grid">
        <div class="result-item">
          <div class="result-label">Fuel Required</div>
          <div class="result-value">${i.toFixed(2)} L</div>
        </div>
        <div class="result-item">
          <div class="result-label">Cost per KM</div>
          <div class="result-value">₹${(a/t).toFixed(2)}</div>
        </div>
      </div>
    `},e}function E(){let e=document.createElement(`div`);return e.className=`page-content tool-page`,e.innerHTML=`
    <h2>⏱️ Time Difference Calculator</h2>
    <div class="form-group">
      <label>Start Time</label>
      <input type="time" id="startTime" class="form-input" value="09:00">
    </div>
    <div class="form-group">
      <label>End Time</label>
      <input type="time" id="endTime" class="form-input" value="17:00">
    </div>
    <button class="btn btn-primary" id="calcTimeDiff">⏱️ Calculate Difference</button>
    <div id="timeDiffResult"></div>

    <div class="mt-xl">
      <h3>Timestamp Difference</h3>
      <div class="form-group">
        <label>Start Date & Time</label>
        <input type="datetime-local" id="startDT" class="form-input">
      </div>
      <div class="form-group">
        <label>End Date & Time</label>
        <input type="datetime-local" id="endDT" class="form-input">
      </div>
      <button class="btn btn-secondary" id="calcDTDiff">📅 Calculate Full Duration</button>
      <div id="dtDiffResult"></div>
    </div>
  `,e.querySelector(`#calcTimeDiff`).onclick=()=>{let t=e.querySelector(`#startTime`).value,n=e.querySelector(`#endTime`).value,[r,i]=t.split(`:`).map(Number),[a,o]=n.split(`:`).map(Number),s=a*60+o-(r*60+i);s<0&&(s+=1440);let c=Math.floor(s/60),l=s%60;e.querySelector(`#timeDiffResult`).innerHTML=`
      <div class="result-box">
        <div class="result-label">Duration</div>
        <div class="result-value">${c}h ${l}m</div>
        <div class="result-detail">Total: ${s} minutes</div>
      </div>
    `},e.querySelector(`#calcDTDiff`).onclick=()=>{let t=new Date(e.querySelector(`#startDT`).value),n=new Date(e.querySelector(`#endDT`).value);if(isNaN(t)||isNaN(n))return;let r=n-t,i=Math.abs(Math.floor(r/1e3)),a=Math.floor(i/86400),o=Math.floor(i%86400/3600),s=Math.floor(i%3600/60);e.querySelector(`#dtDiffResult`).innerHTML=`
      <div class="result-box">
        <div class="result-label">Duration</div>
        <div class="result-value">${a}d ${o}h ${s}m</div>
        <div class="result-detail">Total: ${Math.floor(i/60).toLocaleString()} minutes</div>
      </div>
    `},e}function D(){let e=document.createElement(`div`);return e.className=`page-content tool-page`,e.innerHTML=`
    <h2>💰 Salary Calculator</h2>
    <div class="form-group">
      <label>Annual Salary (Gross)</label>
      <input type="number" id="annualSalary" class="form-input" value="1200000">
    </div>
    <div class="form-group">
      <label>Working Days per Week</label>
      <select id="workDays" class="form-select">
        <option value="5" selected>5 Days</option>
        <option value="6">6 Days</option>
        <option value="7">7 Days</option>
      </select>
    </div>
    <button class="btn btn-primary" id="calcSalary">💰 Calculate Breakdown</button>
    <div id="salaryResult"></div>
  `,e.querySelector(`#calcSalary`).onclick=()=>{let t=parseFloat(e.querySelector(`#annualSalary`).value),n=parseInt(e.querySelector(`#workDays`).value),r=t/12,i=t/52,a=i/n,o=a/8;e.querySelector(`#salaryResult`).innerHTML=`
      <div class="result-box">
        <div class="result-label">Monthly Salary</div>
        <div class="result-value">₹${Math.round(r).toLocaleString()}</div>
      </div>
      <div class="result-grid">
        <div class="result-item">
          <div class="result-label">Weekly</div>
          <div class="result-value">₹${Math.round(i).toLocaleString()}</div>
        </div>
        <div class="result-item">
          <div class="result-label">Daily</div>
          <div class="result-value">₹${Math.round(a).toLocaleString()}</div>
        </div>
        <div class="result-item">
          <div class="result-label">Hourly (8h)</div>
          <div class="result-value">₹${Math.round(o).toLocaleString()}</div>
        </div>
        <div class="result-item">
          <div class="result-label">Quarterly</div>
          <div class="result-value">₹${Math.round(t/4).toLocaleString()}</div>
        </div>
      </div>
    `},e}function O(){let e=document.createElement(`div`);return e.className=`page-content tool-page`,e.innerHTML=`
    <h2>🏦 Savings Calculator</h2>
    <div class="form-group">
      <label>Initial Deposit</label>
      <input type="number" id="savInitial" class="form-input" value="10000">
    </div>
    <div class="form-group">
      <label>Monthly Contribution</label>
      <input type="number" id="savMonthly" class="form-input" value="5000">
    </div>
    <div class="form-row">
      <div class="form-group">
        <label>Interest Rate (Annual %)</label>
        <input type="number" id="savRate" class="form-input" value="8">
      </div>
      <div class="form-group">
        <label>Duration (Years)</label>
        <input type="number" id="savYears" class="form-input" value="5">
      </div>
    </div>
    <button class="btn btn-primary" id="calcSavings">🏦 Calculate Growth</button>
    <div id="savingsResult"></div>
  `,e.querySelector(`#calcSavings`).onclick=()=>{let t=parseFloat(e.querySelector(`#savInitial`).value),n=parseFloat(e.querySelector(`#savMonthly`).value),r=parseFloat(e.querySelector(`#savRate`).value)/100/12,i=parseFloat(e.querySelector(`#savYears`).value)*12,a=t*(1+r)**+i+n*(((1+r)**+i-1)/r),o=t+n*i,s=a-o;e.querySelector(`#savingsResult`).innerHTML=`
      <div class="result-box">
        <div class="result-label">Estimated Total Value</div>
        <div class="result-value">₹${Math.round(a).toLocaleString()}</div>
      </div>
      <div class="result-grid">
        <div class="result-item">
          <div class="result-label">Total Invested</div>
          <div class="result-value">₹${Math.round(o).toLocaleString()}</div>
        </div>
        <div class="result-item">
          <div class="result-label">Total Interest</div>
          <div class="result-value">₹${Math.round(s).toLocaleString()}</div>
        </div>
      </div>
      <div class="progress-bar mt-md" style="height: 10px">
        <div class="progress-fill" style="width: ${(o/a*100).toFixed(1)}%; background: var(--color-primary)"></div>
        <div class="progress-fill" style="width: ${(s/a*100).toFixed(1)}%; background: var(--color-accent); position: relative; left: ${(o/a*100).toFixed(1)}%"></div>
      </div>
      <p class="text-xs text-muted mt-sm text-center">
        Purple: Principal | Teal: Interest Earned
      </p>
    `},e}function k(){let e=document.createElement(`div`);e.className=`page-content tool-page`,e.innerHTML=`
    <h2>🚗 Speed & Distance Calculator</h2>
    <div class="form-group">
      <label>I want to solve for:</label>
      <select id="solveFor" class="form-select">
        <option value="d">Distance (How far?)</option>
        <option value="v" selected>Speed (How fast?)</option>
        <option value="t">Time (How long?)</option>
      </select>
    </div>

    <div id="speedInputs" class="mt-lg"></div>
    <button class="btn btn-primary mt-md" id="calcSpeed">🚗 Calculate</button>
    <div id="speedResult"></div>
  `;let t=e.querySelector(`#speedInputs`),n=e.querySelector(`#solveFor`),r=()=>{let e=n.value;e===`d`?t.innerHTML=`
        <div class="form-group"><label>Speed (km/h)</label><input type="number" id="val1" class="form-input" value="60"></div>
        <div class="form-group"><label>Time (hours)</label><input type="number" id="val2" class="form-input" value="2"></div>
      `:e===`v`?t.innerHTML=`
        <div class="form-group"><label>Distance (km)</label><input type="number" id="val1" class="form-input" value="120"></div>
        <div class="form-group"><label>Time (hours)</label><input type="number" id="val2" class="form-input" value="2"></div>
      `:t.innerHTML=`
        <div class="form-group"><label>Distance (km)</label><input type="number" id="val1" class="form-input" value="120"></div>
        <div class="form-group"><label>Speed (km/h)</label><input type="number" id="val2" class="form-input" value="60"></div>
      `};return n.onchange=r,r(),e.querySelector(`#calcSpeed`).onclick=()=>{let t=n.value,r=parseFloat(e.querySelector(`#val1`).value),i=parseFloat(e.querySelector(`#val2`).value),a,o,s;t===`d`?(a=r*i,o=`Distance`,s=`km`):t===`v`?(a=r/i,o=`Average Speed`,s=`km/h`):(a=r/i,o=`Time Required`,s=`hours`),e.querySelector(`#speedResult`).innerHTML=`
      <div class="result-box">
        <div class="result-label">${o}</div>
        <div class="result-value">${a.toFixed(2)} ${s}</div>
      </div>
    `},e}function A(){let e=document.createElement(`div`);return e.className=`page-content tool-page`,e.innerHTML=`
    <h2>📅 Date Difference Calculator</h2>
    <div class="form-group">
      <label>State Date</label>
      <input type="date" id="date1" class="form-input" value="${new Date().toISOString().split(`T`)[0]}">
    </div>
    <div class="form-group">
      <label>End Date</label>
      <input type="date" id="date2" class="form-input">
    </div>
    <button class="btn btn-primary" id="calcDateDiff">📅 Calculate Days</button>
    <div id="dateDiffResult"></div>

    <div class="mt-xl">
      <h3>Add/Subtract Days</h3>
      <div class="form-group">
        <label>Start From</label>
        <input type="date" id="addBase" class="form-input" value="${new Date().toISOString().split(`T`)[0]}">
      </div>
      <div class="form-group">
        <label>Days to Add (+/-)</label>
        <input type="number" id="addCount" class="form-input" value="30">
      </div>
      <button class="btn btn-secondary" id="calcDateAdd">🗓️ Find New Date</button>
      <div id="dateAddResult"></div>
    </div>
  `,e.querySelector(`#calcDateDiff`).onclick=()=>{let t=new Date(e.querySelector(`#date1`).value),n=new Date(e.querySelector(`#date2`).value);if(isNaN(t)||isNaN(n))return;let r=Math.abs(n-t),i=Math.floor(r/(1e3*60*60*24)),a=n.getFullYear()-t.getFullYear(),o=n.getMonth()-t.getMonth();(o<0||o===0&&n.getDate()<t.getDate())&&a--,e.querySelector(`#dateDiffResult`).innerHTML=`
      <div class="result-box">
        <div class="result-label">Difference</div>
        <div class="result-value">${i.toLocaleString()} Days</div>
        <div class="result-detail">Approx. ${a} years, ${(i/30.4).toFixed(1)} months</div>
      </div>
    `},e.querySelector(`#calcDateAdd`).onclick=()=>{let t=new Date(e.querySelector(`#addBase`).value),n=parseInt(e.querySelector(`#addCount`).value);if(isNaN(t))return;let r=new Date(t);r.setDate(t.getDate()+n),e.querySelector(`#dateAddResult`).innerHTML=`
      <div class="result-box">
        <div class="result-label">New Date</div>
        <div class="result-value">${r.toDateString()}</div>
      </div>
    `},e}function j(){let e=document.createElement(`div`);return e.className=`page-content tool-page`,e.innerHTML=`
    <h2>🏦 Simple Loan Calculator</h2>
    <div class="form-group">
      <label>Loan Amount</label>
      <input type="number" id="loanAmt" class="form-input" value="100000">
    </div>
    <div class="form-group">
      <label>Annual Interest Rate (%)</label>
      <input type="number" id="loanRate" class="form-input" value="10">
    </div>
    <div class="form-group">
      <label>Loan Term (Years)</label>
      <input type="number" id="loanTerm" class="form-input" value="5">
    </div>
    <button class="btn btn-primary" id="calcLoan">🏦 Calculate EMI</button>
    <div id="loanResult"></div>
  `,e.querySelector(`#calcLoan`).onclick=()=>{let t=parseFloat(e.querySelector(`#loanAmt`).value),n=parseFloat(e.querySelector(`#loanRate`).value)/12/100,r=parseFloat(e.querySelector(`#loanTerm`).value)*12,i=t*n*(1+n)**+r/((1+n)**+r-1),a=i*r,o=a-t;e.querySelector(`#loanResult`).innerHTML=`
      <div class="result-box">
        <div class="result-label">Monthly EMI</div>
        <div class="result-value">₹${Math.round(i).toLocaleString()}</div>
      </div>
      <div class="result-grid">
        <div class="result-item">
          <div class="result-label">Total Payable</div>
          <div class="result-value">₹${Math.round(a).toLocaleString()}</div>
        </div>
        <div class="result-item">
          <div class="result-label">Total Interest</div>
          <div class="result-value">₹${Math.round(o).toLocaleString()}</div>
        </div>
      </div>
    `},e}function M(){let e=document.createElement(`div`);e.className=`page-content tool-page`,e.innerHTML=`
    <h2>📄 Text Summarizer</h2>
    <div class="form-group">
      <label for="summarizerInput">Paste your text below</label>
      <textarea class="form-textarea" id="summarizerInput" rows="8" placeholder="Paste a long paragraph or article text here..."></textarea>
    </div>
    <div class="form-group">
      <label>Summary Length</label>
      <div class="chip-group" id="summaryLengthChips">
        <span class="chip active" data-sentences="3">Short (3 sentences)</span>
        <span class="chip" data-sentences="5">Medium (5 sentences)</span>
        <span class="chip" data-sentences="7">Long (7 sentences)</span>
      </div>
    </div>
    <button class="btn btn-primary" id="summarizeBtn">Summarize</button>
    <div id="summarizerResult"></div>
  `;let t=3;return e.querySelectorAll(`#summaryLengthChips .chip`).forEach(n=>{n.addEventListener(`click`,()=>{e.querySelectorAll(`#summaryLengthChips .chip`).forEach(e=>e.classList.remove(`active`)),n.classList.add(`active`),t=parseInt(n.dataset.sentences)})}),e.querySelector(`#summarizeBtn`).addEventListener(`click`,()=>{let n=e.querySelector(`#summarizerInput`).value.trim();if(!n){e.querySelector(`#summarizerResult`).innerHTML=`
        <div class="result-box">
          <div class="result-label">⚠️ Error</div>
          <div class="result-detail">Please paste some text to summarize.</div>
        </div>
      `;return}let r=N(n,t);e.querySelector(`#summarizerResult`).innerHTML=`
      <div class="result-box">
        <div class="result-label">📋 Summary (${r.sentenceCount} sentences)</div>
        <div class="output-area">${r.text}</div>
        <div class="result-detail mt-sm">
          Original: ${r.originalWords} words → Summary: ${r.summaryWords} words
          (${r.compressionRatio}% shorter)
        </div>
      </div>
    `}),e}function N(e,t){let n=new Set(`the.a.an.and.or.but.in.on.at.to.for.of.with.by.from.is.are.was.were.be.been.being.have.has.had.do.does.did.will.would.could.should.may.might.shall.can.this.that.these.those.i.you.he.she.it.we.they.me.him.her.us.them.my.your.his.its.our.their.what.which.who.whom.when.where.why.how.all.each.every.both.few.more.most.other.some.such.no.nor.not.only.own.same.so.than.too.very.just.because.as.until.while.about.between.through.during.before.after.above.below.up.down.out.off.over.under.again.further.then.once.here.there.also.if.into.get.got.like.well.back.much.go.going.say.said.make.made`.split(`.`)),r=e.replace(/([.!?])\s+/g,`$1|`).split(`|`).map(e=>e.trim()).filter(e=>e.length>10);if(r.length<=t)return{text:r.join(` `),sentenceCount:r.length,originalWords:e.split(/\s+/).length,summaryWords:r.join(` `).split(/\s+/).length,compressionRatio:0};let i={};r.forEach(e=>{e.toLowerCase().replace(/[^a-z0-9\s]/g,``).split(/\s+/).forEach(e=>{e.length>2&&!n.has(e)&&(i[e]=(i[e]||0)+1)})});let a=r.map((e,t)=>{let n=e.toLowerCase().replace(/[^a-z0-9\s]/g,``).split(/\s+/),a=0;return n.forEach(e=>{i[e]&&(a+=i[e])}),a=n.length>0?a/Math.sqrt(n.length):0,t===0&&(a*=1.2),t===r.length-1&&(a*=1.1),{sentence:e,score:a,index:t}}).sort((e,t)=>t.score-e.score).slice(0,t).sort((e,t)=>e.index-t.index).map(e=>e.sentence),o=a.join(` `),s=e.split(/\s+/).length,c=o.split(/\s+/).length,l=Math.round((1-c/s)*100);return{text:o,sentenceCount:a.length,originalWords:s,summaryWords:c,compressionRatio:Math.max(0,l)}}var P={motivational:[`Dream big. Start small. Act now. 🚀`,`Your only limit is your mind. 💪`,`Be the energy you want to attract. ✨`,`Stay hungry, stay foolish. 🌟`,`Hustle in silence, let success make the noise. 🔥`,`Good things take time. Be patient. ⏳`,`Turn your wounds into wisdom. 🧠`,`If not now, then when? ⚡`,`Stop wishing, start doing. 💯`,`The best time to start was yesterday. The next best is now. 🌅`,`Work hard in silence, let your success be your noise. 🤫`,`Believe you can and you're halfway there. 🙌`,`Small steps every day lead to big results. 👣`,`Don't stop until you're proud. 🏆`,`Rise above the storm and you will find the sunshine. ☀️`,`The struggle you're in today is developing the strength for tomorrow. 💎`,`Push harder than yesterday if you want a different tomorrow. 🔥`,`Success doesn't come to you, you go to it. 🎯`,`Be a voice, not an echo. 📢`,`Fall seven times, stand up eight. 🥊`],funny:[`I need a six-month vacation, twice a year. 🏖️`,`My bed is a magical place where I suddenly remember everything I forgot to do. 😴`,`I'm not lazy, I'm on energy-saving mode. 🔋`,`Life is short. Smile while you still have teeth. 😁`,`I followed my heart and it led me to the fridge. 🍕`,`Friday is my second favorite F word. 🎉`,`I don't sweat, I sparkle. ✨`,`Reality called, so I hung up. 📞`,`I'm not arguing, I'm just explaining why I'm right. 💁`,`Diet starts Monday... next Monday. 🍔`,`Common sense is like deodorant. Those who need it most never use it. 😂`,`I'm on a seafood diet. I see food and I eat it. 🦐`,`My wallet is like an onion. Opening it makes me cry. 😭`,`Exercise? I thought you said extra fries! 🍟`,`I'm not old, I'm vintage. 🍷`],aesthetic:[`Lost in the right direction. 🧭`,`Less perfection, more authenticity. 🌿`,`Find beauty in the chaos. 🌸`,`Wandering is not being lost. 🌙`,`Sunsets and palm trees. 🌴`,`Collect moments, not things. 📸`,`Stay wild, moon child. 🌙`,`She was chaos and beauty intertwined. 🦋`,`Golden hour state of mind. 🌅`,`Bloom where you are planted. 🌺`,`Dancing through life with bare feet and a full heart. 💃`,`Stars can't shine without darkness. ⭐`,`Life is art, live yours in color. 🎨`,`Between the pages of a book is a lovely place to be. 📖`,`Ocean air, salty hair. 🌊`],selfie:[`Confidence level: Selfie with no filter. 😎`,`But first, let me take a selfie. 📱`,`Be yourself, there's no one better. 💫`,`Serving looks since [birth year]. 💅`,`Not everyone likes me, but not everyone matters. 👑`,`Too glam to give a damn. 💋`,`I woke up like this. 😏`,`Smile big, laugh often. 😊`,`Living my best life. 🌟`,`Mood: feeling myself. ✨`,`This is my resting nice face. 😇`,`Warning: hot content ahead. 🔥`,`Why fit in when you were born to stand out? 🦄`,`Me, myself, and I. 💖`,`Living proof that good things come in small packages. 📦`],travel:[`Adventure awaits. 🗺️`,`Take only memories, leave only footprints. 👣`,`The world is a book and those who don't travel read only one page. 📖`,`Jet lag is for amateurs. ✈️`,`Wander often, wonder always. 🌍`,`Life is short and the world is wide. 🌎`,`Travel far enough to meet yourself. 🧳`,`I haven't been everywhere, but it's on my list. 📝`,`Catch flights, not feelings. 🛫`,`Not all classrooms have four walls. 🏔️`,`Eat. Sleep. Travel. Repeat. 🔄`,`Go where you feel most alive. 🌋`,`Passport: ready. Adventure: pending. ⏳`,`Let's find some beautiful place to get lost. 🗺️`,`Exploring the world, one city at a time. 🏙️`]},F={motivational:`💪 Motivational`,funny:`😂 Funny`,aesthetic:`🌸 Aesthetic`,selfie:`📱 Selfie`,travel:`✈️ Travel`};function I(){let e=document.createElement(`div`);e.className=`page-content tool-page`;let t=`motivational`;return e.innerHTML=`
    <h2>💬 Caption Generator</h2>
    <div class="form-group">
      <label>Choose a vibe</label>
      <div class="chip-group" id="captionChips">
        ${Object.entries(F).map(([e,n])=>`
          <span class="chip ${e===t?`active`:``}" data-cat="${e}">${n}</span>
        `).join(``)}
      </div>
    </div>
    <button class="btn btn-primary" id="generateCaptionBtn">🎲 Generate Caption</button>
    <div id="captionResult"></div>
  `,e.querySelectorAll(`#captionChips .chip`).forEach(n=>{n.addEventListener(`click`,()=>{e.querySelectorAll(`#captionChips .chip`).forEach(e=>e.classList.remove(`active`)),n.classList.add(`active`),t=n.dataset.cat})}),e.querySelector(`#generateCaptionBtn`).addEventListener(`click`,()=>{let n=P[t],r=n[Math.floor(Math.random()*n.length)];e.querySelector(`#captionResult`).innerHTML=`
      <div class="result-box">
        <div class="result-label">${F[t]}</div>
        <div class="output-area" style="font-size: var(--font-size-md); text-align: center; padding: var(--spacing-lg);">
          ${r}
        </div>
        <button class="btn btn-secondary btn-sm mt-md" id="copyCaptionBtn">📋 Copy Caption</button>
      </div>
    `,e.querySelector(`#copyCaptionBtn`).addEventListener(`click`,()=>{h(r)})}),e}var L=[`Developer`,`Designer`,`Writer`,`Photographer`,`Student`,`Entrepreneur`,`Freelancer`,`Creator`,`Artist`,`Marketer`,`Engineer`,`Teacher`,`Musician`,`Blogger`,`Traveler`],R={professional:{label:`💼 Professional`,templates:[`{profession} | Passionate about {interest} | Building the future, one project at a time.`,`{profession} with {years}+ years of experience. Focused on {interest} and continuous growth.`,`Results-driven {profession} specializing in {interest}. Let's connect and create impact.`,`{profession} | {interest} enthusiast | Committed to excellence and innovation.`,`Experienced {profession} helping brands with {interest}. Open for collaborations.`,`Dedicated {profession} | {interest} expert | Turning ideas into reality.`]},casual:{label:`😊 Casual`,templates:[`Just a {profession} who loves {interest} ✌️`,`{profession} by day, {interest} lover by night 🌙`,`Living life one {interest} at a time | {profession} vibes ✨`,`{profession} 🔥 | {interest} addict | Coffee enthusiast ☕`,`Making cool stuff as a {profession} | Obsessed with {interest} 🚀`,`Your friendly neighborhood {profession} | {interest} is life 💯`]},witty:{label:`😄 Witty`,templates:[`Professional {profession}. Amateur {interest} philosopher. Full-time overthinker. 🤔`,`{profession} who accidentally got good at {interest}. Still surprised. 😅`,`I put the "pro" in {profession} and the "fun" in {interest}. You're welcome. 😎`,`{profession} | {interest} lover | My mom thinks I'm cool 😂`,`Part-time {profession}, full-time {interest} nerd. No regrets. 🤷`,`Serial {profession} | {interest} fanatic | Will work for pizza 🍕`]},minimal:{label:`✨ Minimal`,templates:[`{profession} · {interest}`,`{profession} | {interest} | ☕`,`{interest} · {profession} · ✨`,`{profession}. {interest}. Simple.`,`📍 {profession} • {interest}`,`{profession} → {interest} → 🌟`]}},z=[`technology`,`design`,`music`,`photography`,`travel`,`coffee`,`coding`,`books`,`fitness`,`food`,`art`,`gaming`,`nature`,`fashion`,`movies`,`writing`,`cooking`,`yoga`,`science`,`startups`];function B(){let e=document.createElement(`div`);e.className=`page-content tool-page`;let t=`professional`;return e.innerHTML=`
    <h2>👤 Bio Generator</h2>
    <div class="form-group">
      <label for="bioProfession">Your Profession</label>
      <select class="form-select" id="bioProfession">
        ${L.map(e=>`<option value="${e}">${e}</option>`).join(``)}
      </select>
    </div>
    <div class="form-group">
      <label for="bioInterest">Your Interest</label>
      <select class="form-select" id="bioInterest">
        ${z.map(e=>`<option value="${e}">${e.charAt(0).toUpperCase()+e.slice(1)}</option>`).join(``)}
      </select>
    </div>
    <div class="form-group">
      <label>Tone</label>
      <div class="chip-group" id="bioToneChips">
        ${Object.entries(R).map(([e,n])=>`
          <span class="chip ${e===t?`active`:``}" data-tone="${e}">${n.label}</span>
        `).join(``)}
      </div>
    </div>
    <button class="btn btn-primary" id="generateBioBtn">🎲 Generate Bio</button>
    <div id="bioResult"></div>
  `,e.querySelectorAll(`#bioToneChips .chip`).forEach(n=>{n.addEventListener(`click`,()=>{e.querySelectorAll(`#bioToneChips .chip`).forEach(e=>e.classList.remove(`active`)),n.classList.add(`active`),t=n.dataset.tone})}),e.querySelector(`#generateBioBtn`).addEventListener(`click`,()=>{let n=e.querySelector(`#bioProfession`).value,r=e.querySelector(`#bioInterest`).value,i=R[t].templates,a=i[Math.floor(Math.random()*i.length)],o=Math.floor(Math.random()*8)+2,s=a.replace(/\{profession\}/g,n).replace(/\{interest\}/g,r).replace(/\{years\}/g,o);e.querySelector(`#bioResult`).innerHTML=`
      <div class="result-box">
        <div class="result-label">${R[t].label} Bio</div>
        <div class="output-area" style="font-size: var(--font-size-md); padding: var(--spacing-lg);">
          ${s}
        </div>
        <div class="btn-row mt-md">
          <button class="btn btn-secondary btn-sm" id="copyBioBtn">📋 Copy</button>
          <button class="btn btn-secondary btn-sm" id="regenBioBtn">🔄 Regenerate</button>
        </div>
      </div>
    `,e.querySelector(`#copyBioBtn`).addEventListener(`click`,()=>h(s)),e.querySelector(`#regenBioBtn`).addEventListener(`click`,()=>{e.querySelector(`#generateBioBtn`).click()})}),e}function V(){let e=document.createElement(`div`);e.className=`page-content tool-page`,e.innerHTML=`
    <h2>🔢 Word Counter</h2>
    <div class="form-group">
      <label for="wordCounterInput">Type or paste text below</label>
      <textarea class="form-textarea" id="wordCounterInput" rows="8" placeholder="Start typing or paste your text here..."></textarea>
    </div>
    <div class="result-grid" id="wordCounterStats">
      <div class="result-item">
        <div class="result-label">Words</div>
        <div class="result-value" id="statWords">0</div>
      </div>
      <div class="result-item">
        <div class="result-label">Characters</div>
        <div class="result-value" id="statChars">0</div>
      </div>
      <div class="result-item">
        <div class="result-label">Sentences</div>
        <div class="result-value" id="statSentences">0</div>
      </div>
      <div class="result-item">
        <div class="result-label">Paragraphs</div>
        <div class="result-value" id="statParagraphs">0</div>
      </div>
      <div class="result-item">
        <div class="result-label">Characters (no spaces)</div>
        <div class="result-value" id="statCharsNoSpace">0</div>
      </div>
      <div class="result-item">
        <div class="result-label">Reading Time</div>
        <div class="result-value" id="statReadTime">0s</div>
      </div>
    </div>
  `;let t=e.querySelector(`#wordCounterInput`),n={words:e.querySelector(`#statWords`),chars:e.querySelector(`#statChars`),sentences:e.querySelector(`#statSentences`),paragraphs:e.querySelector(`#statParagraphs`),charsNoSpace:e.querySelector(`#statCharsNoSpace`),readTime:e.querySelector(`#statReadTime`)};function r(){let e=t.value,r=e.trim()?e.trim().split(/\s+/).length:0;n.words.textContent=r,n.chars.textContent=e.length,n.charsNoSpace.textContent=e.replace(/\s/g,``).length;let i=e.trim()?e.split(/[.!?]+/).filter(e=>e.trim().length>0).length:0;n.sentences.textContent=i;let a=e.trim()?e.split(/\n\s*\n/).filter(e=>e.trim().length>0).length:0;n.paragraphs.textContent=a||(e.trim()?1:0);let o=r/200;o<1?n.readTime.textContent=`${Math.ceil(o*60)}s`:n.readTime.textContent=`${Math.ceil(o)}m`}return t.addEventListener(`input`,r),e}function H(){let e=document.createElement(`div`);e.className=`page-content tool-page`,e.innerHTML=`
    <h2>🔠 Case Converter</h2>
    <div class="form-group">
      <label>Input Text</label>
      <textarea id="caseInput" class="form-textarea" placeholder="Enter or paste text here..."></textarea>
    </div>
    
    <div class="grid-2-col">
      <button class="btn btn-secondary" data-case="upper">UPPERCASE</button>
      <button class="btn btn-secondary" data-case="lower">lowercase</button>
      <button class="btn btn-secondary" data-case="sentence">Sentence case</button>
      <button class="btn btn-secondary" data-case="title">Title Case</button>
      <button class="btn btn-secondary" data-case="camel">camelCase</button>
      <button class="btn btn-secondary" data-case="slug">slug-case</button>
    </div>

    <div class="result-box mt-lg">
      <div class="result-label">Result</div>
      <div id="caseResult" class="output-area"></div>
      <button class="btn btn-sm btn-primary mt-sm" id="copyCase">📋 Copy Result</button>
    </div>
  `;let t=e.querySelector(`#caseInput`),n=e.querySelector(`#caseResult`);return e.querySelectorAll(`[data-case]`).forEach(e=>{e.onclick=()=>{let r=t.value,i=``,a=e.dataset.case;a===`upper`?i=r.toUpperCase():a===`lower`?i=r.toLowerCase():a===`sentence`?i=r.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g,e=>e.toUpperCase()):a===`title`?i=r.toLowerCase().split(` `).map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(` `):a===`camel`?i=r.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g,(e,t)=>t.toUpperCase()):a===`slug`&&(i=r.toLowerCase().replace(/[^a-z0-9]+/g,`-`).replace(/^-+|-+$/g,``)),n.textContent=i}}),e.querySelector(`#copyCase`).onclick=()=>{navigator.clipboard.writeText(n.textContent),a(()=>Promise.resolve().then(()=>d).then(e=>e.showToast(`Copied to clipboard!`)),void 0)},e}function U(){let e=document.createElement(`div`);e.className=`page-content tool-page`,e.innerHTML=`
    <h2>📝 Remove Duplicate Lines</h2>
    <div class="form-group">
      <label>Input Text (One item per line)</label>
      <textarea id="dupInput" class="form-textarea" placeholder="Paste lines of text..."></textarea>
    </div>
    
    <div class="toggle-row">
      <label>Trim whitespace</label>
      <div class="toggle active" id="trimToggle"></div>
    </div>
    
    <button class="btn btn-primary mt-md" id="processDups">✨ Remove Duplicates</button>

    <div class="result-box mt-lg">
      <div class="result-label" id="dupStats">Result</div>
      <div id="dupResult" class="output-area"></div>
      <button class="btn btn-sm btn-primary mt-sm" id="copyDups">📋 Copy Result</button>
    </div>
  `;let t=e.querySelector(`#trimToggle`);return t.onclick=()=>t.classList.toggle(`active`),e.querySelector(`#processDups`).onclick=()=>{let n=e.querySelector(`#dupInput`).value,r=t.classList.contains(`active`),i=n.split(`
`);r&&(i=i.map(e=>e.trim()).filter(e=>e.length>0));let a=i.length,o=[...new Set(i)],s=o.length;e.querySelector(`#dupResult`).textContent=o.join(`
`),e.querySelector(`#dupStats`).textContent=`Cleaned (${s} unique lines, ${a-s} removed)`},e.querySelector(`#copyDups`).onclick=()=>{navigator.clipboard.writeText(e.querySelector(`#dupResult`).textContent),a(()=>Promise.resolve().then(()=>d).then(e=>e.showToast(`Copied to clipboard!`)),void 0)},e}function W(){let e=document.createElement(`div`);return e.className=`page-content tool-page`,e.innerHTML=`
    <h2>↩️ Text Reverser</h2>
    <div class="form-group">
      <label>Input Text</label>
      <textarea id="revInput" class="form-textarea" placeholder="Enter text to flip..."></textarea>
    </div>
    
    <div class="grid-3-col">
      <button class="btn btn-secondary" data-mode="chars">Reverse Chars</button>
      <button class="btn btn-secondary" data-mode="words">Reverse Words</button>
      <button class="btn btn-secondary" data-mode="lines">Reverse Lines</button>
    </div>

    <div class="result-box mt-lg">
      <div class="result-label">Output</div>
      <div id="revResult" class="output-area"></div>
      <button class="btn btn-sm btn-primary mt-sm" id="copyRev">📋 Copy Result</button>
    </div>
  `,e.querySelectorAll(`[data-mode]`).forEach(t=>{t.onclick=()=>{let n=e.querySelector(`#revInput`).value,r=t.dataset.mode,i=``;r===`chars`?i=n.split(``).reverse().join(``):r===`words`?i=n.split(/\s+/).reverse().join(` `):r===`lines`&&(i=n.split(`
`).reverse().join(`
`)),e.querySelector(`#revResult`).textContent=i}}),e.querySelector(`#copyRev`).onclick=()=>{navigator.clipboard.writeText(e.querySelector(`#revResult`).textContent),a(()=>Promise.resolve().then(()=>d).then(e=>e.showToast(`Copied to clipboard!`)),void 0)},e}function G(){let e=document.createElement(`div`);return e.className=`page-content tool-page`,e.innerHTML=`
    <h2>#️⃣ Hashtag Generator</h2>
    <div class="form-group">
      <label>Enter keywords or phrases</label>
      <textarea id="hashInput" class="form-textarea" placeholder="e.g. coffee morning, healthy life"></textarea>
    </div>
    
    <div class="form-group">
      <label>Style</label>
      <select id="hashStyle" class="form-select">
        <option value="camel">#CamelCase</option>
        <option value="lower">#lowercase</option>
      </select>
    </div>

    <button class="btn btn-primary" id="genHash">#️⃣ Generate Hashtags</button>

    <div class="result-box mt-lg">
      <div class="result-label">Hashtags</div>
      <div id="hashResult" class="output-area"></div>
      <button class="btn btn-sm btn-primary mt-sm" id="copyHash">📋 Copy Result</button>
    </div>
  `,e.querySelector(`#genHash`).onclick=()=>{let t=e.querySelector(`#hashInput`).value,n=e.querySelector(`#hashStyle`).value;if(!t)return;let r=t.split(/,|\n/).map(e=>e.trim()).filter(e=>e.length>0).map(e=>{let t=e;return t=n===`camel`?e.replace(/(?:^\w|[A-Z]|\b\w)/g,e=>e.toUpperCase()).replace(/\s+/g,``):e.toLowerCase().replace(/\s+/g,``),`#`+t});e.querySelector(`#hashResult`).textContent=r.join(` `)},e.querySelector(`#copyHash`).onclick=()=>{navigator.clipboard.writeText(e.querySelector(`#hashResult`).textContent),a(()=>Promise.resolve().then(()=>d).then(e=>e.showToast(`Copied to clipboard!`)),void 0)},e}function K(){let e=document.createElement(`div`);e.className=`page-content tool-page`;let t={subjects:[`The cat`,`A small robot`,`The quick runner`,`Our neighbor`,`A mysterious traveler`,`The scientist`],verbs:[`jumped over`,`discovered`,`is watching`,`painted`,`found`,`quietly fixed`],objects:[`a golden key`,`the ancient map`,`a shiny new gadget`,`the colorful mural`,`a secret passage`,`the broken shelf`],adverbs:[`quickly`,`carefully`,`magically`,`under the moonlight`,`without warning`,`with a smile`]};e.innerHTML=`
    <h2>🎲 Random Sentence Generator</h2>
    <div class="form-group">
      <label>How many sentences?</label>
      <input type="number" id="sentCount" class="form-input" value="3" min="1" max="20">
    </div>
    
    <button class="btn btn-primary" id="genSent">🎲 Generate Text</button>

    <div class="result-box mt-lg">
      <div class="result-label">Generated Text</div>
      <div id="sentResult" class="output-area"></div>
      <button class="btn btn-sm btn-primary mt-sm" id="copySent">📋 Copy Result</button>
    </div>
  `;let n=e=>e[Math.floor(Math.random()*e.length)];return e.querySelector(`#genSent`).onclick=()=>{let r=parseInt(e.querySelector(`#sentCount`).value),i=[];for(let e=0;e<r;e++){let e=`${n(t.subjects)} ${n(t.verbs)} ${n(t.objects)} ${n(t.adverbs)}.`;i.push(e)}e.querySelector(`#sentResult`).textContent=i.join(` `)},e.querySelector(`#copySent`).onclick=()=>{navigator.clipboard.writeText(e.querySelector(`#sentResult`).textContent),a(()=>Promise.resolve().then(()=>d).then(e=>e.showToast(`Copied to clipboard!`)),void 0)},e}function q(){let e=document.createElement(`div`);e.className=`page-content tool-page`,e.innerHTML=`
    <h2>✨ Text Formatter</h2>
    <div class="form-group">
      <label>Messy Text</label>
      <textarea id="formatInput" class="form-textarea" placeholder="Paste text here..."></textarea>
    </div>
    
    <div class="grid-2-col">
      <button class="btn btn-secondary" id="cleanSpaces">Remove Extra Spaces</button>
      <button class="btn btn-secondary" id="cleanLines">Remove Empty Lines</button>
      <button class="btn btn-secondary" id="trimAll">Trim Every Line</button>
      <button class="btn btn-secondary" id="smartFormat">Smart Format</button>
    </div>

    <div class="result-box mt-lg">
      <div class="result-label">Clean Result</div>
      <div id="formatResult" class="output-area"></div>
      <button class="btn btn-sm btn-primary mt-sm" id="copyFormat">📋 Copy Result</button>
    </div>
  `;let t=e.querySelector(`#formatInput`),n=e.querySelector(`#formatResult`);return e.querySelector(`#cleanSpaces`).onclick=()=>{n.textContent=t.value.replace(/[ \t]+/g,` `).trim()},e.querySelector(`#cleanLines`).onclick=()=>{n.textContent=t.value.split(`
`).filter(e=>e.trim().length>0).join(`
`)},e.querySelector(`#trimAll`).onclick=()=>{n.textContent=t.value.split(`
`).map(e=>e.trim()).join(`
`)},e.querySelector(`#smartFormat`).onclick=()=>{n.textContent=t.value.replace(/[ \t]+/g,` `).split(`
`).map(e=>e.trim()).filter(e=>e.length>0).join(`
`).replace(/([.!?])\s*(\w)/g,(e,t,n)=>`${t} ${n.toUpperCase()}`)},e.querySelector(`#copyFormat`).onclick=()=>{navigator.clipboard.writeText(n.textContent),a(()=>Promise.resolve().then(()=>d).then(e=>e.showToast(`Copied to clipboard!`)),void 0)},e}function se(){let e=document.createElement(`div`);e.className=`page-content tool-page`;let t=[`_pro`,`x`,`Vibe`,`System`,`Master`,`Dev`,`Craft`,`Hub`,`Zone`,`101`,`Official`,`Real`],n=[`_`,`-`,`.`,``];e.innerHTML=`
    <h2>👤 Username Generator</h2>
    <div class="form-group">
      <label>Base Name / Keyword</label>
      <input type="text" id="unameBase" class="form-input" placeholder="e.g. John, Pixel">
    </div>
    
    <button class="btn btn-primary" id="genUname">👤 Generate Options</button>

    <div class="result-box mt-lg">
      <div class="result-label">Usernames</div>
      <div id="unameResult" class="tools-list"></div>
    </div>
  `;let r=e=>e[Math.floor(Math.random()*e.length)];return e.querySelector(`#genUname`).onclick=()=>{let i=e.querySelector(`#unameBase`).value.trim()||`User`,o=[];for(let e=0;e<10;e++){let e=``,a=Math.floor(Math.random()*4);e=a===0?i+r(n)+r(t):a===1?r(t)+i:a===2?i+Math.floor(Math.random()*9999):i.toLowerCase().replace(/a/g,`4`).replace(/e/g,`3`)+r(n)+r(t),o.push(e)}e.querySelector(`#unameResult`).innerHTML=o.map(e=>`
      <div class="tool-card uname-item" style="padding: 10px 20px">
        <div class="tool-name" style="font-size: 1rem">${e}</div>
        <button class="btn btn-sm btn-secondary copy-item" data-text="${e}">📋</button>
      </div>
    `).join(``),e.querySelectorAll(`.copy-item`).forEach(e=>{e.onclick=()=>{navigator.clipboard.writeText(e.dataset.text),a(()=>Promise.resolve().then(()=>d).then(e=>e.showToast(`Copied!`)),void 0)}})},e}function ce(){let e=document.createElement(`div`);e.className=`page-content tool-page`;let t={leave:{label:`Sick Leave Request`,subject:`Sick Leave Application - [Your Name]`,body:`Dear [Manager Name],

I am writing to inform you that I am unable to attend work today due to [reason]. I expect to be back by [date]. I will be available via email for any urgent matters.

Best regards,
[Your Name]`},resignation:{label:`Resignation Letter`,subject:`Resignation - [Your Name]`,body:`Dear [Manager Name],

Please accept this email as formal notification that I am resigning from my position as [Job Title]. My last day will be [Date]. I am grateful for the opportunities I had here.

Sincerely,
[Your Name]`},followup:{label:`Interview Follow-up`,subject:`Follow-up on Interview for [Job Title]`,body:`Dear [Interviewer Name],

Thank you for the opportunity to interview for the [Job Title] position yesterday. I enjoyed learning more about the role and am very interested in joining the team.

Best regards,
[Your Name]`},casual:{label:`Casual Catch-up`,subject:`Catch up soon?`,body:`Hey [Friend Name],

It's been a while since we last talked. Are you free this weekend to grab some coffee or lunch? Let me know what works for you!

Cheers,
[Your Name]`}};e.innerHTML=`
    <h2>📧 Email Template Generator</h2>
    <div class="form-group">
      <label>Select Template</label>
      <select id="emailType" class="form-select">
        ${Object.keys(t).map(e=>`<option value="${e}">${t[e].label}</option>`).join(``)}
      </select>
    </div>
    
    <div class="result-box mt-lg">
      <div class="result-label">Subject</div>
      <div id="emailSubject" class="output-area" style="min-height: auto; margin-bottom: 10px; font-weight: bold;"></div>
      <div class="result-label">Body</div>
      <textarea id="emailBody" class="form-textarea" style="min-height: 200px"></textarea>
      <button class="btn btn-sm btn-primary mt-sm" id="copyEmail">📋 Copy Full Email</button>
    </div>
  `;let n=e.querySelector(`#emailType`),r=e.querySelector(`#emailSubject`),i=e.querySelector(`#emailBody`),o=()=>{let e=t[n.value];r.textContent=e.subject,i.value=e.body};return n.onchange=o,o(),e.querySelector(`#copyEmail`).onclick=()=>{let e=`Subject: ${r.textContent}\n\n${i.value}`;navigator.clipboard.writeText(e),a(()=>Promise.resolve().then(()=>d).then(e=>e.showToast(`Copied to clipboard!`)),void 0)},e}function le(){let e=document.createElement(`div`);e.className=`page-content tool-page`;let t={bold:{a:`𝐚`,b:`𝐛`,c:`𝐜`,d:`𝐝`,e:`𝐞`,f:`𝐟`,g:`𝐠`,h:`𝐡`,i:`𝐢`,j:`𝐣`,k:`𝐤`,l:`𝐥`,m:`𝐦`,n:`𝐧`,o:`𝐨`,p:`𝐩`,q:`𝐪`,r:`𝐫`,s:`𝐬`,t:`𝐭`,u:`𝐮`,v:`𝐯`,w:`𝐰`,x:`𝐱`,y:`𝐲`,z:`𝐳`},italic:{a:`𝘢`,b:`𝘣`,c:`𝘤`,d:`𝘥`,e:`𝘦`,f:`𝘧`,g:`𝘨`,h:`𝘩`,i:`𝘪`,j:`𝘫`,k:`𝘬`,l:`𝘭`,m:`𝘮`,n:`𝘯`,o:`𝘰`,p:`𝘱`,q:`𝘲`,r:`𝘳`,s:`𝘴`,t:`𝘵`,u:`𝘶`,v:`𝘷`,w:`𝘸`,x:`𝘹`,y:`𝘺`,z:`𝘻`},monospace:{a:`𝚊`,b:`𝚋`,c:`𝚌`,d:`𝚍`,e:`𝚎`,f:`𝚏`,g:`𝚐`,h:`𝚑`,i:`𝚒`,j:`𝚓`,k:`𝚔`,l:`𝚕`,m:`𝚖`,n:`𝚗`,o:`𝚘`,p:`𝚙`,q:`𝚚`,r:`𝚛`,s:`𝚜`,t:`𝚝`,u:`𝚞`,v:`𝚟`,w:`𝚠`,x:`𝚡`,y:`𝚢`,z:`𝚣`},script:{a:`𝒶`,b:`𝒷`,c:`𝒸`,d:`𝒹`,e:`ℯ`,f:`𝒻`,g:`ℊ`,h:`𝒽`,i:`𝒾`,j:`𝒿`,k:`𝓀`,l:`𝓁`,m:`𝓂`,n:`𝓃`,o:`ℴ`,p:`𝓅`,q:`𝓆`,r:`𝓇`,s:`𝓈`,t:`𝓉`,u:`𝓊`,v:`𝓋`,w:`𝓌`,x:`𝓍`,y:`𝓎`,z:`𝓏`}};e.innerHTML=`
    <h2>✨ Fancy Text Generator</h2>
    <div class="form-group">
      <label>Standard Text</label>
      <input type="text" id="fancyInput" class="form-input" placeholder="Type something..." value="Hello World">
    </div>
    
    <div id="fancyResults" class="tools-list mt-lg"></div>
  `;let n=e.querySelector(`#fancyInput`),r=e.querySelector(`#fancyResults`),i=(e,t)=>e.toLowerCase().split(``).map(e=>t[e]||e).join(``),o=()=>{let e=n.value||`Hello`;r.innerHTML=Object.keys(t).map(n=>{let r=i(e,t[n]);return`
          <div class="tool-card uname-item" style="padding: 15px 20px">
            <div class="tool-name" style="font-size: 1.2rem">${r}</div>
            <button class="btn btn-sm btn-secondary copy-fancy" data-text="${r}">📋</button>
          </div>
        `}).join(``),r.querySelectorAll(`.copy-fancy`).forEach(e=>{e.onclick=()=>{navigator.clipboard.writeText(e.dataset.text),a(()=>Promise.resolve().then(()=>d).then(e=>e.showToast(`Copied!`)),void 0)}})};return n.oninput=o,o(),e}function ue(){let e=document.createElement(`div`);e.className=`page-content tool-page`,e.innerHTML=`
    <h2>✂️ Character Remover</h2>
    <div class="form-group">
      <label>Input Text</label>
      <textarea id="remInput" class="form-textarea" placeholder="Paste text here..."></textarea>
    </div>
    
    <div class="grid-2-col">
      <button class="btn btn-secondary" id="remDigits">Remove Digits (0-9)</button>
      <button class="btn btn-secondary" id="remAlpha">Remove Letters (a-z)</button>
      <button class="btn btn-secondary" id="remSymbols">Remove Symbols</button>
      <button class="btn btn-secondary" id="remCustom">Remove Custom Char</button>
    </div>

    <div class="form-group mt-md" id="customCharGroup" style="display:none">
      <label>Char to remove</label>
      <input type="text" id="customChar" class="form-input" maxlength="1" placeholder="e.g. ,">
    </div>

    <div class="result-box mt-lg">
      <div class="result-label">Clean Result</div>
      <div id="remResult" class="output-area"></div>
      <button class="btn btn-sm btn-primary mt-sm" id="copyRem">📋 Copy Result</button>
    </div>
  `;let t=e.querySelector(`#remInput`),n=e.querySelector(`#remResult`),r=e.querySelector(`#customCharGroup`),i=e.querySelector(`#customChar`);return e.querySelector(`#remDigits`).onclick=()=>n.textContent=t.value.replace(/\d/g,``),e.querySelector(`#remAlpha`).onclick=()=>n.textContent=t.value.replace(/[a-zA-Z]/g,``),e.querySelector(`#remSymbols`).onclick=()=>n.textContent=t.value.replace(/[^\w\s]|_/g,``),e.querySelector(`#remCustom`).onclick=()=>{r.style.display=`block`},i.oninput=()=>{let e=i.value;e&&(n.textContent=t.value.split(e).join(``))},e.querySelector(`#copyRem`).onclick=()=>{navigator.clipboard.writeText(n.textContent),a(()=>Promise.resolve().then(()=>d).then(e=>e.showToast(`Copied!`)),void 0)},e}function de(){let e=document.createElement(`div`);e.className=`page-content tool-page`;let t=[];e.innerHTML=`
    <h2>🖼️ Image to PDF</h2>
    <div class="file-upload" id="imgPdfUpload">
      <div class="upload-icon">📸</div>
      <div class="upload-text">Tap to select images</div>
      <div class="upload-hint">JPG, PNG, WebP supported</div>
    </div>
    <input type="file" id="imgPdfInput" multiple accept="image/*" style="display:none" />
    <div class="file-list" id="imgPdfFileList"></div>
    <div class="image-preview-grid" id="imgPdfPreview"></div>
    <button class="btn btn-primary mt-md hidden" id="imgPdfConvertBtn">📄 Convert to PDF</button>
    <div id="imgPdfResult"></div>
  `;let n=e.querySelector(`#imgPdfInput`),r=e.querySelector(`#imgPdfUpload`),i=e.querySelector(`#imgPdfFileList`),o=e.querySelector(`#imgPdfPreview`),s=e.querySelector(`#imgPdfConvertBtn`);r.addEventListener(`click`,()=>n.click()),n.addEventListener(`change`,e=>{t=Array.from(e.target.files),c()});function c(){if(t.length===0){i.innerHTML=``,o.innerHTML=``,s.classList.add(`hidden`);return}s.classList.remove(`hidden`),i.innerHTML=t.map((e,t)=>`
      <div class="file-item">
        <span class="file-name">${e.name}</span>
        <span class="file-size">${g(e.size)}</span>
        <button class="file-remove" data-index="${t}">✕</button>
      </div>
    `).join(``),i.querySelectorAll(`.file-remove`).forEach(e=>{e.addEventListener(`click`,()=>{t.splice(parseInt(e.dataset.index),1),c()})}),o.innerHTML=``,t.forEach(e=>{let t=document.createElement(`img`);t.src=URL.createObjectURL(e),t.onload=()=>URL.revokeObjectURL(t.src),o.appendChild(t)})}return s.addEventListener(`click`,async()=>{if(t.length!==0){s.textContent=`⏳ Converting...`,s.disabled=!0;try{let{jsPDF:n}=await a(async()=>{let{jsPDF:e}=await import(`https://esm.sh/jspdf@2.5.1`);return{jsPDF:e}},[]),r=new n,i=!0;for(let e of t){let t=await fe(e),n=await pe(t),a=r.internal.pageSize.getWidth(),o=r.internal.pageSize.getHeight(),s=a-20,c=o-20,l=n.naturalWidth,u=n.naturalHeight,d=Math.min(s/l,c/u);l*=d,u*=d;let f=(a-l)/2,p=(o-u)/2;i||r.addPage(),i=!1;let m=e.type===`image/png`?`PNG`:`JPEG`;r.addImage(t,m,f,p,l,u)}r.save(`images-converted.pdf`),m(`PDF saved successfully!`),e.querySelector(`#imgPdfResult`).innerHTML=`
        <div class="result-box">
          <div class="result-label">✅ PDF Created</div>
          <div class="result-detail">${t.length} image(s) converted to PDF and downloaded.</div>
        </div>
      `}catch(e){console.error(e),m(`Error creating PDF`)}finally{s.textContent=`📄 Convert to PDF`,s.disabled=!1}}}),e}function fe(e){return new Promise((t,n)=>{let r=new FileReader;r.onload=()=>t(r.result),r.onerror=n,r.readAsDataURL(e)})}function pe(e){return new Promise((t,n)=>{let r=new Image;r.onload=()=>t(r),r.onerror=n,r.src=e})}function me(){let e=document.createElement(`div`);e.className=`page-content tool-page`,e.innerHTML=`
    <h2>📑 PDF to Images</h2>
    <div class="file-upload" id="pdfUpload">
      <div class="upload-icon">📄</div>
      <div class="upload-text">Tap to select a PDF</div>
      <div class="upload-hint">Select a PDF file to extract pages</div>
    </div>
    <input type="file" id="pdfInput" accept=".pdf,application/pdf" style="display:none" />
    <div id="pdfFileName" class="text-sm text-muted mt-sm"></div>
    <button class="btn btn-primary mt-md hidden" id="pdfExtractBtn">🖼️ Extract Pages</button>
    <div id="pdfProgress" class="text-sm text-muted mt-sm"></div>
    <div class="image-preview-grid" id="pdfPagesPreview" style="grid-template-columns: 1fr 1fr;"></div>
  `;let t=e.querySelector(`#pdfInput`),n=e.querySelector(`#pdfUpload`),r=e.querySelector(`#pdfExtractBtn`),i=e.querySelector(`#pdfPagesPreview`),o=null;return n.addEventListener(`click`,()=>t.click()),t.addEventListener(`change`,t=>{o=t.target.files[0],o&&(e.querySelector(`#pdfFileName`).textContent=`Selected: ${o.name}`,r.classList.remove(`hidden`),i.innerHTML=``)}),r.addEventListener(`click`,async()=>{if(!o)return;r.textContent=`⏳ Extracting...`,r.disabled=!0,i.innerHTML=``;let t=e.querySelector(`#pdfProgress`);try{let e=await a(()=>import(`https://esm.sh/pdfjs-dist@4.0.379`),[]);e.GlobalWorkerOptions.workerSrc=`https://esm.sh/pdfjs-dist@4.0.379/build/pdf.worker.min.mjs`;let n=await o.arrayBuffer(),r=await e.getDocument({data:n}).promise,s=r.numPages;t.textContent=`Processing ${s} pages...`;for(let e=1;e<=s;e++){t.textContent=`Processing page ${e} of ${s}...`;let n=await r.getPage(e),a=n.getViewport({scale:1.5}),o=document.createElement(`canvas`),c=o.getContext(`2d`);o.width=a.width,o.height=a.height,await n.render({canvasContext:c,viewport:a}).promise;let l=document.createElement(`div`);l.style.cssText=`position:relative;`;let u=document.createElement(`img`);u.src=o.toDataURL(`image/png`),u.style.cssText=`width:100%;border-radius:var(--radius-sm);border:1px solid var(--color-border);`;let d=document.createElement(`button`);d.className=`btn btn-secondary btn-sm`,d.style.cssText=`margin-top:4px;`,d.textContent=`💾 Page ${e}`,d.addEventListener(`click`,()=>{let t=document.createElement(`a`);t.download=`page-${e}.png`,t.href=o.toDataURL(`image/png`),t.click()}),l.appendChild(u),l.appendChild(d),i.appendChild(l)}t.textContent=`✅ Done! ${s} pages extracted.`,m(`${s} pages extracted!`)}catch(e){console.error(e),t.textContent=`⚠️ Error processing PDF. Please try another file.`,m(`Error processing PDF`)}finally{r.textContent=`🖼️ Extract Pages`,r.disabled=!1}}),e}function he(){let e=document.createElement(`div`);e.className=`page-content tool-page`;let t=null,n=.7;e.innerHTML=`
    <h2>📦 Image Compressor</h2>
    <div class="file-upload" id="compressUpload">
      <div class="upload-icon">🖼️</div>
      <div class="upload-text">Tap to select an image</div>
      <div class="upload-hint">JPG, PNG, WebP supported</div>
    </div>
    <input type="file" id="compressInput" accept="image/*" style="display:none" />
    <div id="compressFileInfo" class="text-sm text-muted mt-sm"></div>
    <div class="range-group mt-md hidden" id="qualityGroup">
      <div class="range-header">
        <span>Quality</span>
        <span id="qualityValue">70%</span>
      </div>
      <input type="range" id="qualitySlider" min="10" max="95" value="70" step="5" />
    </div>
    <div class="form-group hidden" id="resizeGroup">
      <label>Max Width (optional)</label>
      <input type="number" class="form-input" id="compressMaxWidth" placeholder="e.g. 1920 (leave empty for original)" min="100" step="10" />
    </div>
    <button class="btn btn-primary mt-md hidden" id="compressBtn">📦 Compress Image</button>
    <div id="compressResult"></div>
  `;let r=e.querySelector(`#compressInput`),i=e.querySelector(`#compressUpload`),a=e.querySelector(`#qualitySlider`),o=e.querySelector(`#qualityValue`),s=e.querySelector(`#compressBtn`),c=e.querySelector(`#qualityGroup`),l=e.querySelector(`#resizeGroup`);return i.addEventListener(`click`,()=>r.click()),r.addEventListener(`change`,n=>{t=n.target.files[0],t&&(e.querySelector(`#compressFileInfo`).textContent=`Selected: ${t.name} (${g(t.size)})`,c.classList.remove(`hidden`),l.classList.remove(`hidden`),s.classList.remove(`hidden`),e.querySelector(`#compressResult`).innerHTML=``)}),a.addEventListener(`input`,e=>{n=parseInt(e.target.value)/100,o.textContent=`${e.target.value}%`}),s.addEventListener(`click`,async()=>{if(t){s.textContent=`⏳ Compressing...`,s.disabled=!0;try{let r=await _e(await ge(t)),i=document.createElement(`canvas`),a=i.getContext(`2d`),o=r.naturalWidth,s=r.naturalHeight,c=parseInt(e.querySelector(`#compressMaxWidth`).value);if(c&&c<o){let e=c/o;o=c,s=Math.round(s*e)}i.width=o,i.height=s,a.drawImage(r,0,0,o,s);let l=await new Promise(e=>{i.toBlob(e,`image/jpeg`,n)}),u=t.size,d=l.size,f=((1-d/u)*100).toFixed(1),p=URL.createObjectURL(l);e.querySelector(`#compressResult`).innerHTML=`
        <div class="result-box">
          <div class="result-label">✅ Compression Complete</div>
          <div class="result-grid">
            <div class="result-item">
              <div class="result-label">Original</div>
              <div class="result-value">${g(u)}</div>
            </div>
            <div class="result-item">
              <div class="result-label">Compressed</div>
              <div class="result-value">${g(d)}</div>
            </div>
          </div>
          <div class="result-detail mt-md" style="text-align:center;font-size:var(--font-size-lg);font-weight:700;color:var(--color-success);">
            ${f}% smaller
          </div>
          <div style="text-align:center;margin-top:var(--spacing-md);">
            <img src="${p}" style="max-width:100%;border-radius:var(--radius-sm);border:1px solid var(--color-border);" />
          </div>
          <button class="btn btn-success mt-md" id="downloadCompressed">💾 Download Compressed</button>
        </div>
      `,e.querySelector(`#downloadCompressed`).addEventListener(`click`,()=>{let e=document.createElement(`a`);e.download=`compressed-${t.name.replace(/\.[^.]+$/,``)}.jpg`,e.href=p,e.click()})}catch(e){console.error(e),m(`Error compressing image`)}finally{s.textContent=`📦 Compress Image`,s.disabled=!1}}}),e}function ge(e){return new Promise((t,n)=>{let r=new FileReader;r.onload=()=>t(r.result),r.onerror=n,r.readAsDataURL(e)})}function _e(e){return new Promise((t,n)=>{let r=new Image;r.onload=()=>t(r),r.onerror=n,r.src=e})}function ve(){let e=document.createElement(`div`);e.className=`page-content tool-page`,e.innerHTML=`
    <h2>🖼️ Image Resizer</h2>
    <div class="form-group">
      <label>Select Image</label>
      <input type="file" id="resizeInput" class="form-input" accept="image/*">
    </div>

    <div class="form-row">
      <div class="form-group">
        <label>Width (px)</label>
        <input type="number" id="resWidth" class="form-input" value="800">
      </div>
      <div class="form-group">
        <label>Height (px)</label>
        <input type="number" id="resHeight" class="form-input" value="600">
      </div>
    </div>
    
    <div class="toggle-row mb-lg">
      <label>Maintain Aspect Ratio</label>
      <div class="toggle active" id="aspectToggle"></div>
    </div>

    <button class="btn btn-primary" id="processResize">🖼️ Resize & Download</button>

    <div id="resizePreview" class="mt-xl text-center"></div>
  `;let t=e.querySelector(`#resizeInput`),n=e.querySelector(`#aspectToggle`),r=e.querySelector(`#resWidth`),i=e.querySelector(`#resHeight`);n.onclick=()=>n.classList.toggle(`active`);let a=1;return t.onchange=e=>{let t=e.target.files[0];if(!t)return;let n=new Image;n.src=URL.createObjectURL(t),n.onload=()=>{a=n.width/n.height,r.value=n.width,i.value=n.height}},r.oninput=()=>{n.classList.contains(`active`)&&(i.value=Math.round(r.value/a))},i.oninput=()=>{n.classList.contains(`active`)&&(r.value=Math.round(i.value*a))},e.querySelector(`#processResize`).onclick=()=>{let e=t.files[0];if(!e){alert(`Please select an image`);return}let n=document.createElement(`canvas`),a=n.getContext(`2d`),o=new Image;o.src=URL.createObjectURL(e),o.onload=()=>{n.width=parseInt(r.value),n.height=parseInt(i.value),a.drawImage(o,0,0,n.width,n.height);let t=document.createElement(`a`);t.download=`resized_${e.name}`,t.href=n.toDataURL(`image/png`),t.click(),m(`Image resized and downloaded!`)}},e}function ye(){let e=document.createElement(`div`);e.className=`page-content tool-page`,e.innerHTML=`
    <h2>✂️ Image Cropper</h2>
    <p class="text-sm text-center mb-lg">Simple square crop for profile pictures.</p>
    
    <div class="form-group">
      <label>Select Image</label>
      <input type="file" id="cropInput" class="form-input" accept="image/*">
    </div>

    <div id="cropPreviewContainer" class="mt-xl hidden" style="position: relative; max-width: 100%; overflow: hidden; border-radius: var(--radius-md); border: 2px solid var(--color-border);">
        <img id="sourceImg" style="width: 100%; display: block;">
        <div id="cropOverlay" style="position: absolute; border: 2px dashed white; box-shadow: 0 0 0 9999px rgba(0,0,0,0.5); cursor: move; width: 150px; height: 150px; top: 50px; left: 50px;"></div>
    </div>

    <button class="btn btn-primary mt-xl" id="doCrop">✂️ Crop & Download</button>
  `;let t=e.querySelector(`#cropInput`),n=e.querySelector(`#cropPreviewContainer`),r=e.querySelector(`#sourceImg`),i=e.querySelector(`#cropOverlay`),a=!1,o,s,c,l;return t.onchange=e=>{let t=e.target.files[0];t&&(r.src=URL.createObjectURL(t),n.classList.remove(`hidden`))},i.onmousedown=e=>{a=!0,o=e.clientX,s=e.clientY,c=i.offsetLeft,l=i.offsetTop},window.onmousemove=e=>{if(!a)return;let t=e.clientX-o,r=e.clientY-s,u=Math.max(0,Math.min(n.offsetWidth-i.offsetWidth,c+t)),d=Math.max(0,Math.min(n.offsetHeight-i.offsetHeight,l+r));i.style.left=u+`px`,i.style.top=d+`px`},window.onmouseup=()=>a=!1,e.querySelector(`#doCrop`).onclick=()=>{if(!r.src)return;let e=document.createElement(`canvas`),t=e.getContext(`2d`),n=r.naturalWidth/r.clientWidth,a=i.offsetLeft*n,o=i.offsetTop*n,s=i.offsetWidth*n;e.width=s,e.height=s,t.drawImage(r,a,o,s,s,0,0,s,s);let c=document.createElement(`a`);c.download=`cropped_${Date.now()}.png`,c.href=e.toDataURL(`image/png`),c.click(),m(`Image cropped!`)},e}function be(){let e=document.createElement(`div`);return e.className=`page-content tool-page`,e.innerHTML=`
    <h2>🔄 Image Format Converter</h2>
    <div class="form-group">
      <label>Select Image</label>
      <input type="file" id="convInput" class="form-input" accept="image/*">
    </div>

    <div class="form-group">
      <label>Convert To</label>
      <select id="convFormat" class="form-select">
        <option value="image/png">PNG</option>
        <option value="image/jpeg">JPEG</option>
        <option value="image/webp">WebP</option>
      </select>
    </div>

    <button class="btn btn-primary" id="processConv">🔄 Convert & Download</button>

    <div id="convPreview" class="mt-xl text-center"></div>
  `,e.querySelector(`#processConv`).onclick=()=>{let t=e.querySelector(`#convInput`).files[0],n=e.querySelector(`#convFormat`).value;if(!t){alert(`Please select an image`);return}let r=document.createElement(`canvas`),i=r.getContext(`2d`),a=new Image;a.src=URL.createObjectURL(t),a.onload=()=>{r.width=a.width,r.height=a.height,i.drawImage(a,0,0);let e=n.split(`/`)[1],t=document.createElement(`a`);t.download=`converted_${Date.now()}.${e}`,t.href=r.toDataURL(n,.9),t.click(),m(`Converted to ${e.toUpperCase()}`)}},e}function xe(){let e=document.createElement(`div`);e.className=`page-content tool-page`,e.innerHTML=`
    <h2>📄 PDF Merger</h2>
    <div class="form-group">
      <label>Select Multiple PDFs</label>
      <input type="file" id="pdfFiles" class="form-input" accept="application/pdf" multiple>
    </div>

    <div id="fileList" class="tools-list mb-xl"></div>

    <button class="btn btn-primary" id="processMerge">📄 Merge & Download</button>
    
    <p class="text-xs text-muted mt-md italic text-center">
      *Processing is done locally on your device.
    </p>
  `;let t=e.querySelector(`#pdfFiles`),n=e.querySelector(`#fileList`);return t.onchange=e=>{n.innerHTML=Array.from(e.target.files).map(e=>`
      <div class="tool-card uname-item" style="padding: 10px 15px">
        <span class="text-sm truncate">${e.name}</span>
        <span class="text-xs text-muted">${(e.size/1024).toFixed(0)} KB</span>
      </div>
    `).join(``)},e.querySelector(`#processMerge`).onclick=async()=>{let e=t.files;if(e.length<2){alert(`Select at least 2 PDF files to merge.`);return}m(`Merging PDFs... please wait.`);try{let{PDFDocument:t}=await a(async()=>{let{PDFDocument:e}=await import(`https://cdn.skypack.dev/pdf-lib`);return{PDFDocument:e}},[]),n=await t.create();for(let r of e){let e=await r.arrayBuffer(),i=await t.load(e);(await n.copyPages(i,i.getPageIndices())).forEach(e=>n.addPage(e))}let r=await n.save(),i=new Blob([r],{type:`application/pdf`}),o=document.createElement(`a`);o.href=URL.createObjectURL(i),o.download=`merged_${Date.now()}.pdf`,o.click(),m(`PDFs merged successfully!`)}catch(e){console.error(e),m(`Error merging PDFs. Ensure they are valid.`)}},e}function Se(){let e=document.createElement(`div`);return e.className=`page-content tool-page`,e.innerHTML=`
    <h2>📄 PDF Splitter</h2>
    <div class="form-group">
      <label>Select PDF to Split</label>
      <input type="file" id="splitInput" class="form-input" accept="application/pdf">
    </div>

    <div class="form-group">
      <label>Pages to extract (e.g. 1-3, 5)</label>
      <input type="text" id="splitPages" class="form-input" placeholder="e.g. 1, 2, 5">
    </div>

    <button class="btn btn-primary" id="processSplit">📄 Split & Download</button>
  `,e.querySelector(`#processSplit`).onclick=async()=>{let t=e.querySelector(`#splitInput`).files[0],n=e.querySelector(`#splitPages`).value.trim();if(!t||!n){alert(`Please select a file and specify pages.`);return}m(`Splitting PDF... please wait.`);try{let{PDFDocument:e}=await a(async()=>{let{PDFDocument:e}=await import(`https://cdn.skypack.dev/pdf-lib`);return{PDFDocument:e}},[]),r=await t.arrayBuffer(),i=await e.load(r),o=await e.create(),s=n.split(`,`).map(e=>parseInt(e.trim())-1);(await o.copyPages(i,s)).forEach(e=>o.addPage(e));let c=await o.save(),l=new Blob([c],{type:`application/pdf`}),u=document.createElement(`a`);u.href=URL.createObjectURL(l),u.download=`extracted_${Date.now()}.pdf`,u.click(),m(`PDF split successfully!`)}catch(e){console.error(e),m(`Error splitting PDF. Check page numbers.`)}},e}function Ce(){let e=document.createElement(`div`);e.className=`page-content tool-page`,e.innerHTML=`
    <h2>🖼️ Image Metadata Viewer</h2>
    <div class="form-group">
      <label>Select Image</label>
      <input type="file" id="exifInput" class="form-input" accept="image/*">
    </div>

    <div id="exifResult" class="mt-xl hidden">
        <div class="result-box">
            <div class="result-label">File Name</div>
            <div id="exif_name" class="result-value" style="font-size: 1rem"></div>
        </div>
        <div class="result-grid mt-md">
            <div class="result-item">
                <div class="result-label">Size</div>
                <div id="exif_size" class="result-value" style="font-size: 1.1rem"></div>
            </div>
            <div class="result-item">
                <div class="result-label">Type</div>
                <div id="exif_type" class="result-value" style="font-size:1.1rem"></div>
            </div>
            <div class="result-item">
                <div class="result-label">Dimensions</div>
                <div id="exif_dim" class="result-value" style="font-size:1.1rem"></div>
            </div>
            <div class="result-item">
                <div class="result-label">Last Modified</div>
                <div id="exif_date" class="result-value" style="font-size:1rem"></div>
            </div>
        </div>
    </div>
  `;let t=e.querySelector(`#exifInput`),n=e.querySelector(`#exifResult`);return t.onchange=t=>{let r=t.target.files[0];if(!r)return;n.classList.remove(`hidden`),e.querySelector(`#exif_name`).textContent=r.name,e.querySelector(`#exif_size`).textContent=(r.size/1024).toFixed(1)+` KB`,e.querySelector(`#exif_type`).textContent=r.type,e.querySelector(`#exif_date`).textContent=new Date(r.lastModified).toLocaleDateString();let i=new Image;i.src=URL.createObjectURL(r),i.onload=()=>{e.querySelector(`#exif_dim`).textContent=`${i.width} x ${i.height}`}},e}function we(){let e=document.createElement(`div`);e.className=`page-content tool-page`;let t=1500,n=t,r=!1,i=!0,a=null,o=0;e.innerHTML=`
    <h2>⏱️ Pomodoro Timer</h2>
    <div class="timer-display">
      <div class="timer-label" id="pomodoroLabel">Focus Time</div>
      <div class="timer-time" id="pomodoroTime">25:00</div>
      <div class="progress-bar">
        <div class="progress-fill" id="pomodoroProgress" style="width: 100%"></div>
      </div>
    </div>
    <div class="timer-controls">
      <button class="btn btn-primary" id="pomodoroStartBtn">▶️ Start</button>
      <button class="btn btn-secondary" id="pomodoroResetBtn">🔄 Reset</button>
    </div>
    <div class="result-grid mt-lg">
      <div class="result-item">
        <div class="result-label">Mode</div>
        <div class="result-value" id="pomodoroMode" style="font-size:var(--font-size-base)">🎯 Focus</div>
      </div>
      <div class="result-item">
        <div class="result-label">Sessions Done</div>
        <div class="result-value" id="pomodoroSessions">0</div>
      </div>
    </div>
  `;let s=e.querySelector(`#pomodoroTime`),c=e.querySelector(`#pomodoroLabel`),l=e.querySelector(`#pomodoroProgress`),u=e.querySelector(`#pomodoroStartBtn`),d=e.querySelector(`#pomodoroResetBtn`),f=e.querySelector(`#pomodoroMode`),p=e.querySelector(`#pomodoroSessions`);function m(e){let t=Math.floor(e/60),n=e%60;return`${t.toString().padStart(2,`0`)}:${n.toString().padStart(2,`0`)}`}function h(){s.textContent=m(n);let e=n/(i?t:300)*100;l.style.width=`${e}%`}function g(){try{let e=new(window.AudioContext||window.webkitAudioContext),t=e.createOscillator(),n=e.createGain();t.connect(n),n.connect(e.destination),t.frequency.value=i?800:600,t.type=`sine`,n.gain.value=.3,t.start(),n.gain.exponentialRampToValueAtTime(.01,e.currentTime+.8),t.stop(e.currentTime+.8)}catch{}}function _(){n>0?(n--,h()):(g(),i?(o++,p.textContent=o,i=!1,n=300,c.textContent=`Break Time ☕`,f.textContent=`☕ Break`):(i=!0,n=t,c.textContent=`Focus Time`,f.textContent=`🎯 Focus`),h())}u.addEventListener(`click`,()=>{r?(clearInterval(a),r=!1,u.textContent=`▶️ Resume`):(a=setInterval(_,1e3),r=!0,u.textContent=`⏸️ Pause`)}),d.addEventListener(`click`,()=>{clearInterval(a),r=!1,i=!0,n=t,c.textContent=`Focus Time`,f.textContent=`🎯 Focus`,u.textContent=`▶️ Start`,h()});let v=new MutationObserver(()=>{document.contains(e)||(clearInterval(a),v.disconnect())});return v.observe(document.body,{childList:!0,subtree:!0}),h(),e}function Te(){let e=document.createElement(`div`);e.className=`page-content tool-page`;let t=p(`notes`,[]),n=null;function r(){n===null?i():a()}function i(){e.innerHTML=`
      <h2>📒 Quick Notes</h2>
      <button class="btn btn-primary mb-md" id="newNoteBtn">➕ New Note</button>
      ${t.length===0?`
        <div class="empty-state">
          <div class="empty-icon">📝</div>
          <div class="empty-text">No notes yet. Create your first note!</div>
        </div>
      `:`
        <div class="notes-list">
          ${t.sort((e,t)=>t.timestamp-e.timestamp).map(e=>`
            <div class="note-card" data-id="${e.id}">
              <div class="note-title">${J(e.title||`Untitled`)}</div>
              <div class="note-preview">${J(e.content||`Empty note`)}</div>
              <div class="note-date">${Y(e.timestamp)}</div>
            </div>
          `).join(``)}
        </div>
      `}
    `,e.querySelector(`#newNoteBtn`).addEventListener(`click`,()=>{let e={id:_(),title:``,content:``,timestamp:Date.now()};t.unshift(e),f(`notes`,t),n=e.id,r()}),e.querySelectorAll(`.note-card`).forEach(e=>{e.addEventListener(`click`,()=>{n=e.dataset.id,r()})})}function a(){let i=t.find(e=>e.id===n);if(!i){n=null,r();return}e.innerHTML=`
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:var(--spacing-md);">
        <button class="btn btn-secondary btn-sm" id="noteBackBtn" style="width:auto;">← Back</button>
        <button class="btn btn-danger btn-sm" id="noteDeleteBtn" style="width:auto;">🗑️ Delete</button>
      </div>
      <div class="form-group">
        <input type="text" class="form-input" id="noteTitleInput" placeholder="Note title..." value="${Ee(i.title)}" />
      </div>
      <div class="form-group">
        <textarea class="form-textarea" id="noteContentInput" rows="12" placeholder="Write your note here...">${J(i.content)}</textarea>
      </div>
      <div class="text-sm text-muted">Last edited: ${Y(i.timestamp)}</div>
    `;let a=e.querySelector(`#noteTitleInput`),o=e.querySelector(`#noteContentInput`),s;function c(){clearTimeout(s),s=setTimeout(()=>{i.title=a.value,i.content=o.value,i.timestamp=Date.now(),f(`notes`,t)},500)}a.addEventListener(`input`,c),o.addEventListener(`input`,c),e.querySelector(`#noteBackBtn`).addEventListener(`click`,()=>{i.title=a.value,i.content=o.value,i.timestamp=Date.now(),f(`notes`,t),n=null,r()}),e.querySelector(`#noteDeleteBtn`).addEventListener(`click`,()=>{t=t.filter(e=>e.id!==n),f(`notes`,t),n=null,m(`Note deleted`),r()})}return r(),e}function J(e){let t=document.createElement(`div`);return t.textContent=e,t.innerHTML}function Ee(e){return e.replace(/"/g,`&quot;`).replace(/'/g,`&#39;`)}function Y(e){let t=new Date(e),n=new Date-t;return n<6e4?`Just now`:n<36e5?`${Math.floor(n/6e4)}m ago`:n<864e5?`${Math.floor(n/36e5)}h ago`:t.toLocaleDateString(`en-IN`,{day:`numeric`,month:`short`,year:`numeric`})}function De(){let e=document.createElement(`div`);e.className=`page-content tool-page`;let t=p(`study_flashcards`,[]),n=0,r=!1,i=()=>{let i=e.querySelector(`#flashcard`),a=e.querySelector(`#cardCounter`);if(t.length===0){i.innerHTML=`<div class="text-center p-xl">No cards yet. Add some below!</div>`,a.textContent=`0 / 0`;return}let o=t[n];i.innerHTML=`
      <div class="card-inner ${r?`flipped`:``}">
        <div class="card-front">${o.front}</div>
        <div class="card-back">${o.back}</div>
      </div>
    `,a.textContent=`${n+1} / ${t.length}`};return e.innerHTML=`
    <h2>🗂️ Flashcards Maker</h2>
    
    <div class="flashcard-container mb-lg">
      <div id="flashcard" class="flashcard-box"></div>
      <div class="text-center mt-sm" id="cardCounter">0 / 0</div>
    </div>

    <div class="grid-3-col mb-xl">
      <button class="btn btn-secondary" id="prevCard">← Prev</button>
      <button class="btn btn-primary" id="flipCard">🔄 Flip</button>
      <button class="btn btn-secondary" id="nextCard">Next →</button>
    </div>

    <div class="note-card">
      <div class="note-title">Add New Card</div>
      <div class="form-group mt-sm">
        <label>Front (Question)</label>
        <input type="text" id="cardFront" class="form-input" placeholder="e.g. 7 * 8">
      </div>
      <div class="form-group">
        <label>Back (Answer)</label>
        <input type="text" id="cardBack" class="form-input" placeholder="e.g. 56">
      </div>
      <button class="btn btn-success" id="addCard">➕ Add Card</button>
    </div>

    <button class="btn btn-danger mt-md" id="clearCards">🗑️ Clear All Cards</button>

    <style>
      .flashcard-box {
        perspective: 1000px;
        height: 200px;
        cursor: pointer;
      }
      .card-inner {
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform 0.6s;
        transform-style: preserve-3d;
        background: var(--color-bg-card);
        border: 2px solid var(--color-primary);
        border-radius: var(--radius-lg);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
        font-weight: 600;
        padding: 20px;
      }
      .card-inner.flipped {
        transform: rotateY(180deg);
      }
      .card-front, .card-back {
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .card-back {
        transform: rotateY(180deg);
        color: var(--color-accent);
      }
    </style>
  `,e.querySelector(`#flipCard`).onclick=()=>{r=!r,i()},e.querySelector(`#flashcard`).onclick=()=>{r=!r,i()},e.querySelector(`#prevCard`).onclick=()=>{t.length!==0&&(n=(n-1+t.length)%t.length,r=!1,i())},e.querySelector(`#nextCard`).onclick=()=>{t.length!==0&&(n=(n+1)%t.length,r=!1,i())},e.querySelector(`#addCard`).onclick=()=>{let n=e.querySelector(`#cardFront`).value.trim(),r=e.querySelector(`#cardBack`).value.trim();!n||!r||(t.push({front:n,back:r}),f(`study_flashcards`,t),e.querySelector(`#cardFront`).value=``,e.querySelector(`#cardBack`).value=``,m(`Card added!`),i())},e.querySelector(`#clearCards`).onclick=()=>{confirm(`Delete all flashcards?`)&&(t=[],f(`study_flashcards`,t),n=0,i())},i(),e}function Oe(){let e=document.createElement(`div`);e.className=`page-content tool-page`;let t=p(`study_logs`,[]),n=()=>{let n=e.querySelector(`#logList`);if(t.length===0){n.innerHTML=`<p class="text-center text-muted p-md">No sessions logged yet.</p>`;return}n.innerHTML=t.slice().reverse().map((e,t)=>`
      <div class="note-card">
        <div class="note-title">${e.subject}</div>
        <div class="note-preview">${e.hours} hours on ${e.date}</div>
        <div class="note-date">${e.notes||`No notes`}</div>
      </div>
    `).join(``)};return e.innerHTML=`
    <h2>📚 Study Session Tracker</h2>
    
    <div class="note-card mb-lg">
      <div class="note-title">Log New Session</div>
      <div class="form-group mt-sm">
        <label>Subject</label>
        <input type="text" id="studySubject" class="form-input" placeholder="e.g. Mathematics">
      </div>
      <div class="form-row">
        <div class="form-group">
          <label>Hours</label>
          <input type="number" id="studyHours" class="form-input" value="1" step="0.5">
        </div>
        <div class="form-group">
          <label>Date</label>
          <input type="date" id="studyDate" class="form-input" value="${new Date().toISOString().split(`T`)[0]}">
        </div>
      </div>
      <div class="form-group">
        <label>Notes (Optional)</label>
        <input type="text" id="studyNotes" class="form-input" placeholder="What did you learn?">
      </div>
      <button class="btn btn-primary" id="addLog">➕ Log Session</button>
    </div>

    <div class="mt-xl">
      <h3>Recent Sessions</h3>
      <div id="logList" class="notes-list mt-md"></div>
    </div>

    <button class="btn btn-danger mt-xl" id="clearLogs">🗑️ Clear History</button>
  `,e.querySelector(`#addLog`).onclick=()=>{let r=e.querySelector(`#studySubject`).value.trim(),i=e.querySelector(`#studyHours`).value,a=e.querySelector(`#studyDate`).value,o=e.querySelector(`#studyNotes`).value.trim();!r||!i||!a||(t.push({subject:r,hours:i,date:a,notes:o}),f(`study_logs`,t),e.querySelector(`#studySubject`).value=``,m(`Session logged!`),n())},e.querySelector(`#clearLogs`).onclick=()=>{confirm(`Delete all study logs?`)&&(t=[],f(`study_logs`,t),n())},n(),e}function ke(){let e=document.createElement(`div`);e.className=`page-content tool-page`;let t=p(`study_habits`,[]),n=new Date().toISOString().split(`T`)[0],r=()=>{let i=e.querySelector(`#habitList`);if(t.length===0){i.innerHTML=`<p class="text-center text-muted p-md">No habits added. Start tracking one below!</p>`;return}i.innerHTML=t.map((e,t)=>{let r=e.history&&e.history[n];return`
          <div class="note-card mb-sm">
            <div class="toggle-row">
              <div class="note-title">${e.name}</div>
              <button class="btn btn-sm ${r?`btn-success`:`btn-secondary`}" data-hidx="${t}">
                ${r?`✅ Done`:`⭕ Mark`}
              </button>
            </div>
          </div>
        `}).join(``),i.querySelectorAll(`[data-hidx]`).forEach(e=>{e.onclick=()=>{let i=e.dataset.hidx;t[i].history||(t[i].history={}),t[i].history[n]=!t[i].history[n],f(`study_habits`,t),r(),t[i].history[n]&&m(`Great job! Habit completed for today.`)}})};return e.innerHTML=`
    <h2>✅ Habit Tracker</h2>
    
    <div id="habitList" class="notes-list mb-xl"></div>

    <div class="note-card">
      <div class="note-title">New Habit</div>
      <div class="form-group mt-sm">
        <label>Habit Name</label>
        <input type="text" id="habitName" class="form-input" placeholder="e.g. Read for 30 mins">
      </div>
      <button class="btn btn-primary" id="addHabit">➕ Add Habit</button>
    </div>

    <button class="btn btn-danger mt-xl" id="clearHabits">🗑️ Clear All Habits</button>
  `,e.querySelector(`#addHabit`).onclick=()=>{let n=e.querySelector(`#habitName`).value.trim();n&&(t.push({name:n,history:{}}),f(`study_habits`,t),e.querySelector(`#habitName`).value=``,m(`Habit added!`),r())},e.querySelector(`#clearHabits`).onclick=()=>{confirm(`Delete all habits?`)&&(t=[],f(`study_habits`,t),r())},r(),e}function Ae(){let e=document.createElement(`div`);e.className=`page-content tool-page`;let t=p(`study_quizzes`,[]),n=null,r=0,i=0,a=e=>{n=e,r=0,i=0,o()},o=()=>{let t=n.questions[r];e.innerHTML=`
      <h2>📝 Quiz: ${n.name}</h2>
      <div class="result-box mb-lg">
        <div class="result-label">Question ${r+1} of ${n.questions.length}</div>
        <div class="result-value" style="font-size: 1.25rem">${t.question}</div>
      </div>
      
      <div class="tools-list">
        ${t.options.map((e,t)=>`
          <button class="btn btn-secondary mb-sm text-left quiz-opt" data-idx="${t}">
            ${String.fromCharCode(65+t)}. ${e}
          </button>
        `).join(``)}
      </div>
    `,e.querySelectorAll(`.quiz-opt`).forEach(e=>{e.onclick=()=>{parseInt(e.dataset.idx)===t.correct?(i++,m(`Correct! 🎓`)):m(`Wrong! Correct was: ${t.options[t.correct]}`),r++,r<n.questions.length?o():s()}})},s=()=>{e.innerHTML=`
      <h2>Quiz Complete!</h2>
      <div class="result-box text-center">
        <div class="result-label">Your Score</div>
        <div class="result-value">${i} / ${n.questions.length}</div>
        <div class="result-detail">${(i/n.questions.length*100).toFixed(0)}% accuracy</div>
      </div>
      <button class="btn btn-primary mt-xl" id="backToQuizzes">Back to Quizzes</button>
    `,e.querySelector(`#backToQuizzes`).onclick=c},c=()=>{e.innerHTML=`
      <h2>📝 Random Quiz Generator</h2>
      
      <div id="quizList" class="tools-list mb-xl">
        ${t.length===0?`<p class="text-center text-muted">No quizzes created yet.</p>`:t.map((e,t)=>`
            <div class="tool-card play-quiz" data-idx="${t}">
              <div class="tool-icon">▶️</div>
              <div class="tool-info">
                <div class="tool-name">${e.name}</div>
                <div class="tool-desc">${e.questions.length} questions</div>
              </div>
            </div>
          `).join(``)}
      </div>

      <div class="note-card">
        <div class="note-title">Create New Quiz</div>
        <p class="text-xs text-muted mb-sm">Add questions one by one below.</p>
        <div class="form-group">
          <label>Quiz Name</label>
          <input type="text" id="newQuizName" class="form-input" placeholder="e.g. Science Basics">
        </div>
        <button class="btn btn-success" id="startCreate">➕ New Quiz</button>
      </div>
    `,e.querySelectorAll(`.play-quiz`).forEach(e=>{e.onclick=()=>a(t[e.dataset.idx])}),e.querySelector(`#startCreate`).onclick=l},l=()=>{let n=e.querySelector(`#newQuizName`).value.trim()||`Untitled Quiz`,r=[],i=()=>{e.innerHTML=`
        <h2>Creating: ${n}</h2>
        <p class="text-sm mb-md">Added ${r.length} questions so far.</p>
        
        <div class="note-card">
          <div class="form-group">
            <label>Question</label>
            <input type="text" id="q_text" class="form-input">
          </div>
          <div class="form-group">
            <label>Option A (Correct One)</label>
            <input type="text" id="q_opt0" class="form-input">
          </div>
          <div class="form-group">
            <label>Option B</label>
            <input type="text" id="q_opt1" class="form-input">
          </div>
          <button class="btn btn-success" id="addQuestion">➕ Add Question</button>
        </div>

        <div class="btn-row mt-xl">
          <button class="btn btn-primary" id="saveQuiz">💾 Finish & Save</button>
          <button class="btn btn-secondary" id="cancelQuiz">Cancel</button>
        </div>
      `,e.querySelector(`#addQuestion`).onclick=()=>{let t=e.querySelector(`#q_text`).value.trim(),n=e.querySelector(`#q_opt0`).value.trim(),a=e.querySelector(`#q_opt1`).value.trim();if(!t||!n||!a)return;r.push({question:t,options:[n,a],correct:0});let o=r[r.length-1];Math.random()>.5&&([o.options[0],o.options[1]]=[o.options[1],o.options[0]],o.correct=1),i()},e.querySelector(`#saveQuiz`).onclick=()=>{r.length!==0&&(t.push({name:n,questions:r}),f(`study_quizzes`,t),m(`Quiz saved!`),c())},e.querySelector(`#cancelQuiz`).onclick=c};i()};return c(),e}function je(){let e=document.createElement(`div`);e.className=`page-content tool-page`;let t=null,n=0,r=()=>{let t=Math.floor(n/3600),r=Math.floor(n%3600/60),i=n%60;e.querySelector(`#examTime`).textContent=`${t.toString().padStart(2,`0`)}:${r.toString().padStart(2,`0`)}:${i.toString().padStart(2,`0`)}`},i=e=>{clearInterval(t),n=e*60,r(),t=setInterval(()=>{n--,r(),n===300&&(m(`⚠️ 5 minutes remaining!`),`vibrate`in navigator&&navigator.vibrate([200,100,200])),n<=0&&(clearInterval(t),m(`⌛ Time is up! Stop writing.`),`vibrate`in navigator&&navigator.vibrate([1e3,500,1e3]))},1e3)};return e.innerHTML=`
    <h2>⌛ Exam Countdown Timer</h2>
    
    <div class="timer-display">
      <div class="timer-time" id="examTime" style="font-size: 3.5rem">00:00:00</div>
      <div class="timer-label">TIME REMAINING</div>
    </div>

    <div class="grid-3-col mt-xl">
      <button class="btn btn-secondary" data-time="30">30m</button>
      <button class="btn btn-secondary" data-time="60">1h</button>
      <button class="btn btn-secondary" data-time="90">1.5h</button>
      <button class="btn btn-secondary" data-time="120">2h</button>
      <button class="btn btn-secondary" data-time="150">2.5h</button>
      <button class="btn btn-secondary" data-time="180">3h</button>
    </div>

    <div class="btn-row mt-lg">
      <button class="btn btn-danger hidden" id="stopExam">🛑 End Session</button>
    </div>

    <div class="result-box mt-xl">
      <div class="result-label">Tip</div>
      <p class="text-sm">Practice with a timer to improve your speed and stress management during actual exams.</p>
    </div>
  `,e.querySelectorAll(`[data-time]`).forEach(t=>{t.onclick=()=>{i(parseInt(t.dataset.time)),e.querySelector(`#stopExam`).classList.remove(`hidden`)}}),e.querySelector(`#stopExam`).onclick=()=>{clearInterval(t),n=0,r(),e.querySelector(`#stopExam`).classList.add(`hidden`)},e}function Me(){let e=document.createElement(`div`);e.className=`page-content tool-page`;let t=p(`study_checklist`,[]),n=()=>{let r=e.querySelector(`#checkList`);if(t.length===0){r.innerHTML=`<p class="text-center text-muted p-md">No tasks in your checklist.</p>`;return}r.innerHTML=t.map((e,t)=>`
      <div class="tool-card uname-item ${e.done?`opacity-50`:``}" style="padding: 10px 15px">
        <div class="tool-info" style="flex-direction: row; align-items: center; gap: 10px">
          <input type="checkbox" class="task-check" data-idx="${t}" ${e.done?`checked`:``}>
          <div class="tool-name" style="font-size: 1rem; ${e.done?`text-decoration: line-through`:``}">${e.text}</div>
        </div>
        <button class="btn btn-sm btn-danger del-task" data-idx="${t}">🗑️</button>
      </div>
    `).join(``),r.querySelectorAll(`.task-check`).forEach(e=>{e.onchange=()=>{let r=e.dataset.idx;t[r].done=e.checked,f(`study_checklist`,t),n()}}),r.querySelectorAll(`.del-task`).forEach(e=>{e.onclick=()=>{t.splice(e.dataset.idx,1),f(`study_checklist`,t),n()}})};return e.innerHTML=`
    <h2>📝 Study Checklist</h2>
    
    <div class="form-row mb-lg">
      <input type="text" id="taskInput" class="form-input" placeholder="Add a new task...">
      <button class="btn btn-primary" id="addTask">➕</button>
    </div>

    <div id="checkList" class="tools-list mb-xl"></div>
    
    <button class="btn btn-danger mt-xl" id="clearCheck">🗑️ Clear All Tasks</button>
  `,e.querySelector(`#addTask`).onclick=()=>{let r=e.querySelector(`#taskInput`).value.trim();r&&(t.push({text:r,done:!1}),f(`study_checklist`,t),e.querySelector(`#taskInput`).value=``,n())},e.querySelector(`#clearCheck`).onclick=()=>{confirm(`Delete all tasks?`)&&(t=[],f(`study_checklist`,t),n())},n(),e}function Ne(){let e=document.createElement(`div`);e.className=`page-content tool-page`;let t=new Date().toDateString(),n=p(`daily_goal_data`,{date:``,goal:``,done:!1});n.date!==t&&(n={date:t,goal:``,done:!1},f(`daily_goal_data`,n));let r=()=>{let t=e.querySelector(`#goalContainer`);n.goal?(t.innerHTML=`
        <div class="result-box ${n.done?`opacity-50`:``}">
          <div class="result-label">TODAY'S #1 GOAL</div>
          <div class="result-value" style="font-size: 1.5rem; text-decoration: ${n.done?`line-through`:`none`}">${n.goal}</div>
          <button class="btn ${n.done?`btn-secondary`:`btn-success`} mt-lg" id="toggleGoal">
            ${n.done?`⭕ Mark Incomplete`:`✅ Mark Complete`}
          </button>
        </div>
        <button class="btn btn-sm btn-text mt-md" id="resetGoal">Edit Goal</button>
      `,t.querySelector(`#toggleGoal`).onclick=()=>{n.done=!n.done,f(`daily_goal_data`,n),r(),n.done&&m(`🎉 Goal Achieved! Great job.`)},t.querySelector(`#resetGoal`).onclick=()=>{n.goal=``,f(`daily_goal_data`,n),r()}):(t.innerHTML=`
        <div class="note-card">
          <div class="note-title">What is your #1 goal today?</div>
          <input type="text" id="goalInput" class="form-input mt-sm" placeholder="e.g. Finish chemistry project">
          <button class="btn btn-primary mt-md" id="setGoal">🎯 Set Daily Goal</button>
        </div>
      `,t.querySelector(`#setGoal`).onclick=()=>{let e=t.querySelector(`#goalInput`).value.trim();e&&(n.goal=e,f(`daily_goal_data`,n),r())})};return e.innerHTML=`
    <h2>🎯 Daily Goal Tracker</h2>
    <p class="text-sm text-center text-muted mb-lg">Focus on one big thing and get it done.</p>
    <div id="goalContainer"></div>
  `,r(),e}var X={length:{label:`📏 Length`,units:[`Meter`,`Kilometer`,`Centimeter`,`Millimeter`,`Mile`,`Yard`,`Foot`,`Inch`],factors:{Meter:1,Kilometer:1e3,Centimeter:.01,Millimeter:.001,Mile:1609.344,Yard:.9144,Foot:.3048,Inch:.0254}},weight:{label:`⚖️ Weight`,units:[`Kilogram`,`Gram`,`Milligram`,`Pound`,`Ounce`,`Ton`],factors:{Kilogram:1,Gram:.001,Milligram:1e-6,Pound:.453592,Ounce:.0283495,Ton:1e3}},temperature:{label:`🌡️ Temperature`,units:[`Celsius`,`Fahrenheit`,`Kelvin`],custom:!0},currency:{label:`💱 Currency`,units:[`INR`,`USD`,`EUR`,`GBP`,`JPY`,`AUD`,`CAD`,`CNY`],factors:{INR:1,USD:83.5,EUR:91.2,GBP:106.5,JPY:.56,AUD:54.8,CAD:61.5,CNY:11.6}}};function Pe(e,t,n){let r;return r=t===`Celsius`?e:t===`Fahrenheit`?(e-32)*5/9:e-273.15,n===`Celsius`?r:n===`Fahrenheit`?r*9/5+32:r+273.15}function Fe(){let e=document.createElement(`div`);e.className=`page-content tool-page`;let t=`length`;e.innerHTML=`
    <h2>📐 Unit Converter</h2>
    <div class="chip-group" id="unitTypeChips">
      ${Object.entries(X).map(([e,n])=>`
        <span class="chip ${e===t?`active`:``}" data-type="${e}">${n.label}</span>
      `).join(``)}
    </div>
    <div id="converterForm"></div>
  `;function n(){let n=X[t],r=e.querySelector(`#converterForm`);r.innerHTML=`
      <div class="form-group">
        <label for="convertValue">Value</label>
        <input type="number" class="form-input" id="convertValue" placeholder="Enter value" step="any" />
      </div>
      <div class="form-row">
        <div class="form-group">
          <label for="convertFrom">From</label>
          <select class="form-select" id="convertFrom">
            ${n.units.map((e,t)=>`<option value="${e}" ${t===0?`selected`:``}>${e}</option>`).join(``)}
          </select>
        </div>
        <div class="form-group">
          <label for="convertTo">To</label>
          <select class="form-select" id="convertTo">
            ${n.units.map((e,t)=>`<option value="${e}" ${t===1?`selected`:``}>${e}</option>`).join(``)}
          </select>
        </div>
      </div>
      <button class="btn btn-primary" id="convertBtn">🔄 Convert</button>
      <div id="convertResult"></div>
      ${t===`currency`?`<div class="text-sm text-muted mt-sm">⚠️ Currency rates are approximate static values.</div>`:``}
    `,r.querySelector(`#convertBtn`).addEventListener(`click`,()=>{let e=parseFloat(r.querySelector(`#convertValue`).value),t=r.querySelector(`#convertFrom`).value,i=r.querySelector(`#convertTo`).value;if(isNaN(e)){r.querySelector(`#convertResult`).innerHTML=`
          <div class="result-box">
            <div class="result-label">⚠️ Error</div>
            <div class="result-detail">Please enter a valid number.</div>
          </div>
        `;return}let a;a=n.custom?Pe(e,t,i):e*(n.factors[t]/n.factors[i]),r.querySelector(`#convertResult`).innerHTML=`
        <div class="result-box">
          <div class="result-label">${e} ${t} =</div>
          <div class="result-value">${Ie(a)} ${i}</div>
        </div>
      `})}return e.querySelectorAll(`#unitTypeChips .chip`).forEach(r=>{r.addEventListener(`click`,()=>{e.querySelectorAll(`#unitTypeChips .chip`).forEach(e=>e.classList.remove(`active`)),r.classList.add(`active`),t=r.dataset.type,n()})}),n(),e}function Ie(e){return Math.abs(e)>=1e6||Math.abs(e)<.001&&e!==0?e.toExponential(4):parseFloat(e.toFixed(6)).toString()}function Le(){let e=document.createElement(`div`);return e.className=`page-content tool-page`,e.innerHTML=`
    <h2>📱 QR Code Generator</h2>
    <div class="form-group">
      <label for="qrInput">Enter text or URL</label>
      <textarea class="form-textarea" id="qrInput" rows="3" placeholder="https://example.com or any text..."></textarea>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label for="qrSize">Size</label>
        <select class="form-select" id="qrSize">
          <option value="150">Small</option>
          <option value="220" selected>Medium</option>
          <option value="300">Large</option>
        </select>
      </div>
      <div class="form-group">
        <label for="qrColor">Color</label>
        <select class="form-select" id="qrColor">
          <option value="#000000">Black</option>
          <option value="#6C5CE7">Purple</option>
          <option value="#00b894">Green</option>
          <option value="#e17055">Orange</option>
          <option value="#0984e3">Blue</option>
        </select>
      </div>
    </div>
    <button class="btn btn-primary" id="qrGenerateBtn">📱 Generate QR Code</button>
    <div class="qr-display" id="qrDisplay"></div>
  `,e.querySelector(`#qrGenerateBtn`).addEventListener(`click`,async()=>{let t=e.querySelector(`#qrInput`).value.trim(),n=parseInt(e.querySelector(`#qrSize`).value),r=e.querySelector(`#qrColor`).value;if(!t){m(`Please enter text or URL`);return}let i=e.querySelector(`#qrDisplay`);i.innerHTML=`<p class="text-muted text-sm">Generating...</p>`;try{let e=await a(()=>import(`https://esm.sh/qrcode@1.5.3`),[]),o=document.createElement(`canvas`);await e.toCanvas(o,t,{width:n,margin:2,color:{dark:r,light:`#ffffff`}}),i.innerHTML=``,i.appendChild(o);let s=document.createElement(`button`);s.className=`btn btn-secondary btn-sm mt-md`,s.textContent=`💾 Download QR`,s.addEventListener(`click`,()=>{let e=document.createElement(`a`);e.download=`qr-code.png`,e.href=o.toDataURL(`image/png`),e.click()}),i.appendChild(s)}catch(e){console.error(e),i.innerHTML=`<p class="text-muted text-sm">⚠️ Error generating QR code.</p>`}}),e}var Z={uppercase:`ABCDEFGHIJKLMNOPQRSTUVWXYZ`,lowercase:`abcdefghijklmnopqrstuvwxyz`,numbers:`0123456789`,symbols:`!@#$%^&*()_+-=[]{}|;:,.<>?`};function Re(){let e=document.createElement(`div`);e.className=`page-content tool-page`;let t={length:16,uppercase:!0,lowercase:!0,numbers:!0,symbols:!0};e.innerHTML=`
    <h2>🔐 Password Generator</h2>
    <div class="password-display">
      <span class="password-text" id="passwordText">Click Generate</span>
      <button class="copy-btn" id="passwordCopyBtn" title="Copy">📋</button>
    </div>
    <div class="range-group">
      <div class="range-header">
        <span>Password Length</span>
        <span id="lengthValue">${t.length}</span>
      </div>
      <input type="range" id="passwordLength" min="6" max="64" value="${t.length}" />
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
  `;let n=e.querySelector(`#passwordText`),r=e.querySelector(`#passwordLength`),i=e.querySelector(`#lengthValue`);r.addEventListener(`input`,e=>{t.length=parseInt(e.target.value),i.textContent=t.length}),e.querySelectorAll(`.toggle`).forEach(e=>{e.addEventListener(`click`,()=>{let n=e.dataset.key;t[n]=!t[n],e.classList.toggle(`active`,t[n]),t.uppercase||t.lowercase||t.numbers||t.symbols||(t[n]=!0,e.classList.add(`active`))})});function a(){let e=``;t.uppercase&&(e+=Z.uppercase),t.lowercase&&(e+=Z.lowercase),t.numbers&&(e+=Z.numbers),t.symbols&&(e+=Z.symbols),e||=Z.lowercase;let n=new Uint32Array(t.length);crypto.getRandomValues(n);let r=``;for(let i=0;i<t.length;i++)r+=e[n[i]%e.length];return r}function o(e){let t=0;return e.length>=8&&t++,e.length>=12&&t++,e.length>=16&&t++,/[A-Z]/.test(e)&&t++,/[a-z]/.test(e)&&t++,/[0-9]/.test(e)&&t++,/[^A-Za-z0-9]/.test(e)&&t++,t<=2?{label:`Weak`,color:`var(--color-danger)`,percent:25}:t<=4?{label:`Fair`,color:`var(--color-warning)`,percent:50}:t<=5?{label:`Strong`,color:`var(--color-info)`,percent:75}:{label:`Very Strong`,color:`var(--color-success)`,percent:100}}return e.querySelector(`#generatePasswordBtn`).addEventListener(`click`,()=>{let t=a();n.textContent=t;let r=o(t);e.querySelector(`#passwordStrength`).innerHTML=`
      <div class="progress-bar">
        <div class="progress-fill" style="width: ${r.percent}%; background: ${r.color};"></div>
      </div>
      <div class="text-sm mt-sm" style="color: ${r.color}; font-weight: 600;">
        Strength: ${r.label}
      </div>
    `}),e.querySelector(`#passwordCopyBtn`).addEventListener(`click`,()=>{let e=n.textContent;e&&e!==`Click Generate`&&h(e)}),e}function ze(){let e=document.createElement(`div`);e.className=`page-content tool-page`,e.innerHTML=`
    <h2>🎲 Random Picker</h2>
    <div class="form-group">
      <label for="pickerInput">Enter options (one per line)</label>
      <textarea class="form-textarea" id="pickerInput" rows="6" placeholder="Pizza
Burger
Sushi
Tacos
Pasta"></textarea>
    </div>
    <button class="btn btn-primary" id="pickBtn">🎲 Pick Random!</button>
    <div id="pickerResult"></div>
    <div id="pickerHistory" class="mt-lg"></div>
  `;let t=[];return e.querySelector(`#pickBtn`).addEventListener(`click`,()=>{let n=e.querySelector(`#pickerInput`).value.trim();if(!n){e.querySelector(`#pickerResult`).innerHTML=`
        <div class="result-box">
          <div class="result-label">⚠️ Error</div>
          <div class="result-detail">Please enter at least one option.</div>
        </div>
      `;return}let r=n.split(`
`).map(e=>e.trim()).filter(e=>e.length>0);if(r.length===0)return;let i=e.querySelector(`#pickerResult`),a=0,o=e.querySelector(`#pickBtn`);o.disabled=!0;let s=setInterval(()=>{let n=r[Math.floor(Math.random()*r.length)];if(i.innerHTML=`
        <div class="result-box" style="text-align: center;">
          <div style="font-size: var(--font-size-xl); font-weight: 700; color: var(--color-text-secondary);">
            ${Q(n)}
          </div>
        </div>
      `,a++,a>=15){clearInterval(s);let n=r[Math.floor(Math.random()*r.length)];t.unshift(n),i.innerHTML=`
          <div class="picker-result">
            <div class="picked-item">🎉 ${Q(n)}</div>
          </div>
        `,o.disabled=!1,t.length>0&&(e.querySelector(`#pickerHistory`).innerHTML=`
            <div class="text-sm text-muted mb-md">Previous picks:</div>
            <div class="chip-group">
              ${t.slice(0,10).map(e=>`<span class="chip">${Q(e)}</span>`).join(``)}
            </div>
          `)}},80)}),e}function Q(e){let t=document.createElement(`div`);return t.textContent=e,t.innerHTML}function Be(){let e=document.createElement(`div`);e.className=`page-content tool-page`;let t=0,n=0,r=null,i=[],a=e=>{let t=Math.floor(e/1e3);return`${Math.floor(t/60).toString().padStart(2,`0`)}:${(t%60).toString().padStart(2,`0`)}.${Math.floor(e%1e3/10).toString().padStart(2,`0`)}`},o=()=>{e.querySelector(`#swDisplay`).textContent=a(n)};e.innerHTML=`
    <h2>⏱️ Stopwatch</h2>
    <div class="timer-display">
      <div class="timer-time" id="swDisplay" style="font-size: 4rem">00:00.00</div>
    </div>

    <div class="btn-row mt-xl">
      <button class="btn btn-primary" id="startStop">Start</button>
      <button class="btn btn-secondary" id="lapBtn" disabled>Lap</button>
      <button class="btn btn-danger" id="resetBtn">Reset</button>
    </div>

    <div class="mt-xl">
      <div id="lapList" class="tools-list"></div>
    </div>
  `;let s=e.querySelector(`#startStop`),c=e.querySelector(`#lapBtn`),l=e.querySelector(`#resetBtn`),u=e.querySelector(`#lapList`);return s.onclick=()=>{r?(clearInterval(r),r=null,s.textContent=`Start`,c.disabled=!0):(t=Date.now()-n,r=setInterval(()=>{n=Date.now()-t,o()},10),s.textContent=`Stop`,c.disabled=!1)},c.onclick=()=>{i.push(n);let e=i.length,t=document.createElement(`div`);t.className=`tool-card uname-item`,t.style.padding=`10px 15px`,t.innerHTML=`<span>Lap ${e}</span><span>${a(n)}</span>`,u.prepend(t)},l.onclick=()=>{clearInterval(r),r=null,n=0,i=[],o(),s.textContent=`Start`,c.disabled=!0,u.innerHTML=``},e}function Ve(){let e=document.createElement(`div`);e.className=`page-content tool-page`;let t=null,n=0,r=()=>{let t=Math.floor(n/3600).toString().padStart(2,`0`),r=Math.floor(n%3600/60).toString().padStart(2,`0`),i=(n%60).toString().padStart(2,`0`);e.querySelector(`#timerDisplay`).textContent=`${t}:${r}:${i}`};e.innerHTML=`
    <h2>⏲️ Countdown Timer</h2>
    
    <div class="timer-display">
      <div class="timer-time" id="timerDisplay">00:00:00</div>
    </div>

    <div class="form-row mt-xl" id="timerInputs">
      <input type="number" id="tH" class="form-input" placeholder="HH" min="0" value="0">
      <input type="number" id="tM" class="form-input" placeholder="MM" min="0" max="59" value="5">
      <input type="number" id="tS" class="form-input" placeholder="SS" min="0" max="59" value="0">
    </div>

    <div class="btn-row mt-lg">
      <button class="btn btn-primary" id="startTimer">Start</button>
      <button class="btn btn-danger hidden" id="resetTimer">Cancel</button>
    </div>

    <div class="grid-3-col mt-xl">
      <button class="btn btn-secondary" data-val="60">1m</button>
      <button class="btn btn-secondary" data-val="300">5m</button>
      <button class="btn btn-secondary" data-val="600">10m</button>
    </div>
  `;let i=e.querySelector(`#startTimer`),a=e.querySelector(`#resetTimer`),o=e.querySelector(`#timerInputs`);i.onclick=()=>{if(t){clearInterval(t),t=null,i.textContent=`Resume`;return}if(n===0){let t=parseInt(e.querySelector(`#tH`).value)||0,r=parseInt(e.querySelector(`#tM`).value)||0,i=parseInt(e.querySelector(`#tS`).value)||0;n=t*3600+r*60+i}n<=0||(o.classList.add(`hidden`),a.classList.remove(`hidden`),i.textContent=`Pause`,t=setInterval(()=>{n--,r(),n<=0&&(clearInterval(t),t=null,m(`⏰ Time is up! ⏰`),`vibrate`in navigator&&navigator.vibrate([500,300,500]),s())},1e3))};let s=()=>{clearInterval(t),t=null,n=0,r(),i.textContent=`Start`,a.classList.add(`hidden`),o.classList.remove(`hidden`)};return a.onclick=s,e.querySelectorAll(`[data-val]`).forEach(e=>{e.onclick=()=>{n=parseInt(e.dataset.val),r()}}),e}function $(){let e=document.createElement(`div`);e.className=`page-content tool-page`;let t=[`Yes`,`No`,`Maybe`,`Later`,`Go for it`,`Wait`],n=()=>{let r=e.querySelector(`#wheelChoiceList`);r.innerHTML=t.map((e,t)=>`
      <div class="note-card mb-xs" style="padding: 10px">
        <div class="toggle-row">
          <span>${e}</span>
          <button class="btn btn-sm btn-text del-choice" data-idx="${t}">✕</button>
        </div>
      </div>
    `).join(``),r.querySelectorAll(`.del-choice`).forEach(e=>{e.onclick=()=>{t.splice(e.dataset.idx,1),n()}})};e.innerHTML=`
    <h2>🎡 Decision Maker Wheel</h2>
    
    <div class="wheel-container text-center mb-xl">
        <div id="wheelPointer" style="font-size: 2rem; margin-bottom: -10px; z-index: 2; position: relative;">📍</div>
        <div id="theWheel" class="decision-box">
             <div id="wheelResult" style="font-size: 1.5rem; font-weight: bold; color: var(--color-primary)">?</div>
        </div>
        <button class="btn btn-primary mt-lg" id="spinBtn" style="width: 150px; height: 150px; border-radius: 50%; border: 5px solid white;">SPIN</button>
    </div>

    <div class="note-card">
      <div class="note-title">Options</div>
      <div class="form-row mt-sm">
        <input type="text" id="choiceInput" class="form-input" placeholder="Add option...">
        <button class="btn btn-secondary" id="addChoice">+</button>
      </div>
      <div id="wheelChoiceList" class="mt-md" style="max-height: 200px; overflow-y: auto;"></div>
    </div>

    <style>
      .decision-box {
        width: 250px;
        height: 250px;
        border-radius: 50%;
        border: 10px solid var(--color-bg-secondary);
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
        background: var(--color-bg-card);
        transition: transform 3s cubic-bezier(0.1, 0.7, 0.1, 1);
        position: relative;
        box-shadow: var(--shadow-lg);
      }
      .spinning {
         animation: pulseScale 0.5s infinite alternate;
      }
      @keyframes pulseScale {
        from { transform: scale(1); }
        to { transform: scale(1.05); }
      }
    </style>
  `;let r=e.querySelector(`#theWheel`),i=e.querySelector(`#wheelResult`),o=e.querySelector(`#spinBtn`);return o.onclick=()=>{if(t.length===0)return;i.textContent=`...`,r.classList.add(`spinning`),o.disabled=!0;let e=Math.floor(3600+Math.random()*3600);r.style.transform=`rotate(${e}deg)`,setTimeout(()=>{r.classList.remove(`spinning`);let e=t[Math.floor(Math.random()*t.length)];i.textContent=e,o.disabled=!1,r.style.transform=`rotate(0deg)`,a(()=>Promise.resolve().then(()=>d).then(t=>t.showToast(`Result: ${e}`)),void 0)},3e3)},e.querySelector(`#addChoice`).onclick=()=>{let r=e.querySelector(`#choiceInput`).value.trim();r&&(t.push(r),e.querySelector(`#choiceInput`).value=``,n())},n(),e}function He(){let e=document.createElement(`div`);e.className=`page-content tool-page`,e.innerHTML=`
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
  `;let t=e.querySelector(`#diceArea`),n=e=>{t.innerHTML=``;for(let n=0;n<e;n++){let e=Math.floor(Math.random()*6)+1,n=document.createElement(`div`);n.className=`dice`,n.textContent=e,t.appendChild(n)}`vibrate`in navigator&&navigator.vibrate(50)};return e.querySelector(`#roll1`).onclick=()=>n(1),e.querySelector(`#roll2`).onclick=()=>n(2),e.querySelector(`#roll4`).onclick=()=>n(4),e}function Ue(){let e=document.createElement(`div`);e.className=`page-content tool-page`,e.innerHTML=`
    <h2>🎲 Random Number Generator</h2>
    <div class="form-row">
      <div class="form-group">
        <label>Min</label>
        <input type="number" id="minVal" class="form-input" value="1">
      </div>
      <div class="form-group">
        <label>Max</label>
        <input type="number" id="maxVal" class="form-input" value="100">
      </div>
    </div>
    
    <div class="toggle-row mb-lg">
      <label>Allow decimals</label>
      <div class="toggle" id="decimalToggle"></div>
    </div>

    <button class="btn btn-primary" id="genNum">🎲 Generate Random Number</button>

    <div class="result-box mt-xl">
      <div class="result-label">Result</div>
      <div id="numResult" class="result-value" style="font-size: 4rem">?</div>
    </div>
  `;let t=e.querySelector(`#decimalToggle`);return t.onclick=()=>t.classList.toggle(`active`),e.querySelector(`#genNum`).onclick=()=>{let n=parseFloat(e.querySelector(`#minVal`).value),r=parseFloat(e.querySelector(`#maxVal`).value),i=t.classList.contains(`active`);if(n>=r){alert(`Min must be less than Max`);return}let a;a=i?(Math.random()*(r-n)+n).toFixed(2):Math.floor(Math.random()*(r-n+1))+n,e.querySelector(`#numResult`).textContent=a,`vibrate`in navigator&&navigator.vibrate(20)},e}function We(){let e=document.createElement(`div`);return e.className=`page-content tool-page`,e.innerHTML=`
    <h2>🤔 Yes / No Picker</h2>
    
    <div class="result-box mt-xl" style="height: 200px; display: flex; align-items: center; justify-content: center;">
      <div id="yesNoResult" class="result-value" style="font-size: 5rem">?</div>
    </div>

    <button class="btn btn-primary mt-xl" id="pickBtn" style="height: 80px; font-size: 1.5rem">PICK FOR ME</button>
  `,e.querySelector(`#pickBtn`).onclick=()=>{let t=e.querySelector(`#yesNoResult`);t.textContent=`...`,setTimeout(()=>{let e=Math.random()>.5?`YES`:`NO`;t.textContent=e,t.style.color=e===`YES`?`var(--color-success)`:`var(--color-danger)`,`vibrate`in navigator&&navigator.vibrate(50)},500)},e}function Ge(){let e=document.createElement(`div`);e.className=`page-content tool-page`,e.innerHTML=`
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
  `;let t=e.querySelector(`#theCoin`),n=e.querySelector(`#coinResult`);return t.onclick=()=>{t.classList.contains(`flipping`)||(t.classList.add(`flipping`),n.textContent=`...`,setTimeout(()=>{t.classList.remove(`flipping`);let e=Math.random()>.5?`HEADS`:`TAILS`;n.textContent=e,t.textContent=e===`HEADS`?`🪙`:`🔘`,`vibrate`in navigator&&navigator.vibrate([10,50,10])},1e3))},e}function Ke(){let e=document.createElement(`div`);e.className=`page-content tool-page`,e.innerHTML=`
    <h2>🎨 Color Picker</h2>
    
    <div class="form-group text-center">
      <input type="color" id="colorInp" class="form-input" style="height: 150px; cursor: pointer; border: none; padding: 0;" value="#6366f1">
    </div>

    <div class="result-box mt-xl">
      <div class="result-label">HEX CODE</div>
      <div id="hexVal" class="result-value" style="font-family: monospace">#6366F1</div>
      <button class="btn btn-sm btn-text copy-color" data-target="hexVal">📋 Copy HEX</button>
    </div>

    <div class="result-box mt-md">
      <div class="result-label">RGB CODE</div>
      <div id="rgbVal" class="result-value" style="font-family: monospace">rgb(99, 102, 241)</div>
      <button class="btn btn-sm btn-text copy-color" data-target="rgbVal">📋 Copy RGB</button>
    </div>

    <div class="mt-xl">
      <h3>Quick Presets</h3>
      <div class="grid-3-col mt-md">
        <div class="tool-card preset-color" style="background: #ef4444; height: 50px" data-color="#ef4444"></div>
        <div class="tool-card preset-color" style="background: #22c55e; height: 50px" data-color="#22c55e"></div>
        <div class="tool-card preset-color" style="background: #3b82f6; height: 50px" data-color="#3b82f6"></div>
        <div class="tool-card preset-color" style="background: #f59e0b; height: 50px" data-color="#f59e0b"></div>
        <div class="tool-card preset-color" style="background: #8b5cf6; height: 50px" data-color="#8b5cf6"></div>
        <div class="tool-card preset-color" style="background: #ec4899; height: 50px" data-color="#ec4899"></div>
      </div>
    </div>
  `;let t=e.querySelector(`#colorInp`),n=e.querySelector(`#hexVal`),r=e.querySelector(`#rgbVal`),i=e=>{n.textContent=e.toUpperCase(),r.textContent=`rgb(${parseInt(e.slice(1,3),16)}, ${parseInt(e.slice(3,5),16)}, ${parseInt(e.slice(5,7),16)})`,t.value=e};return t.oninput=e=>i(e.target.value),e.querySelectorAll(`.preset-color`).forEach(e=>{e.onclick=()=>i(e.dataset.color)}),e.querySelectorAll(`.copy-color`).forEach(t=>{t.onclick=()=>{let n=e.querySelector(`#`+t.dataset.target);navigator.clipboard.writeText(n.textContent),m(`Copied to clipboard!`)}}),e}function qe(){let e=document.createElement(`div`);e.className=`page-content tool-page`,e.innerHTML=`
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
  `;let t=e.querySelector(`#lightToggle`),n=e.querySelector(`#lightIcon`),r=e.querySelector(`#lightText`),i=!1;return t.onclick=()=>{i=!i,i?(t.classList.add(`light-on`),n.textContent=`💡`,r.textContent=`MAX BRIGHTNESS ON`,`wakeLock`in navigator&&navigator.wakeLock.request(`screen`).catch(()=>{})):(t.classList.remove(`light-on`),n.textContent=`🌑`,r.textContent=`TAP TO TURN ON`)},e}function Je(){let e=document.createElement(`div`);e.className=`page-content tool-page`,e.innerHTML=`
    <h2>🎙️ Sound Level Meter</h2>
    
    <div class="result-box mt-xl" style="height: 150px; display: flex; flex-direction: column; align-items: center; justify-content: center;">
      <div id="dbVal" class="result-value">0 dB</div>
      <div id="dbLevel" class="text-sm">Quiet</div>
    </div>

    <div class="mt-lg" style="height: 40px; background: #eee; border-radius: 20px; overflow: hidden; position: relative;">
        <div id="dbBar" style="height: 100%; width: 0%; background: var(--color-primary); transition: width 0.1s"></div>
    </div>

    <button class="btn btn-primary mt-xl" id="startMeter">🎙️ Start Monitoring</button>
    <p class="text-xs text-muted mt-md text-center">*Requires Microphone permission.</p>

    <div class="note-card mt-xl">
        <div class="note-title">Reference Scale</div>
        <div class="text-xs">
            <p>30 dB - Quiet Whisper</p>
            <p>60 dB - Conversational Speech</p>
            <p>80 dB - Garbage Disposal</p>
            <p>100 dB - Jet Takeoff (Nearby)</p>
        </div>
    </div>
  `;let t=e.querySelector(`#dbVal`),n=e.querySelector(`#dbBar`),r=e.querySelector(`#dbLevel`),i=e.querySelector(`#startMeter`),a=null,o=null,s=null,c=null,l=()=>{o.getByteFrequencyData(s);let e=0;for(let t=0;t<s.length;t++)e+=s[t];let i=e/s.length,a=Math.round(i);t.textContent=`${a} dB`,n.style.width=`${Math.min(100,a)}%`,a<40?r.textContent=`Quiet`:a<70?r.textContent=`Normal`:a<90?r.textContent=`Loud`:r.textContent=`Very Loud / Danger`,c=requestAnimationFrame(l)};return i.onclick=async()=>{if(c){cancelAnimationFrame(c),c=null,i.textContent=`🎙️ Start Monitoring`;return}try{let e=await navigator.mediaDevices.getUserMedia({audio:!0});a=new(window.AudioContext||window.webkitAudioContext);let t=a.createMediaStreamSource(e);o=a.createAnalyser(),o.fftSize=256,t.connect(o),s=new Uint8Array(o.frequencyBinCount),i.textContent=`🛑 Stop Monitoring`,l()}catch{alert(`Microphone permission denied.`)}},e.addEventListener(`remove`,()=>{c&&cancelAnimationFrame(c)}),e}function Ye(){let e=document.createElement(`div`);e.className=`page-content tool-page`;let t=null,n=!1;e.innerHTML=`
    <h2>🚨 Strobe Light</h2>
    <div id="strobeScreen" class="tool-card" style="height: 300px; transition: 0.1s; display: flex; align-items: center; justify-content: center;">
      <div style="font-size: 5rem">🚨</div>
    </div>
    
    <div class="form-group mt-lg">
      <label>Frequency (ms)</label>
      <input type="range" id="strobeFreq" class="form-input" min="50" max="500" value="100">
      <div class="text-center mt-xs" id="freqVal">100ms</div>
    </div>

    <button class="btn btn-primary mt-lg" id="strobeToggle">START STROBE</button>
    <p class="text-xs text-danger mt-md text-center">⚠️ Epilepsy Warning: Avoid if sensitive up to flashing lights.</p>
  `;let r=e.querySelector(`#strobeScreen`),i=e.querySelector(`#strobeToggle`),a=e.querySelector(`#strobeFreq`);a.oninput=()=>{e.querySelector(`#freqVal`).textContent=`${a.value}ms`,t&&(clearInterval(t),o())};let o=()=>{t=setInterval(()=>{n=!n,r.style.background=n?`white`:`black`},parseInt(a.value))};return i.onclick=()=>{t?(clearInterval(t),t=null,i.textContent=`START STROBE`,r.style.background=`var(--color-bg-card)`):(o(),i.textContent=`STOP STROBE`)},e.addEventListener(`remove`,()=>clearInterval(t)),e}function Xe(){let e=document.createElement(`div`);e.className=`page-content tool-page`;let t=new Date().toISOString().split(`T`)[0],n=p(`water_tracker`,{});n[t]||(n[t]=0);let r=()=>{let r=n[t],i=Math.min(r/2e3*100,100);e.querySelector(`#currentWater`).textContent=`${r} ml`,e.querySelector(`#waterProgress`).style.width=`${i}%`,e.querySelector(`#glassCount`).textContent=Math.round(r/250)};e.innerHTML=`
    <h2>💧 Water Intake Tracker</h2>
    
    <div class="result-box text-center">
      <div class="result-label">Daily Progress (Goal: 2000ml)</div>
      <div class="result-value" id="currentWater">${n[t]} ml</div>
      <div class="progress-bar mt-md">
        <div class="progress-fill" id="waterProgress" style="width: 0%"></div>
      </div>
      <p class="text-sm text-muted mt-sm">You've drunk about <span id="glassCount">0</span> glasses today.</p>
    </div>

    <div class="grid-2-col mt-lg">
      <button class="btn btn-secondary" id="add250">🥤 +250ml (Glass)</button>
      <button class="btn btn-secondary" id="add500">🍼 +500ml (Bottle)</button>
    </div>
    
    <button class="btn btn-danger mt-md" id="resetWater">🔄 Reset Today</button>

    <div class="mt-xl">
      <h3>History (Last 7 Days)</h3>
      <div class="notes-list mt-md" id="waterHistory"></div>
    </div>
  `;let i=()=>{let r=e.querySelector(`#waterHistory`);r.innerHTML=Object.keys(n).sort().reverse().slice(0,7).map(e=>`
      <div class="note-card">
        <div class="note-title">${e===t?`Today`:e}</div>
        <div class="note-preview">${n[e]} ml / 2000 ml</div>
      </div>
    `).join(``)},a=e=>{n[t]+=e,f(`water_tracker`,n),r(),i(),m(`Added ${e}ml of water!`)};return e.querySelector(`#add250`).onclick=()=>a(250),e.querySelector(`#add500`).onclick=()=>a(500),e.querySelector(`#resetWater`).onclick=()=>{confirm(`Reset today's intake?`)&&(n[t]=0,f(`water_tracker`,n),r(),i())},r(),i(),e}function Ze(){let e=document.createElement(`div`);return e.className=`page-content tool-page`,e.innerHTML=`
    <h2>👣 Step Goal Calculator</h2>
    <div class="form-group">
      <label>Age</label>
      <input type="number" id="stepAge" class="form-input" placeholder="e.g. 25" value="25">
    </div>
    <div class="form-group">
      <label>Activity Level</label>
      <select id="stepActivity" class="form-select">
        <option value="sedentary">Sedentary (Office job)</option>
        <option value="lightly" selected>Lightly Active (Occasional walks)</option>
        <option value="moderately">Moderately Active (Daily walks/gym)</option>
        <option value="very">Very Active (Heavy manual work/athlete)</option>
      </select>
    </div>
    <div class="form-group">
      <label>Focus / Goal</label>
      <select id="stepGoalType" class="form-select">
        <option value="maintain">Maintain Health</option>
        <option value="weightLoss">Weight Loss</option>
        <option value="stamina">Build Stamina</option>
      </select>
    </div>
    <button class="btn btn-primary" id="calcSteps">👣 Calculate Goal</button>
    <div id="stepResult"></div>
  `,e.querySelector(`#calcSteps`).onclick=()=>{let t=parseInt(e.querySelector(`#stepAge`).value),n=e.querySelector(`#stepActivity`).value,r=e.querySelector(`#stepGoalType`).value,i=5e3;i=t<18?8e3:t>65?4e3:6e3,i*={sedentary:1,lightly:1.3,moderately:1.6,very:2}[n],r===`weightLoss`?i*=1.4:r===`stamina`&&(i*=1.2);let a=Math.round(i/500)*500;e.querySelector(`#stepResult`).innerHTML=`
      <div class="result-box">
        <div class="result-label">Recommended Daily Steps</div>
        <div class="result-value">${a.toLocaleString()} steps</div>
        <div class="result-detail">
          Based on your profile, this goal will help you stay active and achieve your ${r===`weightLoss`?`weight loss`:`fitness`} goals.
        </div>
      </div>
    `},e}function Qe(){let e=document.createElement(`div`);return e.className=`page-content tool-page`,e.innerHTML=`
    <h2>🔥 Calorie Estimator</h2>
    <div class="form-row">
      <div class="form-group">
        <label>Gender</label>
        <select id="calGender" class="form-select">
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div class="form-group">
        <label>Age</label>
        <input type="number" id="calAge" class="form-input" value="25">
      </div>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label>Weight (kg)</label>
        <input type="number" id="calWeight" class="form-input" value="70">
      </div>
      <div class="form-group">
        <label>Height (cm)</label>
        <input type="number" id="calHeight" class="form-input" value="175">
      </div>
    </div>
    <div class="form-group">
      <label>Activity Level</label>
      <select id="calActivity" class="form-select">
        <option value="1.2">Sedentary (Little/no exercise)</option>
        <option value="1.375">Lightly Active (1-3 days/week)</option>
        <option value="1.55" selected>Moderately Active (3-5 days/week)</option>
        <option value="1.725">Very Active (6-7 days/week)</option>
        <option value="1.9">Extra Active (Labor job/2x training)</option>
      </select>
    </div>
    <button class="btn btn-primary" id="calcCal">🔥 Calculate Calories</button>
    <div id="calResult"></div>
  `,e.querySelector(`#calcCal`).onclick=()=>{let t=e.querySelector(`#calGender`).value,n=parseInt(e.querySelector(`#calAge`).value),r=parseFloat(e.querySelector(`#calWeight`).value),i=parseFloat(e.querySelector(`#calHeight`).value),a=parseFloat(e.querySelector(`#calActivity`).value),o;o=t===`male`?10*r+6.25*i-5*n+5:10*r+6.25*i-5*n-161;let s=Math.round(o*a);e.querySelector(`#calResult`).innerHTML=`
      <div class="result-box">
        <div class="result-label">Daily Maintenance Calories</div>
        <div class="result-value">${s.toLocaleString()} kcal</div>
      </div>
      <div class="result-grid">
        <div class="result-item">
          <div class="result-label">Weight Loss (-0.5kg/wk)</div>
          <div class="result-value">${(s-500).toLocaleString()}</div>
        </div>
        <div class="result-item">
          <div class="result-label">Weight Gain (+0.5kg/wk)</div>
          <div class="result-value">${(s+500).toLocaleString()}</div>
        </div>
      </div>
      <p class="text-sm text-muted mt-md text-center">
        BMR (Basal Metabolic Rate): ${Math.round(o).toLocaleString()} kcal
      </p>
    `},e}function $e(){let e=document.createElement(`div`);e.className=`page-content tool-page`,e.innerHTML=`
    <h2>⚖️ Body Fat Calculator</h2>
    <div class="form-group">
      <label>Gender</label>
      <select id="bfGender" class="form-select">
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label>Height (cm)</label>
        <input type="number" id="bfHeight" class="form-input" value="175">
      </div>
      <div class="form-group">
        <label>Neck (cm)</label>
        <input type="number" id="bfNeck" class="form-input" value="38">
      </div>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label>Waist (cm)</label>
        <input type="number" id="bfWaist" class="form-input" value="85">
      </div>
      <div class="form-group" id="hipGroup" style="display:none">
        <label>Hips (cm)</label>
        <input type="number" id="bfHips" class="form-input" value="100">
      </div>
    </div>
    <button class="btn btn-primary" id="calcBF">⚖️ Calculate Body Fat</button>
    <div id="bfResult"></div>
  `;let t=e.querySelector(`#bfGender`),n=e.querySelector(`#hipGroup`);return t.onchange=()=>{n.style.display=t.value===`female`?`block`:`none`},e.querySelector(`#calcBF`).onclick=()=>{let n=t.value,r=parseFloat(e.querySelector(`#bfHeight`).value),i=parseFloat(e.querySelector(`#bfNeck`).value),a=parseFloat(e.querySelector(`#bfWaist`).value),o=parseFloat(e.querySelector(`#bfHips`).value),s;s=n===`male`?495/(1.0324-.19077*Math.log10(a-i)+.15456*Math.log10(r))-450:495/(1.29579-.35004*Math.log10(a+o-i)+.221*Math.log10(r))-450;let c=Math.max(0,Math.round(s*10)/10),l=`Unknown`;l=n===`male`?c<6?`Essential fat`:c<14?`Athletes`:c<18?`Fitness`:c<25?`Average`:`Obese`:c<14?`Essential fat`:c<21?`Athletes`:c<25?`Fitness`:c<32?`Average`:`Obese`,e.querySelector(`#bfResult`).innerHTML=`
      <div class="result-box">
        <div class="result-label">Body Fat Percentage</div>
        <div class="result-value">${c}%</div>
        <div class="result-detail">Category: <strong>${l}</strong></div>
      </div>
      <p class="text-xs text-muted mt-md italic">
        *Using US Navy measurement method. Accuracy within 1-3%.
      </p>
    `},e}function et(){let e=document.createElement(`div`);return e.className=`page-content tool-page`,e.innerHTML=`
    <h2>⚖️ Ideal Weight Calculator</h2>
    <div class="form-group">
      <label>Gender</label>
      <select id="iwGender" class="form-select">
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
    </div>
    <div class="form-group">
      <label>Height (cm)</label>
      <input type="number" id="iwHeight" class="form-input" value="175">
    </div>
    <button class="btn btn-primary" id="calcIW">⚖️ Calculate Ideal Weight</button>
    <div id="iwResult"></div>
  `,e.querySelector(`#calcIW`).onclick=()=>{let t=e.querySelector(`#iwGender`).value,n=parseFloat(e.querySelector(`#iwHeight`).value),r=n/2.54,i=Math.max(0,r-60),a,o,s;t===`male`?(a=50+2.3*i,o=52+1.9*i,s=56.2+1.41*i):(a=45.5+2.3*i,o=49+1.7*i,s=53.1+1.36*i);let c=18.5*(n/100)**2,l=25*(n/100)**2;e.querySelector(`#iwResult`).innerHTML=`
      <div class="result-box">
        <div class="result-label">Recommended (Miller Formula)</div>
        <div class="result-value">${Math.round(s)} kg</div>
      </div>
      <div class="mt-lg">
        <h3>Other Formulas</h3>
        <div class="result-grid">
          <div class="result-item">
            <div class="result-label">Devine</div>
            <div class="result-value">${Math.round(a)}kg</div>
          </div>
          <div class="result-item">
            <div class="result-label">Robinson</div>
            <div class="result-value">${Math.round(o)}kg</div>
          </div>
        </div>
      </div>
      <div class="result-box mt-md">
        <div class="result-label">Healthy BMI Range (18.5 - 25)</div>
        <div class="result-value" style="font-size: 1.25rem">${Math.round(c)}kg - ${Math.round(l)}kg</div>
      </div>
    `},e}function tt(){let e=document.createElement(`div`);e.className=`page-content tool-page`;let t=null,n=0,r=()=>{let t=Math.floor(n/60),r=n%60;e.querySelector(`#restTime`).textContent=`${t.toString().padStart(2,`0`)}:${r.toString().padStart(2,`0`)}`},i=e=>{clearInterval(t),n=e,r(),t=setInterval(()=>{n--,r(),n<=0&&(clearInterval(t),m(`Rest over! Get back to work! 💪`),`vibrate`in navigator&&navigator.vibrate([500,200,500]))},1e3)};return e.innerHTML=`
    <h2>⏱️ Workout Rest Timer</h2>
    
    <div class="timer-display">
      <div class="timer-time" id="restTime">00:00</div>
      <div class="timer-label">REST TIME</div>
    </div>

    <div class="grid-3-col mt-xl">
      <button class="btn btn-secondary" data-time="30">30s</button>
      <button class="btn btn-secondary" data-time="60">60s</button>
      <button class="btn btn-secondary" data-time="90">90s</button>
      <button class="btn btn-secondary" data-time="120">2m</button>
      <button class="btn btn-secondary" data-time="180">3m</button>
      <button class="btn btn-secondary" data-time="300">5m</button>
    </div>

    <div class="mt-lg">
      <button class="btn btn-danger hidden" id="stopRest">🛑 Stop Timer</button>
    </div>

    <div class="result-box mt-xl">
      <div class="result-label">Pro Tip</div>
      <p class="text-sm">For muscle growth, 60-90 seconds is ideal. For strength, 3-5 minutes allows for better recovery.</p>
    </div>
  `,e.querySelectorAll(`[data-time]`).forEach(t=>{t.onclick=()=>{i(parseInt(t.dataset.time)),e.querySelector(`#stopRest`).classList.remove(`hidden`)}}),e.querySelector(`#stopRest`).onclick=()=>{clearInterval(t),n=0,r(),e.querySelector(`#stopRest`).classList.add(`hidden`)},e}function nt(){let e=document.querySelector(`#app`);e.appendChild(v());let t=document.createElement(`main`);t.id=`main-content`,e.appendChild(t),s(`/`,x),[`calculator`,`text`,`file`,`study`,`daily`,`health`].forEach(e=>{s(`/category/${e}`,()=>te(e))}),a(async()=>{let{Ads:e}=await import(`./ads-B9GcU-ji.js`);return{Ads:e}},[]).then(({Ads:e})=>e.initBanner()),s(`/tool/discount`,ne),s(`/tool/emi`,re),s(`/tool/tip-splitter`,ie),s(`/tool/profit-loss`,ae),s(`/tool/age`,oe),s(`/tool/gst`,S),s(`/tool/percentage`,C),s(`/tool/bmi`,w),s(`/tool/fuel`,T),s(`/tool/time-diff`,E),s(`/tool/salary`,D),s(`/tool/savings`,O),s(`/tool/speed`,k),s(`/tool/date-diff`,A),s(`/tool/loan`,j),s(`/tool/summarizer`,M),s(`/tool/caption`,I),s(`/tool/bio`,B),s(`/tool/word-counter`,V),s(`/tool/case-converter`,H),s(`/tool/duplicates`,U),s(`/tool/reverser`,W),s(`/tool/hashtag`,G),s(`/tool/random-sentence`,K),s(`/tool/formatter`,q),s(`/tool/username`,se),s(`/tool/email`,ce),s(`/tool/fancy-text`,le),s(`/tool/char-remover`,ue),s(`/tool/image-to-pdf`,de),s(`/tool/pdf-to-images`,me),s(`/tool/image-compressor`,he),s(`/tool/image-resizer`,ve),s(`/tool/image-cropper`,ye),s(`/tool/image-converter`,be),s(`/tool/pdf-merger`,xe),s(`/tool/pdf-splitter`,Se),s(`/tool/exif`,Ce),s(`/tool/pomodoro`,we),s(`/tool/notes`,Te),s(`/tool/flashcards`,De),s(`/tool/study-tracker`,Oe),s(`/tool/habit-tracker`,ke),s(`/tool/quiz`,Ae),s(`/tool/exam-timer`,je),s(`/tool/study-checklist`,Me),s(`/tool/daily-goal`,Ne),s(`/tool/unit-converter`,Fe),s(`/tool/qr-generator`,Le),s(`/tool/password`,Re),s(`/tool/random-picker`,ze),s(`/tool/stopwatch`,Be),s(`/tool/timer`,Ve),s(`/tool/wheel`,$),s(`/tool/dice`,He),s(`/tool/random-num`,Ue),s(`/tool/yes-no`,We),s(`/tool/coin-flip`,Ge),s(`/tool/color-picker`,Ke),s(`/tool/brightness`,qe),s(`/tool/sound-meter`,Je),s(`/tool/strobe`,Ye),s(`/tool/water-tracker`,Xe),s(`/tool/step-goal`,Ze),s(`/tool/calories`,Qe),s(`/tool/body-fat`,$e),s(`/tool/ideal-weight`,et),s(`/tool/workout-timer`,tt),u(`#main-content`)}document.addEventListener(`DOMContentLoaded`,nt);export{m as t};