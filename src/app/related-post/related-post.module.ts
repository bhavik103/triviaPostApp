import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { IonicModule } from '@ionic/angular';

import { RelatedPostPage } from './related-post.page';

const routes: Routes = [
  {
    path: '',
    component: RelatedPostPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule
  ],
  declarations: [RelatedPostPage],
  entryComponents: [
    RelatedPostPage,
  ],
  exports: [
    RelatedPostPage,
  ],
})
export class RelatedPostPageModule {}
