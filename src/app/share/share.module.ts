import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {FooterComponent} from './footer/footer.component';
import {ShareRoutingModule} from './share-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    ShareRoutingModule
  ],
  declarations: [FooterComponent],
  exports: [
    FooterComponent,
    CommonModule,
    FormsModule
  ]
})
export class ShareModule {
}
