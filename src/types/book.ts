export interface Edition {
  id: number;
  title: string;
  author_name: string;
  price: number;
  cover: string;
  description: string | null;
  format: string;
  language: string;
  page_count: number | null;
  translator: string | null;
  publication_date: string | null;
  isbn: string | null;
  edition_name: string | null;
  files: string | null;
  samples: Sample[] | null;
}

export interface Sample {
  format: string;
  path: string;
}

export interface Book {
  id: number;
  title: string;
  author: string;
  book_slug: string;
  year_published?: number;
  author_bio?: string | null;
  categories?: string[];
  editions: Edition[];
}

export interface BookListItem {
  id: number;
  title: string;
  author: string;
  book_slug: string;
}