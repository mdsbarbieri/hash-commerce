import { DiscountRepository } from '../../data/repository/DiscountRepository';
import { CartItem } from '../../data/model/cart/CartItem';

export class PricingCalculator {
  constructor(private readonly discountRepository: DiscountRepository) {}

  private async getDiscountPercentage(productId: string): Promise<number> {
    try {
      const { percentage } = await this.discountRepository.getDiscountByProduct(productId);
      return percentage;
    } catch (error) {
      return 0;
    }
  }

  private calculateDiscountAmountPerItem(amount: number, discount: number): number {
    return amount * discount;
  }

  private round(value: number): number {
    return Math.round(value);
  }

  async calculate({ id, amount, quantity }: { id: string; amount: number; quantity: number }) {
    const percentOfDiscount = await this.getDiscountPercentage(id);
    const discountAmountPerItem = this.calculateDiscountAmountPerItem(amount, percentOfDiscount);

    const shoppingCartItem: CartItem = {
      id: id,
      quantity,
      discount: this.round(discountAmountPerItem * quantity),
      isGift: false,
      totalAmount: this.round(amount * quantity),
      unitAmount: amount,
    };

    return shoppingCartItem;
  }
}
