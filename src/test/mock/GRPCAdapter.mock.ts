import {GRPCAdapter} from "../../adapter/grpc/GRPCAdapter";

const mockServer = require('grpc-mock').createMockServer({
  protoPath: 'src/data/proto/discount.proto',
  packageName: 'discount',
  serviceName: 'Discount',
  rules: [{method: 'GetDiscount', input: '.*', output: {percentage: 1}}],
});

export const mockGRPCAdapter = (MOCK_HOST: string): GRPCAdapter => {
  const grpcAdapter = new GRPCAdapter(`src/data/proto/discount.proto`);

  beforeAll(() => {
    mockServer.listen(MOCK_HOST);
  });

  return grpcAdapter
}
