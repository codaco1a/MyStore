import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/Product/product.service';
import { CartService } from 'src/app/services/Cart/cart.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/modules/product';
import { map } from 'rxjs';

@Component({
  selector: 'app-product-information',
  templateUrl: './product-information.component.html',
  styleUrls: ['./product-information.component.css'],
})
export class ProductInformationComponent implements OnInit {
  product: Product;
  id;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) {
    this.id = activatedRoute.snapshot.params['id'];
    this.product = {
      id: this.id,
      name: '',
      price: 1,
      description: '',
      url: '',
    };
  }

  ngOnInit(): void {
    https: this.productService
      .getProducts() // Type is Obserable<Product[]>
      .pipe(
        map(
          (
            products // Type is Product[]
          ) =>
            products.filter(
              (
                product // Type is Product
              ) => product['id'] == this.id
            )
        )
      )
      .subscribe((res) => {
        this.product = res[0];
      });
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
    alert(product.name + 'has been added to the cart!');
  }
}
