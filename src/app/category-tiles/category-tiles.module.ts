import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { IonicModule } from '@ionic/angular';

import { CategoryTilesPage } from './category-tiles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule
  ],
  declarations: [CategoryTilesPage],
  entryComponents: [
    CategoryTilesPage,
  ],
  exports: [
    CategoryTilesPage,
  ],
})
export class CategoryTilesPageModule {}
