import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IndexComponent} from './index/index.component';
import {ShoppingCartRoutingModule} from './shopping-cart-routing.module';
@NgModule({
  imports: [
    CommonModule,
    ShoppingCartRoutingModule
  ],
  declarations: [IndexComponent]
})
export class ShoppingCartModule {
}
