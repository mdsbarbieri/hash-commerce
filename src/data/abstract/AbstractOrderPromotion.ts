import { OrderPromotion } from '../model/promotion/OrderPromotion';
import { Cart } from '../model/cart/Cart';

export abstract class AbstractOrderPromotion implements OrderPromotion {
  abstract apply(cart: Cart): void;

  abstract isEligible(cart: Cart): boolean;
}
