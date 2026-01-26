// Search keyboard shortcut
// Press '/' to focus the search input

document.addEventListener('keydown', (e) => {
  const searchInput = document.querySelector('input[type="text"][placeholder*="Search"]');
  
  // Check if '/' is pressed and we're not already in an input/textarea
  if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
    e.preventDefault();
    searchInput?.focus();
  }
  
  // Check if 'Escape' is pressed and we're in the search input
  if (e.key === 'Escape' && document.activeElement === searchInput) {
    searchInput?.blur();
  }
});