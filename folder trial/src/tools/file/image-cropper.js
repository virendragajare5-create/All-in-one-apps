/**
 * Image Cropper
 * Simple tool to crop images using a square overlay.
 */
import { showToast } from '../../utils/storage.js';

export function renderImageCropper() {
    const page = document.createElement('div');
    page.className = 'page-content tool-page';

    page.innerHTML = `
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
  `;

    const input = page.querySelector('#cropInput');
    const container = page.querySelector('#cropPreviewContainer');
    const sourceImg = page.querySelector('#sourceImg');
    const overlay = page.querySelector('#cropOverlay');

    let isDragging = false;
    let startX, startY, initialLeft, initialTop;

    input.onchange = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        sourceImg.src = URL.createObjectURL(file);
        container.classList.remove('hidden');
    };

    overlay.onmousedown = (e) => {
        isDragging = true;
        startX = e.clientX;
        startY = e.clientY;
        initialLeft = overlay.offsetLeft;
        initialTop = overlay.offsetTop;
    };

    window.onmousemove = (e) => {
        if (!isDragging) return;
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;

        const newLeft = Math.max(0, Math.min(container.offsetWidth - overlay.offsetWidth, initialLeft + dx));
        const newTop = Math.max(0, Math.min(container.offsetHeight - overlay.offsetHeight, initialTop + dy));

        overlay.style.left = newLeft + 'px';
        overlay.style.top = newTop + 'px';
    };

    window.onmouseup = () => isDragging = false;

    page.querySelector('#doCrop').onclick = () => {
        if (!sourceImg.src) return;

        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        // Calculate scaling
        const scale = sourceImg.naturalWidth / sourceImg.clientWidth;
        const cropX = overlay.offsetLeft * scale;
        const cropY = overlay.offsetTop * scale;
        const cropSize = overlay.offsetWidth * scale;

        canvas.width = cropSize;
        canvas.height = cropSize;
        ctx.drawImage(sourceImg, cropX, cropY, cropSize, cropSize, 0, 0, cropSize, cropSize);

        const link = document.createElement('a');
        link.download = `cropped_${Date.now()}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
        showToast('Image cropped!');
    };

    return page;
}
