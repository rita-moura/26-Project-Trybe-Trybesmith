export interface Product {
  id?: number;
  name: string;
  amount: string;
  orderId?: number;
}

export interface Validation {
  type: number | string;
  message: string;
}