import { CartItem } from '../cart/CartItem';

export interface ItemPromotion {
  isEligible: (cart: CartItem) => boolean;
  apply: (cart: CartItem) => void;
}
