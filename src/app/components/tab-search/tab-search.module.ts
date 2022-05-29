import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabSearchPage } from './tab-search.page';

import { TabSearchPageRoutingModule } from './tab-search-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabSearchPageRoutingModule
  ],
  declarations: [TabSearchPage],
})
export class TabSearchPageModule {}
