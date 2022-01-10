import { Cart } from '../../../data/model/cart/Cart';
import { AbstractOrderPromotion } from '../../../data/abstract/AbstractOrderPromotion';
import { ProductRepository } from '../../../data/repository/ProductRepository';

export class BFGiftWithPurchasePromotion extends AbstractOrderPromotion {
  constructor(private readonly currentDate: Date, private readonly productRepository: ProductRepository) {
    super();
  }

  async apply(cart: Cart) {
    if (!this.isEligible(cart)) {
      return;
    }

    const product = await this.productRepository.getById('6');

    if (!product) {
      return;
    }

    cart.products.set(product.id.toString(), {
      id: product.id.toString(),
      quantity: 1,
      discount: 0,
      isGift: product.is_gift,
      totalAmount: 0,
      unitAmount: 0,
    });
  }

  private isBF(): boolean {
    return this.currentDate.getMonth() === 10 && this.currentDate.getDate() === 25;
  }

  isEligible(cart: Cart): boolean {
    let hasGift = false;
    cart.products.forEach(product => product.isGift);
    if (hasGift) {
      return false;
    }
    return this.isBF();
  }
}
