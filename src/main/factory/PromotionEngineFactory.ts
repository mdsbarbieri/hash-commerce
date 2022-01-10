import { PromotionEngine } from '../../domain/entity/PromotionEngine';
import { BFGiftWithPurchasePromotion } from '../../domain/useCase/promotion/BFGiftWithPurchasePromotion';

class PromotionEngineFactory {
  static create() {
    return new PromotionEngine([new BFGiftWithPurchasePromotion(new Date())]);
  }
}

export const promotionEngine = PromotionEngineFactory.create();
