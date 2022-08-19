import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductsContainerComponent } from './components/products-container/products-container.component';
import { ProductInformationComponent } from './components/product-information/product-information.component';
import { SingleProductComponent } from './components/products-container/single-product/single-product.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CartComponent } from './components/cart/cart.component';
import { ConfirmPaymentComponent } from './components/confirm-payment/confirm-payment.component';

const routes: Routes = [
  { path: '', component: ProductsContainerComponent },
  { path: 'product/:id', component: ProductInformationComponent },
  { path: 'cart', component: CartComponent },
  { path: 'confirm', component: ConfirmPaymentComponent },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
