import { Repository } from '../model/repository/Repository';
import { Cart } from '../model/cart/Cart';

export class CartRepository implements Repository<Cart> {
  private memoryShoppingCart: Map<string, Cart> = new Map<string, Cart>();

  async getById(id: string): Promise<Cart | undefined> {
    return this.memoryShoppingCart.get(id);
  }

  async set(id: string, data: Cart): Promise<Cart | undefined> {
    this.memoryShoppingCart.set(id, data);
    return this.getById(id);
  }
}
