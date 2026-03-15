/**
 * PDF Merger
 * Merges multiple PDF files into one.
 * Uses jspdf and pdf-lib via CDN (mocked logic or dynamic import if possible).
 */
import { showToast } from '../../utils/storage.js';

export function renderPdfMerger() {
    const page = document.createElement('div');
    page.className = 'page-content tool-page';

    page.innerHTML = `
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
  `;

    const input = page.querySelector('#pdfFiles');
    const list = page.querySelector('#fileList');

    input.onchange = (e) => {
        const files = Array.from(e.target.files);
        list.innerHTML = files.map(f => `
      <div class="tool-card uname-item" style="padding: 10px 15px">
        <span class="text-sm truncate">${f.name}</span>
        <span class="text-xs text-muted">${(f.size / 1024).toFixed(0)} KB</span>
      </div>
    `).join('');
    };

    page.querySelector('#processMerge').onclick = async () => {
        const files = input.files;
        if (files.length < 2) {
            alert('Select at least 2 PDF files to merge.');
            return;
        }

        showToast('Merging PDFs... please wait.');

        try {
            // Dynamic import of PDF-Lib for merging
            const { PDFDocument } = await import('https://cdn.skypack.dev/pdf-lib');

            const mergedPdf = await PDFDocument.create();

            for (const file of files) {
                const arrayBuffer = await file.arrayBuffer();
                const pdf = await PDFDocument.load(arrayBuffer);
                const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
                copiedPages.forEach((page) => mergedPdf.addPage(page));
            }

            const pdfBytes = await mergedPdf.save();
            const blob = new Blob([pdfBytes], { type: 'application/pdf' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = `merged_${Date.now()}.pdf`;
            link.click();
            showToast('PDFs merged successfully!');
        } catch (err) {
            console.error(err);
            showToast('Error merging PDFs. Ensure they are valid.');
        }
    };

    return page;
}
