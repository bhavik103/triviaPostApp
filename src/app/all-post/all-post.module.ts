import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AllPostPage } from './all-post.page';
import { SharedModule } from '../shared/shared.module';
import {LatestPostPageModule} from '../latest-post/latest-post.module'
import {PostTilesPageModule} from '../post-tiles/post-tiles.module'
@NgModule({
  imports: [
    LatestPostPageModule,
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    PostTilesPageModule
  ],
  declarations: [AllPostPage],
  entryComponents: [
    AllPostPage,
  ],
  exports: [
    AllPostPage,
  ],
})
export class AllPostPageModule { }
