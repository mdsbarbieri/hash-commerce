import { CartRepository } from '../../data/repository/CartRepository';

class CartRepositoryFactory {
  static create() {
    return new CartRepository();
  }
}

export const cartRepository = CartRepositoryFactory.create();
