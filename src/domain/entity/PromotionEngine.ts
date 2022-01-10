import {AbstractOrderPromotion} from '../../data/abstract/AbstractOrderPromotion';
import {OrderPromotion} from '../../data/model/promotion/OrderPromotion';
import {Cart} from '../../data/model/cart/Cart';
import {ItemPromotion} from '../../data/model/promotion/ItemPromotion';

export class PromotionEngine {
  constructor(private readonly promoList: OrderPromotion[] | ItemPromotion[]) {
  }

  async execute(cart: Cart) {
    for (const promo of this.promoList) {
      if (promo instanceof AbstractOrderPromotion) {
        await promo.apply(cart);
      }
    }
  }
}
