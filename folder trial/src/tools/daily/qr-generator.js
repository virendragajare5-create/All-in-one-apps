/**
 * QR Code Generator
 * Uses qrcode library (dynamically imported) to generate QR codes.
 */
import { showToast } from '../../utils/storage.js';

export function renderQRGenerator() {
  const page = document.createElement('div');
  page.className = 'page-content tool-page';

  page.innerHTML = `
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
  `;

  page.querySelector('#qrGenerateBtn').addEventListener('click', async () => {
    const text = page.querySelector('#qrInput').value.trim();
    const size = parseInt(page.querySelector('#qrSize').value);
    const color = page.querySelector('#qrColor').value;

    if (!text) {
      showToast('Please enter text or URL');
      return;
    }

    const display = page.querySelector('#qrDisplay');
    display.innerHTML = '<p class="text-muted text-sm">Generating...</p>';

    try {
      const QRCode = await import('https://esm.sh/qrcode@1.5.3');

      const canvas = document.createElement('canvas');
      await QRCode.toCanvas(canvas, text, {
        width: size,
        margin: 2,
        color: {
          dark: color,
          light: '#ffffff'
        }
      });

      display.innerHTML = '';
      display.appendChild(canvas);

      const downloadBtn = document.createElement('button');
      downloadBtn.className = 'btn btn-secondary btn-sm mt-md';
      downloadBtn.textContent = '💾 Download QR';
      downloadBtn.addEventListener('click', () => {
        const link = document.createElement('a');
        link.download = 'qr-code.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
      });
      display.appendChild(downloadBtn);

    } catch (err) {
      console.error(err);
      display.innerHTML = '<p class="text-muted text-sm">⚠️ Error generating QR code.</p>';
    }
  });

  return page;
}
