import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {OrdersConfirmComponent} from './orders-confirm/orders-confirm.component';
import {OrdersPaymentComponent} from './orders-payment/orders-payment.component';

const routes: Routes = [
  {path: 'confirm', component: OrdersConfirmComponent},
  {path: 'payment', component: OrdersPaymentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdersRoutingModule {
}
