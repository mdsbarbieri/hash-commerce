import { ProductRepository } from '../../data/repository/ProductRepository';
import { JSONRepository } from '../../adapter/repository/JSONRepository';

class ProductRepositoryFactory {
  static create() {
    return new ProductRepository(new JSONRepository());
  }
}

export const productRepository = ProductRepositoryFactory.create();
