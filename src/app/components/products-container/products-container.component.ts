import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/Product/product.service';
import { CartService } from 'src/app/services/Cart/cart.service';
import { Product } from 'src/app/modules/product';

@Component({
  selector: 'app-products-container',
  templateUrl: './products-container.component.html',
  styleUrls: ['./products-container.component.css'],
})
export class ProductsContainerComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((res) => {
      this.products = res;
    });
  }

  addToCart(product: Product): void {
    if (this.cartService.checkItem(product)) {
      alert('this product has been added already to the cart');
      return;
    }
    this.cartService.addToCart(product);
    alert(product.name + ' has been added to cart!');
  }
}
