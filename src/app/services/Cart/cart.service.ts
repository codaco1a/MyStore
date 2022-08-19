import { Injectable } from '@angular/core';
import { Product } from 'src/app/modules/product';
import * as _debounce from 'lodash';

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

  addToCart(product: Product, amount?: number): Product[] | void {
    if (this.checkItem(product)) {
      console.log('exists');

      return;
    }
    this.cartItems.push(product);
    this.total = this.total + product.price;

    return this.cartItems;
  }

  getTotalPrice(): number {
    return this.total;
  }

  removeItem(product: Product): void {
    const itemPrice: number = product.price;
    const index: number = this.cartItems.findIndex((p) => p == product);
    this.cartItems.splice(index, 1);
    this.total = this.total - itemPrice;
  }

  emptyCart(): void {
    this.cartItems = [];
    this.total = 0;
  }

  // Function Hoisting
  checkItem(product: Product): boolean {
    if (this.cartItems.includes(product)) {
      const objA = JSON.stringify(product);
      const objB = JSON.stringify(
        this.cartItems.find((p) => p.id == product.id)
      );
      if (_debounce.isEqual(objA, objB)) {
        return true;
      }
    }
    return false;
  }
}
function index(index: any, i: number) {
  throw new Error('Function not implemented.');
}
