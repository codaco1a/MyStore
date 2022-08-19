import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/modules/order';
import { OrderService } from 'src/app/services/Order/order.service';

@Component({
  selector: 'app-confirm-payment',
  templateUrl: './confirm-payment.component.html',
  styleUrls: ['./confirm-payment.component.css'],
})
export class ConfirmPaymentComponent implements OnInit {
  order: Order;

  constructor(private orderService: OrderService) {
    this.order = {
      customer_name: '',
      customer_address: '',
      credit_card: 0,
    };
  }

  ngOnInit(): void {
    this.order = this.orderService.getOrders()[0];
  }
}
