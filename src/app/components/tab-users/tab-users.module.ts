import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabUsersPage } from './tab-users.page';

import { TabUsersPageRoutingModule } from './tab-users-routing.module';
import { ScrollingModule} from '@angular/cdk/scrolling';
import {UsersRepoDirective} from "../../directives/users-repo.directive";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabUsersPageRoutingModule,
    ScrollingModule
  ],
  declarations: [TabUsersPage, UsersRepoDirective]
})
export class TabUsersPageModule {}
