export const CHECKOUT_URLS: Record<number, string> = {
  // TODO: Replace with your Coinbase Commerce hosted checkout URLs
  // 30-minute session ($80)
  30: 'https://commerce.coinbase.com/checkout/REPLACE_30_MIN_CHECKOUT_ID',
  // 60-minute session ($150)
  60: 'https://commerce.coinbase.com/checkout/REPLACE_60_MIN_CHECKOUT_ID',
};

export const DEEP_LINK_SUCCESS = 'coachapp://checkout-success';
export const DEEP_LINK_CANCEL = 'coachapp://checkout-cancel';

