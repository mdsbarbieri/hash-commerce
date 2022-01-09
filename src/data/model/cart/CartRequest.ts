export interface CartRequestProducts {
  id: string;
  quantity: number;
}

export interface CartRequest {
  cartId: string;
  products: CartRequestProducts[];
}
