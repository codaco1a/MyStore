import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductsContainerComponent } from './components/products-container/products-container.component';
import { SingleProductComponent } from './components/products-container/single-product/single-product.component';
import { CartComponent } from './components/cart/cart.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductInformationComponent } from './components/product-information/product-information.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ConfirmPaymentComponent } from './components/confirm-payment/confirm-payment.component';
import { FormsModule } from '@angular/forms';
import { CartItemsComponent } from './components/cart/cart-items/cart-items.component';
import { FormComponent } from './components/cart/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsContainerComponent,
    SingleProductComponent,
    CartComponent,
    ProductInformationComponent,
    NavBarComponent,
    ConfirmPaymentComponent,
    CartItemsComponent,
    FormComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
