/**
 * Image Compressor
 * Uses Canvas API to reduce image size while maintaining quality.
 * No external library needed.
 */
import { showToast, formatFileSize } from '../../utils/storage.js';

export function renderImageCompressor() {
    const page = document.createElement('div');
    page.className = 'page-content tool-page';

    let selectedFile = null;
    let quality = 0.7;

    page.innerHTML = `
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
  `;

    const fileInput = page.querySelector('#compressInput');
    const uploadArea = page.querySelector('#compressUpload');
    const qualitySlider = page.querySelector('#qualitySlider');
    const qualityValue = page.querySelector('#qualityValue');
    const compressBtn = page.querySelector('#compressBtn');
    const qualityGroup = page.querySelector('#qualityGroup');
    const resizeGroup = page.querySelector('#resizeGroup');

    uploadArea.addEventListener('click', () => fileInput.click());

    fileInput.addEventListener('change', (e) => {
        selectedFile = e.target.files[0];
        if (selectedFile) {
            page.querySelector('#compressFileInfo').textContent =
                `Selected: ${selectedFile.name} (${formatFileSize(selectedFile.size)})`;
            qualityGroup.classList.remove('hidden');
            resizeGroup.classList.remove('hidden');
            compressBtn.classList.remove('hidden');
            page.querySelector('#compressResult').innerHTML = '';
        }
    });

    qualitySlider.addEventListener('input', (e) => {
        quality = parseInt(e.target.value) / 100;
        qualityValue.textContent = `${e.target.value}%`;
    });

    compressBtn.addEventListener('click', async () => {
        if (!selectedFile) return;

        compressBtn.textContent = '⏳ Compressing...';
        compressBtn.disabled = true;

        try {
            const dataUrl = await readFileAsDataURL(selectedFile);
            const img = await loadImage(dataUrl);

            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');

            let targetWidth = img.naturalWidth;
            let targetHeight = img.naturalHeight;
            const maxWidth = parseInt(page.querySelector('#compressMaxWidth').value);

            if (maxWidth && maxWidth < targetWidth) {
                const ratio = maxWidth / targetWidth;
                targetWidth = maxWidth;
                targetHeight = Math.round(targetHeight * ratio);
            }

            canvas.width = targetWidth;
            canvas.height = targetHeight;
            ctx.drawImage(img, 0, 0, targetWidth, targetHeight);

            const compressedBlob = await new Promise(resolve => {
                canvas.toBlob(resolve, 'image/jpeg', quality);
            });

            const originalSize = selectedFile.size;
            const compressedSize = compressedBlob.size;
            const savings = ((1 - compressedSize / originalSize) * 100).toFixed(1);

            // Preview + download
            const previewUrl = URL.createObjectURL(compressedBlob);

            page.querySelector('#compressResult').innerHTML = `
        <div class="result-box">
          <div class="result-label">✅ Compression Complete</div>
          <div class="result-grid">
            <div class="result-item">
              <div class="result-label">Original</div>
              <div class="result-value">${formatFileSize(originalSize)}</div>
            </div>
            <div class="result-item">
              <div class="result-label">Compressed</div>
              <div class="result-value">${formatFileSize(compressedSize)}</div>
            </div>
          </div>
          <div class="result-detail mt-md" style="text-align:center;font-size:var(--font-size-lg);font-weight:700;color:var(--color-success);">
            ${savings}% smaller
          </div>
          <div style="text-align:center;margin-top:var(--spacing-md);">
            <img src="${previewUrl}" style="max-width:100%;border-radius:var(--radius-sm);border:1px solid var(--color-border);" />
          </div>
          <button class="btn btn-success mt-md" id="downloadCompressed">💾 Download Compressed</button>
        </div>
      `;

            page.querySelector('#downloadCompressed').addEventListener('click', () => {
                const link = document.createElement('a');
                link.download = `compressed-${selectedFile.name.replace(/\.[^.]+$/, '')}.jpg`;
                link.href = previewUrl;
                link.click();
            });

        } catch (err) {
            console.error(err);
            showToast('Error compressing image');
        } finally {
            compressBtn.textContent = '📦 Compress Image';
            compressBtn.disabled = false;
        }
    });

    return page;
}

function readFileAsDataURL(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}

function loadImage(src) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = src;
    });
}
