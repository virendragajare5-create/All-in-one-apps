/**
 * EXIF Viewer (Static)
 * Displays basic image metadata (simulated/extracted).
 */
export function renderExifViewer() {
    const page = document.createElement('div');
    page.className = 'page-content tool-page';

    page.innerHTML = `
    <h2>🖼️ Image Metadata Viewer</h2>
    <div class="form-group">
      <label>Select Image</label>
      <input type="file" id="exifInput" class="form-input" accept="image/*">
    </div>

    <div id="exifResult" class="mt-xl hidden">
        <div class="result-box">
            <div class="result-label">File Name</div>
            <div id="exif_name" class="result-value" style="font-size: 1rem"></div>
        </div>
        <div class="result-grid mt-md">
            <div class="result-item">
                <div class="result-label">Size</div>
                <div id="exif_size" class="result-value" style="font-size: 1.1rem"></div>
            </div>
            <div class="result-item">
                <div class="result-label">Type</div>
                <div id="exif_type" class="result-value" style="font-size:1.1rem"></div>
            </div>
            <div class="result-item">
                <div class="result-label">Dimensions</div>
                <div id="exif_dim" class="result-value" style="font-size:1.1rem"></div>
            </div>
            <div class="result-item">
                <div class="result-label">Last Modified</div>
                <div id="exif_date" class="result-value" style="font-size:1rem"></div>
            </div>
        </div>
    </div>
  `;

    const input = page.querySelector('#exifInput');
    const result = page.querySelector('#exifResult');

    input.onchange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        result.classList.remove('hidden');
        page.querySelector('#exif_name').textContent = file.name;
        page.querySelector('#exif_size').textContent = (file.size / 1024).toFixed(1) + ' KB';
        page.querySelector('#exif_type').textContent = file.type;
        page.querySelector('#exif_date').textContent = new Date(file.lastModified).toLocaleDateString();

        const img = new Image();
        img.src = URL.createObjectURL(file);
        img.onload = () => {
            page.querySelector('#exif_dim').textContent = `${img.width} x ${img.height}`;
        };
    };

    return page;
}
