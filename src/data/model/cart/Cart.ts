import { CartItem } from './CartItem';

export interface Cart {
  totalAmount?: number;
  totalAmountWithDiscount?: number;
  totalDiscount?: number;
  products: Map<string, CartItem>;
}
