import { Injectable } from '@angular/core';
import { Product } from 'src/app/modules/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems: Product[] = [];
  total: number;

  constructor() {
    this.total = 0;
  }

  getCartItems(): Product[] {
    return this.cartItems;
  }

  addToCart(product: Product, amount?: number): Product[] {
    this.cartItems.push(product);
    this.total = this.total + product.price;
    return this.cartItems;
  }

  EmptyCart(): Product[] {
    this.cartItems = [];
    return this.cartItems;
  }

  getTotalPrice(): number {
    return this.total;
  }

  emptyCart(): void {
    this.cartItems = [];
    this.total = 0;
  }
}
