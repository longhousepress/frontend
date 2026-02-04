export interface Price {
  currency: string;
  amount: number;
}

export interface Contributor {
  name: string;
  role: string;
  bio: string | null;
  birth_year: number | null;
  death_year: number | null;
}

export interface Edition {
  id: number;
  title: string;
  author_name: string;
  author_bio: string | null;
  // @deprecated Use prices array instead - this field is kept for backwards compatibility
  price?: number;
  prices: Price[];
  cover: string;
  cover_name: string | null;
  cover_artist: string | null;
  description: string | null;
  categories: string[];
  format: string;
  language: string;
  page_count: number | null;
  translator_name: string | null;
  illustrator: string | null;
  introduction_writer: string | null;
  contributors: Contributor[];
  publication_date: string | null;
  isbn: string | null;
  edition_name: string | null;
  edition_notes: string | null;
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
  subtitle: string | null;
  author: string;
  book_slug: string;
  original_language: string;
  original_publication_year: number | null;
  contributors: Contributor[];
  categories?: string[];
  editions: Edition[];
}

export interface BookListItem {
  id: number;
  title: string;
  subtitle: string | null;
  author: string;
  book_slug: string;
  original_language: string;
  original_publication_year: number | null;
  contributors: Contributor[];
  editions: Edition[];
}