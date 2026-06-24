// API Configuration
export const API_URL = import.meta.env.PUBLIC_API_URL ?? '';
export const BUILD_API_URL = import.meta.env.BUILD_API_URL || import.meta.env.PUBLIC_API_URL || 'http://localhost:2222';

// Business Configuration
export const BUSINESS_NAME = import.meta.env.PUBLIC_BUSINESS_NAME ?? 'Longhouse Press';
export const SUPPORT_EMAIL = import.meta.env.PUBLIC_SUPPORT_EMAIL ?? 'info@longhousepress.org';
export const DOMAIN = import.meta.env.PUBLIC_DOMAIN ?? 'longhousepress.org';
export const PUBLISHER_LOGO_URL = '/logo.svg';

// UI Configuration
export const COVER_WIDTH = 320;
export const COVER_ASPECT_RATIO = '6 / 9';

// Modal Configuration
export const MODAL_IMAGE_MAX_HEIGHT = '75vh';

// Cart Configuration
export const CART_SUCCESS_MESSAGE_DURATION = 1000; // milliseconds
