import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import {} from '../category-tiles/category-tiles.module';
import {CategoryTilesPageModule} from '../category-tiles/category-tiles.module';
import { AllCategoriesPage } from './all-categories.page';

const routes: Routes = [
  {
    path: '',
    component: AllCategoriesPage
  }
];

@NgModule({
  imports: [
    CategoryTilesPageModule,
    CommonModule,
    FormsModule,
    IonicModule,
    
    RouterModule.forChild(routes)
  ],
  declarations: [AllCategoriesPage]
})
export class AllCategoriesPageModule {}
