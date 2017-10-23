import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IndexComponent} from './index/index.component';
import {UserRoutingModule} from './user-routing.module';
import {ShareModule} from '../share/share.module';
import {CollectComponent} from './collect/collect.component';
import {AddressComponent} from './address/address.component';
@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    ShareModule
  ],
  declarations: [IndexComponent, CollectComponent, AddressComponent]
})
export class UserModule {
}
