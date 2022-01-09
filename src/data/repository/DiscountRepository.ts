import { GRPCAdapter } from '../../adapter/grpc/GRPCAdapter';

export class DiscountRepository {
  api: any;

  constructor(private readonly host: string, private grpcAdapter: GRPCAdapter) {
    try {
      const client = this.grpcAdapter.getClient().discount;
      this.api = new client.Discount(host, grpcAdapter.getCredentials());
    } catch (err) {
      console.error(err);
    }
  }

  getDiscountByProduct(productId: string): Promise<{ percentage: number }> {
    return new Promise((resolve) => {
      this.api.GetDiscount({ productId: +productId }, (err: any, response: any) => {
        if (err) {
          resolve({ percentage: 0 });
          return;
        }
        resolve(response);
      });
    });
  }
}
