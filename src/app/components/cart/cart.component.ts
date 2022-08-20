import { Component, Input, OnInit } from '@angular/core';
import { Order } from 'src/app/modules/order';
import { OrderService } from 'src/app/services/Order/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(private orderService: OrderService, private router: Router) {}

  ngOnInit(): void {}

  confirm(order: Order): void {
    this.orderService.createOrder(order);
    this.router.navigate(['/confirm']);
    localStorage.clear();
  }
}
