/**
 * PDF to Images
 * Extracts PDF pages as individual images using pdfjs-dist (dynamically imported).
 */
import { showToast } from '../../utils/storage.js';

export function renderPdfToImages() {
    const page = document.createElement('div');
    page.className = 'page-content tool-page';

    page.innerHTML = `
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
  `;

    const fileInput = page.querySelector('#pdfInput');
    const uploadArea = page.querySelector('#pdfUpload');
    const extractBtn = page.querySelector('#pdfExtractBtn');
    const pagesPreview = page.querySelector('#pdfPagesPreview');
    let selectedFile = null;

    uploadArea.addEventListener('click', () => fileInput.click());

    fileInput.addEventListener('change', (e) => {
        selectedFile = e.target.files[0];
        if (selectedFile) {
            page.querySelector('#pdfFileName').textContent = `Selected: ${selectedFile.name}`;
            extractBtn.classList.remove('hidden');
            pagesPreview.innerHTML = '';
        }
    });

    extractBtn.addEventListener('click', async () => {
        if (!selectedFile) return;

        extractBtn.textContent = '⏳ Extracting...';
        extractBtn.disabled = true;
        pagesPreview.innerHTML = '';
        const progressEl = page.querySelector('#pdfProgress');

        try {
            const pdfjsLib = await import('https://esm.sh/pdfjs-dist@4.0.379');

            // Set worker source
            pdfjsLib.GlobalWorkerOptions.workerSrc = `https://esm.sh/pdfjs-dist@4.0.379/build/pdf.worker.min.mjs`;

            const arrayBuffer = await selectedFile.arrayBuffer();
            const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
            const numPages = pdf.numPages;

            progressEl.textContent = `Processing ${numPages} pages...`;

            for (let i = 1; i <= numPages; i++) {
                progressEl.textContent = `Processing page ${i} of ${numPages}...`;
                const pdfPage = await pdf.getPage(i);
                const viewport = pdfPage.getViewport({ scale: 1.5 });

                const canvas = document.createElement('canvas');
                const context = canvas.getContext('2d');
                canvas.width = viewport.width;
                canvas.height = viewport.height;

                await pdfPage.render({ canvasContext: context, viewport }).promise;

                // Create wrapper for each page
                const wrapper = document.createElement('div');
                wrapper.style.cssText = 'position:relative;';

                const img = document.createElement('img');
                img.src = canvas.toDataURL('image/png');
                img.style.cssText = 'width:100%;border-radius:var(--radius-sm);border:1px solid var(--color-border);';

                const downloadBtn = document.createElement('button');
                downloadBtn.className = 'btn btn-secondary btn-sm';
                downloadBtn.style.cssText = 'margin-top:4px;';
                downloadBtn.textContent = `💾 Page ${i}`;
                downloadBtn.addEventListener('click', () => {
                    const link = document.createElement('a');
                    link.download = `page-${i}.png`;
                    link.href = canvas.toDataURL('image/png');
                    link.click();
                });

                wrapper.appendChild(img);
                wrapper.appendChild(downloadBtn);
                pagesPreview.appendChild(wrapper);
            }

            progressEl.textContent = `✅ Done! ${numPages} pages extracted.`;
            showToast(`${numPages} pages extracted!`);
        } catch (err) {
            console.error(err);
            progressEl.textContent = '⚠️ Error processing PDF. Please try another file.';
            showToast('Error processing PDF');
        } finally {
            extractBtn.textContent = '🖼️ Extract Pages';
            extractBtn.disabled = false;
        }
    });

    return page;
}
