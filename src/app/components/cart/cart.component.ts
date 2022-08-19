import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/Cart/cart.service';
import { Product } from 'src/app/modules/product';
import { Order } from 'src/app/modules/order';
import { OrderService } from 'src/app/services/Order/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: Product[] = [];
  total: number;
  customer_name: string;
  customer_address: string;
  credit_card: number | null;

  constructor(
    private cartService: CartService,
    private orderService: OrderService,
    private router: Router
  ) {
    this.total = 0;
    this.customer_name = '';
    this.customer_address = '';
    this.credit_card = null;
  }

  ngOnInit(): void {
    this.adjustCart();
  }

  adjustCart(): void {
    this.cartItems = this.cartService.getCartItems();
    this.total = this.cartService.getTotalPrice();
  }

  confirm(): void {
    const order: Order = {
      customer_name: this.customer_name,
      customer_address: this.customer_address,
      credit_card: this.credit_card,
      total_price: this.total,
    };
    this.orderService.createOrder(order);
    this.router.navigate(['/confirm']);
  }

  removeItem(product: Product): void {
    this.cartService.removeItem(product);
    this.adjustCart();
  }

  emptyCart(): void {
    this.cartService.emptyCart();
    this.cartItems = [];
    this.total = 0;
    alert('Cart items have been removed!');
  }
}
