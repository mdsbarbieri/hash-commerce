import {PromotionEngine} from "../../../domain/entity/PromotionEngine";
import {BFGiftWithPurchasePromotion} from "../../../domain/useCase/promotion/BFGiftWithPurchasePromotion";
import {Cart} from "../../../data/model/cart/Cart";
import {CartItem} from "../../../data/model/cart/CartItem";
import {productRepository} from "../../../main/factory/ProductRepositoryFactory";


describe('PromotionEngine', () => {

  it('checks if promotion is not applied in invalid date', async () => {
    const bfPromotion = new BFGiftWithPurchasePromotion(new Date(),productRepository);
    const promotionEngine = new PromotionEngine([bfPromotion]);
    const cart: Cart = {
      products: new Map<string, CartItem>([['123', {
        id: '123',
        quantity: 1,
        unitAmount: 10,
        totalAmount: 10,
        discount: 0,
        isGift: false
      }]])
    }

    await promotionEngine.execute(cart);

    let hasGift = false;
    cart.products.forEach((item) => {
      if (item.isGift) {
        hasGift = true;
      }
    });

    expect(hasGift).toBeFalsy()
  })

  it('checks if promotion is applied correctly', async () => {
    const bfPromotion = new BFGiftWithPurchasePromotion(new Date('Nov 25 2022'), productRepository);
    const promotionEngine = new PromotionEngine([bfPromotion]);
    const cart: Cart = {
      products: new Map<string, CartItem>([['123', {
        id: '123',
        quantity: 1,
        unitAmount: 10,
        totalAmount: 10,
        discount: 0,
        isGift: false
      }]])
    }
    await promotionEngine.execute(cart);
    let hasGift = false;

    cart.products.forEach((item) => {
      if (item.isGift) {
        hasGift = true;
      }
    });

    expect(hasGift).toBeTruthy()
  })
});
