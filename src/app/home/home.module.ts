import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { SuperTabsModule } from '@ionic-super-tabs/angular';
import {CategoryTilesPageModule} from '../category-tiles/category-tiles.module';
import {LargePostPageModule} from '../large-post/large-post.module';
import {PostTilesPageModule} from '../post-tiles/post-tiles.module';
@NgModule({
  imports: [
    CategoryTilesPageModule,
    LargePostPageModule,
    PostTilesPageModule,
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
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
