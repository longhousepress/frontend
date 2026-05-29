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
  private static MAX_TOTAL_QUANTITY = 50;

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
    // Defensive validation to prevent malformed items being stored in the cart.
    const id = Number(item?.id);
    const title = (item?.title ?? '').toString().trim();
    const price = Number(item?.price);

    if (!Number.isFinite(id) || id <= 0) {
      throw new Error('Invalid item id');
    }

    if (!title) {
      throw new Error('Invalid item title');
    }

    if (!Number.isFinite(price) || price < 0) {
      throw new Error('Invalid item price');
    }

    const items = this.getItems();
    const existing = items.find(i => i.id === id);

    const currentTotal = this.getCount();
    if (currentTotal >= this.MAX_TOTAL_QUANTITY) {
      throw new Error(`Cannot add more items. Maximum quantity of ${this.MAX_TOTAL_QUANTITY} items reached.`);
    }

    // If the item already exists, increase its quantity.
    if (existing) {
      existing.quantity += 1;
    } else {
      items.push({
        id,
        title,
        price,
        cover: item?.cover,
        slug: item?.slug,
        format: item?.format,
        language: item?.language,
        quantity: 1,
      });
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
        const otherItemsTotal = items
          .filter(i => i.id !== id)
          .reduce((sum, i) => sum + i.quantity, 0);
        
        if (otherItemsTotal + quantity > this.MAX_TOTAL_QUANTITY) {
          throw new Error(`Cannot update quantity. Maximum total of ${this.MAX_TOTAL_QUANTITY} items allowed.`);
        }
        
        item.quantity = quantity;
        this.saveItems(items);
      }
    }
  }

  static getCount(): number {
    return this.getItems().reduce((sum, item) => sum + item.quantity, 0);
  }

  static getMaxQuantity(): number {
    return this.MAX_TOTAL_QUANTITY;
  }

  static getTotal(): number {
    return this.getItems().reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }

  static clear(): void {
    this.saveItems([]);
  }
}
