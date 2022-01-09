import { Cart } from '../cart/Cart';

export interface OrderPromotion {
  isEligible: (cart: Cart) => boolean;
  apply: (cart: Cart) => void;
}
