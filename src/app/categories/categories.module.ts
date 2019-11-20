import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CategoriesPage } from './categories.page';
import { CategoryTilesPageModule } from '../category-tiles/category-tiles.module'
@NgModule({
  imports: [
    CategoryTilesPageModule,
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [CategoriesPage],
  entryComponents: [
    CategoriesPage,
  ],
  exports: [
    CategoriesPage,
  ],
})
export class CategoriesPageModule {}
