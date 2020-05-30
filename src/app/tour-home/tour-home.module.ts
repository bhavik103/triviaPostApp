import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TourHomePage } from './tour-home.page';
import {LargePostPageModule} from '../large-post/large-post.module';
import {PostTilesPageModule} from '../post-tiles/post-tiles.module';
const routes: Routes = [
  {
    path: '',
    component: TourHomePage
  }
];

@NgModule({
  imports: [
    LargePostPageModule,
    PostTilesPageModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TourHomePage]
})
export class TourHomePageModule {}
