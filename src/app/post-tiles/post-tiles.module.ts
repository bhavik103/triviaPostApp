import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../shared/shared.module';
import { PostTilesPage } from './post-tiles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule
  ],
  declarations: [PostTilesPage],
  entryComponents: [
    PostTilesPage,
  ],
  exports: [
    PostTilesPage,
  ],
})
export class PostTilesPageModule {}
