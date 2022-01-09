import {Cart} from '../../data/model/cart/Cart';
import {PromotionEngine} from './PromotionEngine';
import {PricingCalculator} from './PricingCalculator';
import {Product} from '../../data/model/product/Product';
import {CartItem} from "../../data/model/cart/CartItem";

export class ShoppingCart {
  constructor(
    private readonly pricingCalculator: PricingCalculator,
    private readonly promotionEngine: PromotionEngine,
  ) {
  }

  async addItem(cart: Cart, product: Product, quantity: number) {
    try {
      const productId = product.id.toString()
      const productInCart = cart.products.get(productId)
      if (productInCart) {
        quantity = productInCart.quantity + quantity;
      }

      const cartItem = await this.pricingCalculator.calculate({
        id: productId,
        amount: product.amount,
        quantity,
      });

      cart.products.set(productId, cartItem);
      this.promotionEngine.execute(cart);
    } catch (e) {
    }
  }

  private getProductsArray(productMap: IterableIterator<[string, CartItem]>) {
    const products = [];
    for (const [key, value] of productMap) {
      products.push(value);
    }
    return products;
  }

  private calculateTotalAmount(products: CartItem[]) {
    return products.reduce((acc, cur) => acc + cur.totalAmount, 0);
  }

  private calculateTotalAmountWithDiscount(products: CartItem[]) {
    return products.reduce((accumulator, value) => {
      accumulator += value.totalAmount - value.discount;
      return accumulator;
    }, 0);
  }

  private calculateTotalDiscount(products: CartItem[]) {
    return products.reduce((accumulator, value) => {
      accumulator += value.discount;
      return accumulator;
    }, 0);
  }

  async get(cart: Cart): Promise<Cart> {
    cart.totalAmount = this.calculateTotalAmount(this.getProductsArray(cart.products.entries()));
    cart.totalAmountWithDiscount = this.calculateTotalAmountWithDiscount(this.getProductsArray(cart.products.entries()));
    cart.totalDiscount = this.calculateTotalDiscount(this.getProductsArray(cart.products.entries()));
    return cart;
  }
}
