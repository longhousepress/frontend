export interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  cover?: string;
  slug?: string;
  format?: string;
  language?: string;
}

export class Cart {
  private static STORAGE_KEY = 'ebook-cart';

  static getItems(): CartItem[] {
    const stored = localStorage.getItem(this.STORAGE_KEY);
    if (!stored) return [];

    try {
      return JSON.parse(stored) as CartItem[];
    } catch {
      return [];
    }
  }

  private static saveItems(items: CartItem[]): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(items));
    window.dispatchEvent(new CustomEvent('cart-updated', { detail: items }));
  }

  static addItem(item: Omit<CartItem, 'quantity'>): void {
    const items = this.getItems();
    const existing = items.find(i => i.id === item.id);

    if (existing) {
      existing.quantity += 1;
    } else {
      items.push({ ...item, quantity: 1 });
    }

    this.saveItems(items);
  }

  static removeItem(id: number): void {
    const items = this.getItems().filter(i => i.id !== id);
    this.saveItems(items);
  }

  static updateQuantity(id: number, quantity: number): void {
    const items = this.getItems();
    const item = items.find(i => i.id === id);

    if (item) {
      if (quantity <= 0) {
        this.removeItem(id);
      } else {
        item.quantity = quantity;
        this.saveItems(items);
      }
    }
  }

  static getCount(): number {
    return this.getItems().reduce((sum, item) => sum + item.quantity, 0);
  }

  static getTotal(): number {
    return this.getItems().reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }

  static clear(): void {
    this.saveItems([]);
  }
}
