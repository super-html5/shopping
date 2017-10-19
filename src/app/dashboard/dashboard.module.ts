import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ShareModule} from '../share/share.module';
import {DashboardRoutingModule} from './dashboard-routing.module';

import {IndexComponent} from './index/index.component';
import {BannerListComponent} from './banner-list/banner-list.component';
import {DetailsComponent} from './details/details.component';
import { CurrencyDirective } from './currency.directive';
import { SearchComponent } from './search/search.component';

@NgModule({
  imports: [
    CommonModule,
    ShareModule,
    DashboardRoutingModule
  ],
  declarations: [
    IndexComponent,
    BannerListComponent,
    DetailsComponent,
    CurrencyDirective,
    SearchComponent
  ]
})
export class DashboardModule {
}
