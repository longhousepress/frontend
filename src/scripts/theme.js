// Theme controller for autumn/dracula theme switching
// Respects system preference on first visit, then remembers manual selection

const themeToggle = document.querySelector('.theme-controller');
const html = document.documentElement;

// Get saved theme or fall back to system preference
const savedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const initialTheme = savedTheme || (systemPrefersDark ? 'dracula' : 'autumn');

// Set initial theme
html.setAttribute('data-theme', initialTheme);
if (themeToggle) {
  themeToggle.checked = initialTheme === 'dracula';
}

// Handle toggle changes
themeToggle?.addEventListener('change', (e) => {
  const newTheme = e.target.checked ? 'dracula' : 'autumn';
  html.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
});