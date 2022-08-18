import { Injectable } from '@angular/core';
import { Order } from 'src/app/modules/order';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  orders: Order[] = [];

  constructor() {}

  getOrders(): Order[] {
    return this.orders;
  }

  createOrder(order: Order): void {
    this.orders.push(order);
  }
}
