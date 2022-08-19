import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Order } from 'src/app/modules/order';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  @Output() emitOrder: EventEmitter<Order> = new EventEmitter();
  customer_name: string = '';
  customer_address: string = '';
  credit_card: number | null = null;
  name: string = '';

  constructor() {}

  ngOnInit(): void {}

  confirm(): void {
    const order = {
      customer_name: this.customer_name,
      customer_address: this.customer_address,
      credit_card: this.credit_card,
    };
    this.emitOrder.emit(order);
  }

  changeName(): void {
    console.log(this.customer_name);
  }
}
