import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabUsersPage } from './tab-users.page';

const routes: Routes = [
  {
    path: '',
    component: TabUsersPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class TabUsersPageRoutingModule {}
