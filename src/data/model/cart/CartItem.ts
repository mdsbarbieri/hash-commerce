export interface CartItem {
  id: string;
  quantity: number;
  unitAmount: number;
  totalAmount: number;
  discount: number;
  isGift: boolean;
}
