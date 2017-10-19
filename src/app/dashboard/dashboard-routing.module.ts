import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {IndexComponent} from './index/index.component';
import {DetailsComponent} from './details/details.component';
import {SearchComponent} from './search/search.component';

const routes: Routes = [
  {path: 'index', component: IndexComponent},
  {path: 'details', component: DetailsComponent},
  {path: 'search', component: SearchComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {
}

