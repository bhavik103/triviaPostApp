import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {TimeAgoPipe} from 'time-ago-pipe';
import { IonicModule } from '@ionic/angular';
import { SinglePostPage } from './single-post.page';
import { SharedModule } from '../shared/shared.module';
import {RelatedPostPageModule} from '../related-post/related-post.module'
const routes: Routes = [
  {
    path: '',
    component: SinglePostPage
  }
];

@NgModule({
  imports: [
    RelatedPostPageModule,
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SinglePostPage]
})
export class SinglePostPageModule {}
