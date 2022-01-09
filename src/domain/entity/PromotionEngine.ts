import { AbstractOrderPromotion } from '../../data/abstract/AbstractOrderPromotion';
import { AbstractItemPromotion } from '../../data/abstract/AbstractItemPromotion';
import { OrderPromotion } from '../../data/model/promotion/OrderPromotion';
import { Cart } from '../../data/model/cart/Cart';
import { ItemPromotion } from '../../data/model/promotion/ItemPromotion';

export class PromotionEngine {
  constructor(private readonly promoList: OrderPromotion[] | ItemPromotion[]) {}

  execute(cart: Cart) {
    this.promoList.forEach((promo) => {
      if (promo instanceof AbstractOrderPromotion) {
        promo.apply(cart);
        return;
      }
      if (promo instanceof AbstractItemPromotion) {
        cart.products.forEach((product) => {
            promo.apply(product);
        });
        return;
      }
    });
  }
}
