import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/modules/product';
import { CartService } from 'src/app/services/Cart/cart.service';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css'],
})
export class CartItemsComponent implements OnInit {
  cartItems: Product[] = [];
  total: number;
  customer_name: string;
  customer_address: string;
  credit_card: number | null;

  constructor(private cartService: CartService) {
    this.total = 0;
    this.customer_name = '';
    this.customer_address = '';
    this.credit_card = null;
  }

  ngOnInit(): void {
    this.adjustCart();
  }

  removeItem(product: Product): void {
    this.cartService.removeItem(product);
    this.adjustCart();
    alert(product.name + ' has been removed from cart!');
  }

  emptyCart(): void {
    this.cartService.emptyCart();
    this.cartItems = [];
    this.total = 0;
    alert('Cart items have been removed!');
  }

  adjustCart(): void {
    if (localStorage.getItem('Products')) {
      this.cartItems = this.cartService.getCartItems();
      this.total = this.cartService.getTotalPrice();
      return;
    }
    this.cartItems = [];
    this.total = 0;
    return;
  }
}
