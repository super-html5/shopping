import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OrdersRoutingModule} from './orders-routing.module';
import {ShareModule} from '../share/share.module';

import {OrdersConfirmComponent} from './orders-confirm/orders-confirm.component';
import {OrdersPaymentComponent} from './orders-payment/orders-payment.component';
import {OrdersPendingPayComponent} from './orders-pending-pay/orders-pending-pay.component';
import {OrdersPendingReceiveComponent} from './orders-pending-receive/orders-pending-receive.component';
import {OrdersPendingDeliverComponent} from './orders-pending-deliver/orders-pending-deliver.component';
import {OrdersSubmitComponent} from './orders-submit/orders-submit.component';

@NgModule({
  imports: [
    CommonModule,
    ShareModule,
    OrdersRoutingModule
  ],
  declarations: [
    OrdersConfirmComponent,
    OrdersPaymentComponent,
    OrdersPendingPayComponent,
    OrdersPendingReceiveComponent,
    OrdersPendingDeliverComponent,
    OrdersSubmitComponent
  ]
})
export class OrdersModule {
}
