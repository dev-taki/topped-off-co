/**
 * Square payment validation utilities
 */

/**
 * Checks if Square payment system is ready
 * @returns boolean indicating if Square is ready
 */
export const isSquareReady = (): boolean => {
  if (typeof window === 'undefined') {
    return false;
  }
  
  return !!(window as any).Square;
};

/**
 * Validates Square configuration
 * @returns boolean indicating if configuration is valid
 */
export const validateSquareConfig = (): boolean => {
  const applicationId = process.env.NEXT_PUBLIC_SQUARE_APPLICATION_ID;
  const locationId = process.env.NEXT_PUBLIC_SQUARE_LOCATION_ID;
  
  return !!(applicationId && locationId);
};

/**
 * Validates card data before tokenization
 * @param cardData - The card data to validate
 * @returns boolean indicating if card data is valid
 */
export const validateCardData = (cardData: {
  postalCode?: string;
  countryCode?: string;
  cardHolderName?: string;
}): boolean => {
  if (!cardData) return false;
  
  const { postalCode, countryCode, cardHolderName } = cardData;
  
  // Basic validation
  if (!postalCode || postalCode.trim().length === 0) return false;
  if (!countryCode || countryCode.trim().length === 0) return false;
  if (!cardHolderName || cardHolderName.trim().length === 0) return false;
  
  return true;
};
