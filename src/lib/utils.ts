import { CURRENCY_SYMBOL, PRICE_DIVISOR } from './constants';
import type { Edition, Price } from '../types/book';

/**
 * Formats a price from cents to a currency string with symbol
 * @param priceInCents - Price value in cents (e.g., 500 for £5.00)
 * @returns Formatted price string (e.g., "£5.00")
 * @example
 * formatPrice(500) // "£5.00"
 * formatPrice(1234) // "£12.34"
 */
export function formatPrice(priceInCents: number): string {
  return `${CURRENCY_SYMBOL}${(priceInCents / PRICE_DIVISOR).toFixed(2)}`;
}

/**
 * Extracts unique values from an array
 * @param array - Array of values to filter
 * @returns Array containing only unique values
 * @example
 * getUniqueValues([1, 2, 2, 3, 1]) // [1, 2, 3]
 * getUniqueValues(['a', 'b', 'a']) // ['a', 'b']
 */
export function getUniqueValues<T>(array: T[]): T[] {
  return [...new Set(array)];
}

/**
 * Extracts sample page paths from an edition's samples array
 * @param samples - Array of sample objects with path properties, or null/undefined
 * @returns Array of sample page paths, or empty array if samples is null/undefined
 * @example
 * extractSamplePaths([{path: '/page1.jpg'}, {path: '/page2.jpg'}]) // ['/page1.jpg', '/page2.jpg']
 * extractSamplePaths(null) // []
 */
export function extractSamplePaths(samples: { path: string }[] | null | undefined): string[] {
  return samples?.map(sample => sample.path) ?? [];
}

/**
 * Gets the price amount for a specific currency from a prices array
 * @param prices - Array of price objects with currency and amount
 * @param currency - Currency code to look for (e.g., 'GBP', 'EUR', 'USD')
 * @returns Price amount in cents/pence, or null if currency not found
 * @example
 * getPriceForCurrency([{currency: 'GBP', amount: 500}, {currency: 'EUR', amount: 600}], 'GBP') // 500
 * getPriceForCurrency([{currency: 'EUR', amount: 600}], 'GBP') // null
 */
export function getPriceForCurrency(prices: Price[], currency: string): number | null {
  const priceObj = prices.find(p => p.currency === currency);
  return priceObj ? priceObj.amount : null;
}

export function selectDefaultEdition(editions: Edition[], currency: string): Edition {
  const withPricing = editions.filter(e => getPriceForCurrency(e.prices, currency) !== null);
  return withPricing.length > 0 ? withPricing[0] : editions[0];
}

