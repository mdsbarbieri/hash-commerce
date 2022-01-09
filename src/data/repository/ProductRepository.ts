import { Repository } from '../model/repository/Repository';
import { Product } from '../model/product/Product';

export class ProductRepository implements Repository<Product> {
  constructor(private readonly repository: Repository<Product>) {}

  async getById(id: string) {
    return this.repository.getById(id);
  }

  async set(id: string, data: any): Promise<Product> {
    return this.repository.set(id, data);
  }
}
