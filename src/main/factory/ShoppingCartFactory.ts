import { ShoppingCart } from '../../domain/entity/ShoppingCart';
import { promotionEngine } from './PromotionEngineFactory';
import { pricingCalculator } from './PricingCalculatorFactory';

class ShoppingCartFactory {
  static create() {
    return new ShoppingCart(pricingCalculator, promotionEngine);
  }
}

export const shoppingCart = ShoppingCartFactory.create();
