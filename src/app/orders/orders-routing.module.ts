import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {OrdersConfirmComponent} from './orders-confirm/orders-confirm.component';
import {OrdersPaymentComponent} from './orders-payment/orders-payment.component';
import {OrdersSubmitComponent} from './orders-submit/orders-submit.component';

const routes: Routes = [
  {path: 'confirm', component: OrdersConfirmComponent},
  {path: 'payment', component: OrdersPaymentComponent},
  {path: 'submit', component: OrdersSubmitComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdersRoutingModule {
}
