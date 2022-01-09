import {ShoppingCart} from '../entity/ShoppingCart';
import {BusinessError} from '../error/BusinessError';
import {Cart} from '../../data/model/cart/Cart';
import {UseCase} from '../../data/model/server/UseCase';
import {CartRepository} from "../../data/repository/CartRepository";

export class GetCart implements UseCase {
  constructor(private readonly shoppingCart: ShoppingCart, private readonly cartRepository: CartRepository) {
  }

  async execute(cartId: string): Promise<Cart> {
    const cart = await this.cartRepository.getById(cartId);
    if (!cart) {
      throw new BusinessError('Cart not found');
    }
    return this.shoppingCart.get(cart);
  }
}
