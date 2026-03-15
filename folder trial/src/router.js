/**
 * Hash-based SPA Router
 * Lightweight, zero-dependency routing for Life Admin
 */

const routes = {};
let currentRoute = null;

export function registerRoute(path, renderFn) {
  routes[path] = renderFn;
}

export function navigate(path) {
  window.location.hash = path;
}

export function goBack() {
  if (window.history.length > 1) {
    window.history.back();
  } else {
    navigate('/');
  }
}

export function getCurrentRoute() {
  return currentRoute;
}

export function initRouter(containerSelector) {
  const container = document.querySelector(containerSelector);

  function handleRoute() {
    const hash = window.location.hash.slice(1) || '/';
    currentRoute = hash;

    // Find matching route
    const renderFn = routes[hash];
    if (renderFn) {
      // Show interstitial occasionally
      import('./utils/ads.js').then(({ Ads }) => Ads.showInterstitial());

      container.innerHTML = '';
      const content = renderFn();
      if (typeof content === 'string') {
        container.innerHTML = content;
      } else if (content instanceof HTMLElement) {
        container.appendChild(content);
      }
    } else {
      // Route not found, go home
      navigate('/');
    }

    // Update header back button visibility
    const backBtn = document.querySelector('.back-btn');
    if (backBtn) {
      backBtn.classList.toggle('visible', hash !== '/');
    }

    // Scroll to top
    window.scrollTo(0, 0);
  }

  window.addEventListener('hashchange', handleRoute);
  handleRoute();
}
