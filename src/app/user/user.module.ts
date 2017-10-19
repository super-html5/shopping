import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IndexComponent} from './index/index.component';
import {UserRoutingModule} from './user-routing.module';
import {ShareModule} from '../share/share.module';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    ShareModule
  ],
  declarations: [IndexComponent]
})
export class UserModule {
}
