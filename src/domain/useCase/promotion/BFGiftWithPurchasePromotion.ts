import { Cart } from '../../../data/model/cart/Cart';
import { AbstractOrderPromotion } from '../../../data/abstract/AbstractOrderPromotion';

export class BFGiftWithPurchasePromotion extends AbstractOrderPromotion {
  constructor(private readonly currentDate: Date) {
    super();
  }

  apply(cart: Cart): void {
    if(!this.isEligible(cart)) {
      return;
    }

    cart.products.set('999',{
      id: '999',
      quantity: 1,
      discount: 0,
      isGift: true,
      totalAmount: 0,
      unitAmount: 0,
    });
  }

  private isBF(): boolean {
    return this.currentDate.getMonth() === 10 && this.currentDate.getDate() === 25;
  }

  isEligible(cart: Cart): boolean {
    let hasGift = false;
    cart.products.forEach((product) => product.isGift);
    if (hasGift) {
      return false;
    }
    return this.isBF();
  }
}
