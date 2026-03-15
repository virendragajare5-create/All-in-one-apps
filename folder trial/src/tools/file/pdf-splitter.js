/**
 * PDF Splitter
 * Extracts individual pages from a PDF.
 */
import { showToast } from '../../utils/storage.js';

export function renderPdfSplitter() {
    const page = document.createElement('div');
    page.className = 'page-content tool-page';

    page.innerHTML = `
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
  `;

    page.querySelector('#processSplit').onclick = async () => {
        const file = page.querySelector('#splitInput').files[0];
        const range = page.querySelector('#splitPages').value.trim();

        if (!file || !range) {
            alert('Please select a file and specify pages.');
            return;
        }

        showToast('Splitting PDF... please wait.');

        try {
            const { PDFDocument } = await import('https://cdn.skypack.dev/pdf-lib');

            const arrayBuffer = await file.arrayBuffer();
            const pdf = await PDFDocument.load(arrayBuffer);
            const newPdf = await PDFDocument.create();

            // Parse range: simple CSV for now
            const pages = range.split(',').map(p => parseInt(p.trim()) - 1);

            const copiedPages = await newPdf.copyPages(pdf, pages);
            copiedPages.forEach((p) => newPdf.addPage(p));

            const pdfBytes = await newPdf.save();
            const blob = new Blob([pdfBytes], { type: 'application/pdf' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = `extracted_${Date.now()}.pdf`;
            link.click();
            showToast('PDF split successfully!');
        } catch (err) {
            console.error(err);
            showToast('Error splitting PDF. Check page numbers.');
        }
    };

    return page;
}
