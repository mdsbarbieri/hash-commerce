import {ProductRepository} from '../../data/repository/ProductRepository';
import {ShoppingCart} from '../entity/ShoppingCart';
import {BusinessError} from '../error/BusinessError';
import {CartRequest} from '../../data/model/cart/CartRequest';
import {Cart} from '../../data/model/cart/Cart';
import {UseCase} from '../../data/model/server/UseCase';
import {CartRepository} from "../../data/repository/CartRepository";
import {CartItem} from "../../data/model/cart/CartItem";

export class AddItemToCart implements UseCase {
  constructor(private readonly productRepository: ProductRepository, private readonly shoppingCart: ShoppingCart, private readonly cartRepository: CartRepository) {
  }

  async execute(cartRequest: CartRequest): Promise<Cart> {
    let cart = await this.cartRepository.getById(cartRequest.cartId);
    if (!cart) {
      cart = await this.cartRepository.set(cartRequest.cartId, {products: new Map<string, CartItem>()});
    }

    if (!cart) {
      throw new BusinessError('Cannot create cart');
    }

    for (const cartItem of cartRequest.products) {
      const product = await this.productRepository.getById(cartItem.id?.toString());
      if (!product) {
        throw new BusinessError('Product not found');
      }
      await this.shoppingCart.addItem(cart, product, cartItem.quantity);
    }

    return this.shoppingCart.get(cart);
  }
}
