import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {FooterComponent} from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
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
