import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IndexComponent} from './index/index.component';
import {ShoppingCartRoutingModule} from './shopping-cart-routing.module';
import {ShareModule} from '../share/share.module';
import { SubmitComponent } from './submit/submit.component'
@NgModule({
  imports: [
    CommonModule,
    ShoppingCartRoutingModule,
    ShareModule
  ],
  declarations: [IndexComponent, SubmitComponent]
})
export class ShoppingCartModule {
}
