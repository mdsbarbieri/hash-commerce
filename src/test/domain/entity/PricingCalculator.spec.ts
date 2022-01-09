import {PricingCalculator} from "../../../domain/entity/PricingCalculator";
import {DiscountRepository} from "../../../data/repository/DiscountRepository";
import {mockGRPCAdapter} from "../../mock/GRPCAdapter.mock";


describe('PricingCalculator', () => {
  const MOCK_HOST = process.env.DISCOUNT_SERVER_HOST || '0.0.0.0:50052';
  const grpcAdapter = mockGRPCAdapter(MOCK_HOST)
  const discountRepository = new DiscountRepository(MOCK_HOST, grpcAdapter);
  const pricingCalculator = new PricingCalculator(discountRepository);

  it('checks if calculate execute properly', async () => {
    const {discount} = await pricingCalculator.calculate({ id : '1', amount: 100, quantity: 0 })
    expect(discount).toBeDefined()
  });
});
