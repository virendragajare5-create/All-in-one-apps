/**
 * Image Format Converter
 * Converts images between PNG, JPEG, and WebP.
 */
import { showToast } from '../../utils/storage.js';

export function renderImageConverter() {
    const page = document.createElement('div');
    page.className = 'page-content tool-page';

    page.innerHTML = `
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
  `;

    page.querySelector('#processConv').onclick = () => {
        const file = page.querySelector('#convInput').files[0];
        const format = page.querySelector('#convFormat').value;

        if (!file) { alert('Please select an image'); return; }

        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const img = new Image();
        img.src = URL.createObjectURL(file);

        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);

            const ext = format.split('/')[1];
            const link = document.createElement('a');
            link.download = `converted_${Date.now()}.${ext}`;
            link.href = canvas.toDataURL(format, 0.9);
            link.click();
            showToast(`Converted to ${ext.toUpperCase()}`);
        };
    };

    return page;
}
