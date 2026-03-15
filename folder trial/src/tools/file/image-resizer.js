/**
 * Image Resizer
 * Resizes images to specific dimensions.
 */
import { showToast } from '../../utils/storage.js';

export function renderImageResizer() {
    const page = document.createElement('div');
    page.className = 'page-content tool-page';

    page.innerHTML = `
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
  `;

    const input = page.querySelector('#resizeInput');
    const toggle = page.querySelector('#aspectToggle');
    const wInput = page.querySelector('#resWidth');
    const hInput = page.querySelector('#resHeight');

    toggle.onclick = () => toggle.classList.toggle('active');

    let originalRatio = 1;
    input.onchange = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const img = new Image();
        img.src = URL.createObjectURL(file);
        img.onload = () => {
            originalRatio = img.width / img.height;
            wInput.value = img.width;
            hInput.value = img.height;
        };
    };

    wInput.oninput = () => {
        if (toggle.classList.contains('active')) {
            hInput.value = Math.round(wInput.value / originalRatio);
        }
    };

    hInput.oninput = () => {
        if (toggle.classList.contains('active')) {
            wInput.value = Math.round(hInput.value * originalRatio);
        }
    };

    page.querySelector('#processResize').onclick = () => {
        const file = input.files[0];
        if (!file) { alert('Please select an image'); return; }

        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const img = new Image();
        img.src = URL.createObjectURL(file);

        img.onload = () => {
            canvas.width = parseInt(wInput.value);
            canvas.height = parseInt(hInput.value);
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

            const link = document.createElement('a');
            link.download = `resized_${file.name}`;
            link.href = canvas.toDataURL('image/png');
            link.click();
            showToast('Image resized and downloaded!');
        };
    };

    return page;
}
