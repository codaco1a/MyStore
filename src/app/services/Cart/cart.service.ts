import { Injectable } from '@angular/core';
import { Product } from 'src/app/modules/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems: Product[];
  total: number;

  constructor() {
    this.cartItems = [
      {
        id: 1,
        name: '',
        price: 0,
        description: '',
        url: '',
      },
    ];
    this.total = 0;
  }

  getCartItems(): Product[] {
    let products: Product[] = JSON.parse(
      localStorage.getItem('Products') as unknown as string
    );
    this.cartItems = products;
    return products;
  }

  addToCart(product: Product): Product[] | void {
    let products: Product[];
    if (localStorage.getItem('Products')) {
      products = JSON.parse(
        localStorage.getItem('Products') as unknown as string
      );
      if (!products.some((p) => p.id == product.id)) {
        this.total = this.total + product.price;
        products = [product, ...products];
        localStorage.setItem('Products', JSON.stringify(products));
        console.log('not included');
        return products;
      }
      console.log('included');
      return products;
    }
    products = [product];
    localStorage.setItem('Products', JSON.stringify(products));
    this.total = this.total + product.price;
    console.log('new');

    return this.getCartItems();
  }

  getTotalPrice(): number {
    this.total = 0;
    let products = this.getCartItems();
    products.forEach((p) => {
      this.total = this.total + p.price;
    });
    return this.total;
  }

  removeItem(product: Product): void {
    const products: Product[] = this.getCartItems();
    const index: number = products.findIndex((p) => p.id == product.id);
    products.splice(index, 1);
    this.total = this.total - product.price;
    localStorage.setItem('Products', JSON.stringify(products));
    this.getCartItems();
    this.getTotalPrice();
  }

  emptyCart(): void {
    localStorage.removeItem('Products');
    this.total = 0;
  }

  checkItem(product: Product): boolean {
    let products: Product[] = JSON.parse(
      localStorage.getItem('Product') as unknown as string
    );
    if (products.some((p) => p.id == product.id)) return true;
    return false;
  }
}

function index(index: any, i: number) {
  throw new Error('Function not implemented.');
}
