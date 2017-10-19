import {NgModule} from '@angular/core';
import {IndexComponent} from './index/index.component';
import {ShareModule} from '../share/share.module';
import {FindsRoutingModule} from './finds-routing.module';

@NgModule({
  imports: [
    ShareModule,
    FindsRoutingModule
  ],
  declarations: [IndexComponent]
})
export class FindsModule {
}
