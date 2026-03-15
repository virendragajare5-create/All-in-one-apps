/**
 * Image to PDF
 * Converts selected images into a single PDF using jsPDF (dynamically imported).
 */
import { showToast, formatFileSize } from '../../utils/storage.js';

export function renderImageToPdf() {
    const page = document.createElement('div');
    page.className = 'page-content tool-page';

    let selectedFiles = [];

    page.innerHTML = `
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
  `;

    const fileInput = page.querySelector('#imgPdfInput');
    const uploadArea = page.querySelector('#imgPdfUpload');
    const fileList = page.querySelector('#imgPdfFileList');
    const previewGrid = page.querySelector('#imgPdfPreview');
    const convertBtn = page.querySelector('#imgPdfConvertBtn');

    uploadArea.addEventListener('click', () => fileInput.click());

    fileInput.addEventListener('change', (e) => {
        selectedFiles = Array.from(e.target.files);
        updateFileList();
    });

    function updateFileList() {
        if (selectedFiles.length === 0) {
            fileList.innerHTML = '';
            previewGrid.innerHTML = '';
            convertBtn.classList.add('hidden');
            return;
        }

        convertBtn.classList.remove('hidden');

        fileList.innerHTML = selectedFiles.map((f, i) => `
      <div class="file-item">
        <span class="file-name">${f.name}</span>
        <span class="file-size">${formatFileSize(f.size)}</span>
        <button class="file-remove" data-index="${i}">✕</button>
      </div>
    `).join('');

        fileList.querySelectorAll('.file-remove').forEach(btn => {
            btn.addEventListener('click', () => {
                selectedFiles.splice(parseInt(btn.dataset.index), 1);
                updateFileList();
            });
        });

        // Show previews
        previewGrid.innerHTML = '';
        selectedFiles.forEach(file => {
            const img = document.createElement('img');
            img.src = URL.createObjectURL(file);
            img.onload = () => URL.revokeObjectURL(img.src);
            previewGrid.appendChild(img);
        });
    }

    convertBtn.addEventListener('click', async () => {
        if (selectedFiles.length === 0) return;

        convertBtn.textContent = '⏳ Converting...';
        convertBtn.disabled = true;

        try {
            const { jsPDF } = await import('https://esm.sh/jspdf@2.5.1');

            const pdf = new jsPDF();
            let isFirstPage = true;

            for (const file of selectedFiles) {
                const imgData = await readFileAsDataURL(file);
                const img = await loadImage(imgData);

                const pageWidth = pdf.internal.pageSize.getWidth();
                const pageHeight = pdf.internal.pageSize.getHeight();
                const margin = 10;
                const maxWidth = pageWidth - margin * 2;
                const maxHeight = pageHeight - margin * 2;

                let width = img.naturalWidth;
                let height = img.naturalHeight;

                // Scale to fit page
                const ratio = Math.min(maxWidth / width, maxHeight / height);
                width *= ratio;
                height *= ratio;

                const x = (pageWidth - width) / 2;
                const y = (pageHeight - height) / 2;

                if (!isFirstPage) pdf.addPage();
                isFirstPage = false;

                const format = file.type === 'image/png' ? 'PNG' : 'JPEG';
                pdf.addImage(imgData, format, x, y, width, height);
            }

            pdf.save('images-converted.pdf');
            showToast('PDF saved successfully!');

            page.querySelector('#imgPdfResult').innerHTML = `
        <div class="result-box">
          <div class="result-label">✅ PDF Created</div>
          <div class="result-detail">${selectedFiles.length} image(s) converted to PDF and downloaded.</div>
        </div>
      `;
        } catch (err) {
            console.error(err);
            showToast('Error creating PDF');
        } finally {
            convertBtn.textContent = '📄 Convert to PDF';
            convertBtn.disabled = false;
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
