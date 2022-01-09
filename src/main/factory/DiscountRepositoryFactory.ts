import { DiscountRepository } from '../../data/repository/DiscountRepository';
import { GRPCAdapter } from '../../adapter/grpc/GRPCAdapter';

class DiscountRepositoryFactory {
  static create() {
    const grpcAdapter = new GRPCAdapter(`${__dirname}/../../data/proto/discount.proto`);
    return new DiscountRepository(process.env.DISCOUNT_SERVER_HOST || 'localhost:50051', grpcAdapter);
  }
}

export const discountRepository = DiscountRepositoryFactory.create();
