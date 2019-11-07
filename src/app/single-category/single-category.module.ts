import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SingleCategoryPage } from './single-category.page';
import { SharedModule } from '../shared/shared.module';
const routes: Routes = [
  {
    path: '',
    component: SingleCategoryPage
  }
];

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SingleCategoryPage]
})
export class SingleCategoryPageModule {}
