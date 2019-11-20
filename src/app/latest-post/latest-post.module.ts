import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../shared/shared.module';

import { LatestPostPage } from './latest-post.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule
  ],
  declarations: [LatestPostPage],
  entryComponents: [
    LatestPostPage,
  ],
  exports: [
    LatestPostPage,
  ],
})
export class LatestPostPageModule {}
