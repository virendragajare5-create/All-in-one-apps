/**
 * localStorage helpers for Life Admin
 */

export function saveData(key, data) {
    try {
        localStorage.setItem(`lifeadmin_${key}`, JSON.stringify(data));
    } catch (e) {
        console.warn('Storage save failed:', e);
    }
}

export function loadData(key, defaultValue = null) {
    try {
        const data = localStorage.getItem(`lifeadmin_${key}`);
        return data ? JSON.parse(data) : defaultValue;
    } catch (e) {
        console.warn('Storage load failed:', e);
        return defaultValue;
    }
}

export function removeData(key) {
    try {
        localStorage.removeItem(`lifeadmin_${key}`);
    } catch (e) {
        console.warn('Storage remove failed:', e);
    }
}

/**
 * Show a toast notification
 */
export function showToast(message, duration = 2500) {
    let toast = document.querySelector('.toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.className = 'toast';
        document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), duration);
}

/**
 * Copy text to clipboard
 */
export async function copyToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
        showToast('Copied to clipboard!');
    } catch {
        // Fallback
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast('Copied to clipboard!');
    }
}

/**
 * Format file size
 */
export function formatFileSize(bytes) {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / 1048576).toFixed(1) + ' MB';
}

/**
 * Generate unique ID
 */
export function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}
