// =============================================================================
// Catalog Client-Side Functionality
// Handles search filtering and pagination for book catalog
// =============================================================================

// Configuration
const ITEMS_PER_PAGE = 10;

// State
let currentPage = 1;
let filteredBooks = [];
let allBooks = [];

// DOM Elements
let searchInput;
let booksGrid;
let noResults;
let prevBtn;
let nextBtn;
let pageInfo;

// =============================================================================
// Utility Functions
// =============================================================================

function formatPrice(price) {
  return `£${(price / 100).toFixed(2)}`;
}

// =============================================================================
// Rendering Functions
// =============================================================================

function renderBooks() {
  if (!booksGrid || !noResults) return;
  
  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;
  const paginatedBooks = filteredBooks.slice(start, end);

  if (filteredBooks.length === 0) {
    booksGrid.classList.add('hidden');
    noResults.classList.remove('hidden');
  } else {
    booksGrid.classList.remove('hidden');
    noResults.classList.add('hidden');
    
    booksGrid.innerHTML = paginatedBooks.map(book => `
      <article
        class="card bg-base-100 w-full shadow-2xl hover:shadow-2xl transition-all duration-75 transform hover:-translate-y-3 relative rounded-lg border-2 border-base-300"
        style="box-shadow: 0 15px 35px -5px rgba(0, 0, 0, 0.2), 0 10px 15px -8px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.05);"
        aria-label="Book: ${book.title} by ${book.author}"
      >
        <a
          href="/books/${book.book_slug}"
          class="block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-lg"
          aria-label="View details for ${book.title} by ${book.author}"
        >
          <figure style="aspect-ratio: 6 / 9;" class="w-full overflow-hidden rounded-t-md">
            <img
              src="${book.cover}"
              alt="Cover of ${book.title} by ${book.author}"
              class="w-full h-full object-contain"
              loading="lazy"
            />
          </figure>

          <div class="card-body pb-12">
            <h3 class="text-sm opacity-70" style="color: var(--color-base-content);">${book.author}</h3>
            <h2 class="card-title text-base leading-tight text-base-content">${book.title}</h2>
          </div>

          <span class="absolute bottom-3 right-3 text-sm font-medium text-accent" aria-hidden="true">
            ${formatPrice(book.price)}
          </span>
        </a>
      </article>
    `).join('');
  }

  updatePagination();
}

function updatePagination() {
  if (!pageInfo || !prevBtn || !nextBtn) return;
  
  const totalPages = Math.ceil(filteredBooks.length / ITEMS_PER_PAGE) || 1;
  const paginationContainer = document.getElementById('pagination');
  
  if (totalPages <= 1) {
    paginationContainer?.classList.add('hidden');
    return;
  }
  
  paginationContainer?.classList.remove('hidden');
  pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
  
  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = currentPage >= totalPages;
  
  prevBtn.classList.toggle('btn-disabled', prevBtn.disabled);
  nextBtn.classList.toggle('btn-disabled', nextBtn.disabled);
}

// =============================================================================
// Search Handler
// =============================================================================

function handleSearch(query) {
  const searchTerm = query.toLowerCase().trim();
  
  filteredBooks = searchTerm
    ? allBooks.filter(book => 
        book.title.toLowerCase().includes(searchTerm) ||
        book.author.toLowerCase().includes(searchTerm)
      )
    : allBooks;
  
  currentPage = 1;
  renderBooks();
}

// =============================================================================
// Initialization
// =============================================================================

function initializeCatalog(books) {
  // Get DOM elements
  searchInput = document.getElementById('search-input');
  booksGrid = document.getElementById('books-grid');
  noResults = document.getElementById('no-results');
  prevBtn = document.getElementById('prev-page');
  nextBtn = document.getElementById('next-page');
  pageInfo = document.getElementById('page-info');
  
  if (!searchInput || !booksGrid || !noResults || !prevBtn || !nextBtn || !pageInfo) {
    console.error('Catalog: Required DOM elements not found');
    return;
  }
  
  // Initialize state
  allBooks = books;
  filteredBooks = books;
  
  // Attach event listeners
  searchInput.addEventListener('input', (e) => handleSearch(e.target.value));

  prevBtn.addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--;
      renderBooks();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });

  nextBtn.addEventListener('click', () => {
    const totalPages = Math.ceil(filteredBooks.length / ITEMS_PER_PAGE);
    if (currentPage < totalPages) {
      currentPage++;
      renderBooks();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });

  // Initial render
  renderBooks();
}

// Expose to global scope for use with define:vars
window.initializeCatalog = initializeCatalog;