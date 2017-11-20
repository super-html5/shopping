import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {IndexComponent} from './dashboard/index/index.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'index'},
  {path: 'finds', loadChildren: 'app/finds/finds.module#FindsModule'},
  {path: 'user', loadChildren: 'app/user/user.module#UserModule'},
  {path: 'shoppingCart', loadChildren: 'app/shopping-cart/shopping-cart.module#ShoppingCartModule'},
  {path: 'orders', loadChildren: 'app/orders/orders.module#OrdersModule'},
  {path: '**', component: IndexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}

