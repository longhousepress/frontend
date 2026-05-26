// API Configuration
export const API_URL = import.meta.env.PUBLIC_API_URL ?? '';

// Business Configuration
export const BUSINESS_NAME = import.meta.env.PUBLIC_BUSINESS_NAME ?? 'Longhouse Press';
export const SUPPORT_EMAIL = import.meta.env.PUBLIC_SUPPORT_EMAIL ?? 'info@longhousepress.com';
export const DOMAIN = import.meta.env.PUBLIC_DOMAIN ?? 'longhousepress.com';
export const PUBLISHER_LOGO_URL = '/logo.svg';

// Currency Configuration
// Currently hardcoded to GBP, but structured for easy currency selector integration
//
// TO ADD A CURRENCY SELECTOR:
// 1. Create a currency selector component (dropdown/buttons for GBP, EUR, USD, KRW, etc.)
// 2. Store selected currency in state (React/Vue) or URL params
// 3. Pass selected currency as prop/context instead of using SELECTED_CURRENCY constant
// 4. Update CURRENCY_SYMBOL based on selected currency (£, €, $, ₩, etc.)
// 5. Update PRICE_DIVISOR if needed (100 for GBP/EUR/USD, 1 for KRW which has no decimals)
// 6. All price filtering in catalog.astro and book detail pages will work automatically
// 7. The getPriceForCurrency() helper will extract the correct price from the prices array
export const SELECTED_CURRENCY = 'GBP';
export const CURRENCY_SYMBOL = '£';
export const PRICE_DIVISOR = 100;

// UI Configuration
export const COVER_WIDTH = 320;
export const COVER_ASPECT_RATIO = '6 / 9';

// Modal Configuration
export const MODAL_IMAGE_MAX_HEIGHT = '75vh';

// Cart Configuration
export const CART_SUCCESS_MESSAGE_DURATION = 1000; // milliseconds
