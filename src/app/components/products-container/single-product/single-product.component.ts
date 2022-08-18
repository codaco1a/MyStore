import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Product } from 'src/app/modules/product';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css'],
})
export class SingleProductComponent implements OnInit {
  @Input() product: Product;
  @Output() productToAdd: EventEmitter<Product> = new EventEmitter();

  constructor() {
    this.product = {
      id: 1,
      name: '',
      price: 1,
      url: '',
      description: '',
    };
  }

  ngOnInit(): void {}

  emitToCart(product: Product): void {
    this.productToAdd.emit(product);
  }
}
