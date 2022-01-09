import {DiscountRepository} from '../../../data/repository/DiscountRepository';
import {mockGRPCAdapter} from "../../mock/GRPCAdapter.mock";


describe('DiscountRepository',  () => {
  const MOCK_HOST = process.env.DISCOUNT_SERVER_HOST || '0.0.0.0:50052';
  const grpcAdapter = mockGRPCAdapter(MOCK_HOST)
  const repository = new DiscountRepository(MOCK_HOST, grpcAdapter);


  it('validates if repository works properly', async () => {
    const result = await repository.getDiscountByProduct('1');
    expect(result.percentage).toBe(1);
  });
});
