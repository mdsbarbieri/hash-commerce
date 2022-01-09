import { ItemPromotion } from '../model/promotion/ItemPromotion';
import { CartItem } from '../model/cart/CartItem';

export abstract class AbstractItemPromotion implements ItemPromotion {
  abstract apply(cart: CartItem): void;

  abstract isEligible(cart: CartItem): boolean;
}
