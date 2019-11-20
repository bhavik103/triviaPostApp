import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { CategoriesPageModule } from '../categories/categories.module';
import { AllPostPageModule } from '../all-post/all-post.module';
import { SuperTabsModule } from '@ionic-super-tabs/angular';
@NgModule({
  imports: [
    SuperTabsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage,
      },
    ]),
    CategoriesPageModule,
    AllPostPageModule,
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
