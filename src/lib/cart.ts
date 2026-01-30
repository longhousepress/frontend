// Cart item structure
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

// Cart state management
export class Cart {
  private static STORAGE_KEY = 'ebook-cart';

  // Get all items (migrate legacy string ids -> numbers)
  static getItems(): CartItem[] {
    const stored = localStorage.getItem(this.STORAGE_KEY);
    if (!stored) return [];

    try {
      const parsed = JSON.parse(stored) as any[];
      // Ensure id is numeric (migrate legacy string ids)
      return parsed.map((it: any) => ({
        ...it,
        id: typeof it.id === 'string' ? Number(it.id) : it.id
      })) as CartItem[];
    } catch {
      // On parse error, return empty cart to avoid crashes
      return [];
    }
  }

  // Save items
  private static saveItems(items: CartItem[]): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(items));
    // Dispatch event so UI can update
    window.dispatchEvent(new CustomEvent('cart-updated', { detail: items }));
  }

  // Add item (or increment quantity if exists)
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

  // Remove item completely
  static removeItem(id: number): void {
    const items = this.getItems().filter(i => i.id !== id);
    this.saveItems(items);
  }

  // Update quantity
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

  // Get total count
  static getCount(): number {
    return this.getItems().reduce((sum, item) => sum + item.quantity, 0);
  }

  // Get total price
  static getTotal(): number {
    return this.getItems().reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }

  // Clear cart
  static clear(): void {
    this.saveItems([]);
  }
}
