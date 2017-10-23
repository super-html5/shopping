import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {OrdersConfirmComponent} from './orders-confirm/orders-confirm.component';
import {OrdersPaymentComponent} from './orders-payment/orders-payment.component';
import {OrdersSubmitComponent} from './orders-submit/orders-submit.component';
import {OrdersPendingPayComponent} from './orders-pending-pay/orders-pending-pay.component';
import {OrdersPendingReceiveComponent} from './orders-pending-receive/orders-pending-receive.component';
import {OrdersPendingDeliverComponent} from './orders-pending-deliver/orders-pending-deliver.component';

const routes: Routes = [
  {path: 'confirm', component: OrdersConfirmComponent},
  {path: 'payment', component: OrdersPaymentComponent},
  {path: 'submit', component: OrdersSubmitComponent},
  {path: 'pendingPay', component: OrdersPendingPayComponent},
  {path: 'pendingReceive', component: OrdersPendingReceiveComponent},
  {path: 'pendingDeliver', component: OrdersPendingDeliverComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdersRoutingModule {
}
