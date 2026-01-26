// Catalog page client-side functionality
// Handles search filtering and pagination for books

const ITEMS_PER_PAGE = 10;
let currentPage = 1;
let filteredBooks = [];
let allBooks = [];

// DOM elements - initialized on catalog init
let searchInput;
let booksGrid;
let noResults;
let prevBtn;
let nextBtn;
let pageInfo;

function formatPrice(price) {
  return `£${(price / 100).toFixed(2)}`;
}

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
          href="/books/${book.slug}"
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
  
  pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
  
  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = currentPage >= totalPages || filteredBooks.length === 0;
  
  if (prevBtn.disabled) {
    prevBtn.classList.add('btn-disabled');
  } else {
    prevBtn.classList.remove('btn-disabled');
  }
  
  if (nextBtn.disabled) {
    nextBtn.classList.add('btn-disabled');
  } else {
    nextBtn.classList.remove('btn-disabled');
  }
}

function handleSearch(query) {
  const searchTerm = query.toLowerCase().trim();
  
  if (!searchTerm) {
    filteredBooks = allBooks;
  } else {
    filteredBooks = allBooks.filter(book => 
      book.title.toLowerCase().includes(searchTerm) ||
      book.author.toLowerCase().includes(searchTerm)
    );
  }
  
  currentPage = 1;
  renderBooks();
}

// Initialize with books data
export function initializeCatalog(books) {
  // Initialize DOM elements
  searchInput = document.getElementById('search-input');
  booksGrid = document.getElementById('books-grid');
  noResults = document.getElementById('no-results');
  prevBtn = document.getElementById('prev-page');
  nextBtn = document.getElementById('next-page');
  pageInfo = document.getElementById('page-info');
  
  // Check if all required elements exist
  if (!searchInput || !booksGrid || !noResults || !prevBtn || !nextBtn || !pageInfo) {
    console.error('Catalog: Required DOM elements not found');
    return;
  }
  
  allBooks = books;
  filteredBooks = books;
  
  // Search input handler
  searchInput.addEventListener('input', (e) => {
    handleSearch(e.target.value);
  });

  // Pagination handlers
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