import {PromotionEngine} from '../../domain/entity/PromotionEngine';
import {BFGiftWithPurchasePromotion} from '../../domain/useCase/promotion/BFGiftWithPurchasePromotion';
import {productRepository} from "./ProductRepositoryFactory";

class PromotionEngineFactory {
  static create() {
    return new PromotionEngine([new BFGiftWithPurchasePromotion(new Date(), productRepository)]);
  }
}

export const promotionEngine = PromotionEngineFactory.create();
