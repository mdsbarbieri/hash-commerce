import {Cart} from "../model/cart/Cart";

export class CartDTO {
  constructor(private cart: Cart) {
  }

  private getProductsArray(): any[] {
    const products = [];
    for (const [key, product] of this.cart.products) {
      products.push({
        "id": product.id,
        "quantity": product.quantity,
        "unit_amount": product.unitAmount,
        "total_amount": product.totalAmount,
        "discount": product.discount,
        "is_gift": product.isGift
      });
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