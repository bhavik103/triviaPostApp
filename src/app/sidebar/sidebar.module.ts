import { PostTilesPageModule } from './../post-tiles/post-tiles.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SidebarPage } from './sidebar.page';
import { LargePostPageModule } from '../large-post/large-post.module';

const routes: Routes = [
  {
    path: '',
    component: SidebarPage,
    children: [
      // {
      //   path: '',
      //   redirectTo: 'home',
      //   pathMatch: 'full'
      // },
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'tour-home',
        loadChildren: () => import('../tour-home/tour-home.module').then(m => m.TourHomePageModule)
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LargePostPageModule,
    PostTilesPageModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SidebarPage]
})
export class SidebarPageModule { }
