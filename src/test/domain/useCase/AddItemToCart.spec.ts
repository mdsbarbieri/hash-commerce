import {AddItemToCart} from "../../../domain/useCase/cart/AddItemToCart";
import {productRepository} from "../../../main/factory/ProductRepositoryFactory";
import {shoppingCart} from "../../../main/factory/ShoppingCartFactory";
import {cartRepository} from "../../../main/factory/CartRepositoryFactory";
import {BusinessError} from "../../../domain/error/BusinessError";

describe('Add item to cart', () => {
  const addItemToCart = new AddItemToCart(productRepository, shoppingCart, cartRepository);

  it('checks if add item to cart correctly', async () => {
    const cart = await addItemToCart.execute({cartId: '1', products: [{id: '1', quantity: 1}]});
    expect(cart.products.get('1')).toBeDefined();
  });

  it('checks if quantity is incremented when add existent item to cart', async () => {
    const cart = await addItemToCart.execute({cartId: '1', products: [{id: '1', quantity: 1}]});
    const getProduct = cart.products.get('1')
    expect(getProduct).toBeDefined()
    expect(getProduct?.quantity).toBe(2);
  });

  it('checks if quantity is incremented when add existent item to cart', async () => {
    try {
      await addItemToCart.execute({cartId: '1', products: [{id: '1222', quantity: 1}]});
    } catch (e) {
      expect(e).toBeInstanceOf(BusinessError);
    }
  });
});
