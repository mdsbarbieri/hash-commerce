import { OrderPromotion } from '../model/promotion/OrderPromotion';
import { Cart } from '../model/cart/Cart';

export abstract class AbstractOrderPromotion implements OrderPromotion {
  abstract apply(cart: Cart): Promise<void>;

  abstract isEligible(cart: Cart): boolean;
}
