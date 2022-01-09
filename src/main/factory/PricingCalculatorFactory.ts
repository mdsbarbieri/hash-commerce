import { PricingCalculator } from '../../domain/entity/PricingCalculator';
import { discountRepository } from './DiscountRepositoryFactory';

class PricingCalculatorFactory {
  static create() {
    return new PricingCalculator(discountRepository);
  }
}

export const pricingCalculator = PricingCalculatorFactory.create();
