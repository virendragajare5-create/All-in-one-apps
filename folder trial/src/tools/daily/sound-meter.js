/**
 * Sound Level Meter
 * Uses Microphone API to detect ambient noise levels.
 */
export function renderSoundMeter() {
    const page = document.createElement('div');
    page.className = 'page-content tool-page';

    page.innerHTML = `
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
  `;

    const dbVal = page.querySelector('#dbVal');
    const dbBar = page.querySelector('#dbBar');
    const dbLevel = page.querySelector('#dbLevel');
    const btn = page.querySelector('#startMeter');

    let audioContext = null;
    let analyser = null;
    let dataArray = null;
    let animationId = null;

    const update = () => {
        analyser.getByteFrequencyData(dataArray);
        let values = 0;
        for (let i = 0; i < dataArray.length; i++) {
            values += dataArray[i];
        }
        const average = values / dataArray.length;
        const db = Math.round(average); // Simplified dB representation

        dbVal.textContent = `${db} dB`;
        dbBar.style.width = `${Math.min(100, db)}%`;

        if (db < 40) dbLevel.textContent = 'Quiet';
        else if (db < 70) dbLevel.textContent = 'Normal';
        else if (db < 90) dbLevel.textContent = 'Loud';
        else dbLevel.textContent = 'Very Loud / Danger';

        animationId = requestAnimationFrame(update);
    };

    btn.onclick = async () => {
        if (animationId) {
            cancelAnimationFrame(animationId);
            animationId = null;
            btn.textContent = '🎙️ Start Monitoring';
            return;
        }

        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const source = audioContext.createMediaStreamSource(stream);
            analyser = audioContext.createAnalyser();
            analyser.fftSize = 256;
            source.connect(analyser);
            dataArray = new Uint8Array(analyser.frequencyBinCount);

            btn.textContent = '🛑 Stop Monitoring';
            update();
        } catch (err) {
            alert('Microphone permission denied.');
        }
    };

    // Clean up on leave
    page.addEventListener('remove', () => {
        if (animationId) cancelAnimationFrame(animationId);
    });

    return page;
}
