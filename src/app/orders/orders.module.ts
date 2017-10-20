import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OrdersRoutingModule} from './orders-routing.module';
import {ShareModule} from '../share/share.module';

import {OrdersConfirmComponent} from './orders-confirm/orders-confirm.component';
import {OrdersPaymentComponent} from './orders-payment/orders-payment.component';

@NgModule({
  imports: [
    CommonModule,
    ShareModule,
    OrdersRoutingModule
  ],
  declarations: [OrdersConfirmComponent, OrdersPaymentComponent]
})
export class OrdersModule {
}
