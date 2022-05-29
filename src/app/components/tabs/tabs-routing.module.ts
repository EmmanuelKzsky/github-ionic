import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import {TabSearchPageModule} from "../tab-search/tab-search.module";

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tabUsers',
        loadChildren: () => import('../tab-users/tab-users.module').then(m => m.TabUsersPageModule)
      },
      {
        path: 'tabSearch',
        loadChildren: () => import('../tab-search/tab-search.module').then(m => m.TabSearchPageModule)
      },
      {
        path: 'tabSearch/:login',
        loadChildren: () => import('../tab-search/tab-search.module').then(m => m.TabSearchPageModule),
        pathMatch: 'full'
      },
      {
        path: '',
        redirectTo: '/tabs/tabUsers',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tabUsers',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule { }
