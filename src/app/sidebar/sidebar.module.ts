import { PostTilesPageModule } from './../post-tiles/post-tiles.module';
import { HomePage } from './../home/home.page';
import { TourHomePage } from './../tour-home/tour-home.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SidebarPage } from './sidebar.page';
import { LargePostPageModule } from '../large-post/large-post.module';
import { TourHomePageModule } from '../tour-home/tour-home.module';
import { HomePageModule } from '../home/home.module';
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
        children: [
          {
            path: '',
            loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
          }
        ]
      },
      {
        path: 'tour-home',
        children: [
          {
            path: '',
            loadChildren: () => import('../tour-home/tour-home.module').then(m => m.TourHomePageModule)
          }
        ]

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
    TourHomePageModule,
    HomePageModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SidebarPage]
})
export class SidebarPageModule { }
