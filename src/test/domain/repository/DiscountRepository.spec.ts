import { GRPCAdapter } from '../../../adapter/grpc/GRPCAdapter';
import { DiscountRepository } from '../../../domain/repository/DiscountRepository';

const mockServer = require('grpc-mock').createMockServer({
  protoPath: 'src/data/proto/discount.proto',
  packageName: 'discount',
  serviceName: 'Discount',
  rules: [{ method: 'GetDiscount', input: '.*', output: { percentage: 1 } }],
});

describe('DiscountRepository', () => {
  const MOCK_HOST = process.env.DISCOUNT_SERVER_HOST || '0.0.0.0:50052';
  const grpcAdapter = new GRPCAdapter(`src/data/proto/discount.proto`);
  const repository = new DiscountRepository(MOCK_HOST, grpcAdapter);

  beforeAll(() => {
    mockServer.listen(MOCK_HOST);
  });

  it('validates if repository works properly', async () => {
    const result = await repository.getDiscountByProduct(1);
    expect(result.percentage).toBe(1);
  });
});
