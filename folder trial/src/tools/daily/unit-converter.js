/**
 * Unit Converter
 * Converts length, weight, temperature, and currency (static rates).
 */

const conversionData = {
    length: {
        label: '📏 Length',
        units: ['Meter', 'Kilometer', 'Centimeter', 'Millimeter', 'Mile', 'Yard', 'Foot', 'Inch'],
        // All relative to meters
        factors: {
            'Meter': 1,
            'Kilometer': 1000,
            'Centimeter': 0.01,
            'Millimeter': 0.001,
            'Mile': 1609.344,
            'Yard': 0.9144,
            'Foot': 0.3048,
            'Inch': 0.0254,
        }
    },
    weight: {
        label: '⚖️ Weight',
        units: ['Kilogram', 'Gram', 'Milligram', 'Pound', 'Ounce', 'Ton'],
        factors: {
            'Kilogram': 1,
            'Gram': 0.001,
            'Milligram': 0.000001,
            'Pound': 0.453592,
            'Ounce': 0.0283495,
            'Ton': 1000,
        }
    },
    temperature: {
        label: '🌡️ Temperature',
        units: ['Celsius', 'Fahrenheit', 'Kelvin'],
        // Temperature uses custom conversion
        custom: true
    },
    currency: {
        label: '💱 Currency',
        units: ['INR', 'USD', 'EUR', 'GBP', 'JPY', 'AUD', 'CAD', 'CNY'],
        // Static rates relative to INR
        factors: {
            'INR': 1,
            'USD': 83.5,
            'EUR': 91.2,
            'GBP': 106.5,
            'JPY': 0.56,
            'AUD': 54.8,
            'CAD': 61.5,
            'CNY': 11.6,
        }
    }
};

function convertTemperature(value, from, to) {
    // Convert to Celsius first
    let celsius;
    if (from === 'Celsius') celsius = value;
    else if (from === 'Fahrenheit') celsius = (value - 32) * 5 / 9;
    else celsius = value - 273.15; // Kelvin

    // Convert from Celsius to target
    if (to === 'Celsius') return celsius;
    if (to === 'Fahrenheit') return celsius * 9 / 5 + 32;
    return celsius + 273.15; // Kelvin
}

export function renderUnitConverter() {
    const page = document.createElement('div');
    page.className = 'page-content tool-page';

    let activeType = 'length';

    page.innerHTML = `
    <h2>📐 Unit Converter</h2>
    <div class="chip-group" id="unitTypeChips">
      ${Object.entries(conversionData).map(([key, val]) => `
        <span class="chip ${key === activeType ? 'active' : ''}" data-type="${key}">${val.label}</span>
      `).join('')}
    </div>
    <div id="converterForm"></div>
  `;

    function renderForm() {
        const data = conversionData[activeType];
        const form = page.querySelector('#converterForm');

        form.innerHTML = `
      <div class="form-group">
        <label for="convertValue">Value</label>
        <input type="number" class="form-input" id="convertValue" placeholder="Enter value" step="any" />
      </div>
      <div class="form-row">
        <div class="form-group">
          <label for="convertFrom">From</label>
          <select class="form-select" id="convertFrom">
            ${data.units.map((u, i) => `<option value="${u}" ${i === 0 ? 'selected' : ''}>${u}</option>`).join('')}
          </select>
        </div>
        <div class="form-group">
          <label for="convertTo">To</label>
          <select class="form-select" id="convertTo">
            ${data.units.map((u, i) => `<option value="${u}" ${i === 1 ? 'selected' : ''}>${u}</option>`).join('')}
          </select>
        </div>
      </div>
      <button class="btn btn-primary" id="convertBtn">🔄 Convert</button>
      <div id="convertResult"></div>
      ${activeType === 'currency' ? '<div class="text-sm text-muted mt-sm">⚠️ Currency rates are approximate static values.</div>' : ''}
    `;

        form.querySelector('#convertBtn').addEventListener('click', () => {
            const value = parseFloat(form.querySelector('#convertValue').value);
            const from = form.querySelector('#convertFrom').value;
            const to = form.querySelector('#convertTo').value;

            if (isNaN(value)) {
                form.querySelector('#convertResult').innerHTML = `
          <div class="result-box">
            <div class="result-label">⚠️ Error</div>
            <div class="result-detail">Please enter a valid number.</div>
          </div>
        `;
                return;
            }

            let result;
            if (data.custom) {
                result = convertTemperature(value, from, to);
            } else {
                // Convert: value * (fromFactor / toFactor)
                const fromFactor = data.factors[from];
                const toFactor = data.factors[to];
                result = value * (fromFactor / toFactor);
            }

            form.querySelector('#convertResult').innerHTML = `
        <div class="result-box">
          <div class="result-label">${value} ${from} =</div>
          <div class="result-value">${formatResult(result)} ${to}</div>
        </div>
      `;
        });
    }

    page.querySelectorAll('#unitTypeChips .chip').forEach(chip => {
        chip.addEventListener('click', () => {
            page.querySelectorAll('#unitTypeChips .chip').forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            activeType = chip.dataset.type;
            renderForm();
        });
    });

    renderForm();
    return page;
}

function formatResult(num) {
    if (Math.abs(num) >= 1000000) return num.toExponential(4);
    if (Math.abs(num) < 0.001 && num !== 0) return num.toExponential(4);
    return parseFloat(num.toFixed(6)).toString();
}
