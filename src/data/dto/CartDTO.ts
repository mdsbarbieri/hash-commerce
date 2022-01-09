import {Cart} from "../model/cart/Cart";

export class CartDTO {
  constructor(private cart: Cart) {
  }

  private getProductsArray() {
    const products = [];
    for (const [key, value] of this.cart.products) {
      products.push(value);
    }
    return products;
  }

  execute() {
    return {
      "total_amount": this.cart.totalAmount,
      "total_amount_with_discount": this.cart.totalAmountWithDiscount,
      "total_discount": this.cart.totalDiscount,
      "products": this.getProductsArray()
    };
  }
}