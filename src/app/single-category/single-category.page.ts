import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, Route } from '@angular/router';
import { NewsService } from "../services/news.service";
import { config } from '../config';
import { ToastService } from '../services/toast.service';
import { Network } from '@ionic-native/network/ngx';
import * as _ from 'lodash';
import {SharedModule} from '../shared/shared.module'
import { Config } from '@ionic/angular';
@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.page.html',
  styleUrls: ['./single-category.page.scss'],
})
export class SingleCategoryPage implements OnInit {
  newsArray: any;
  mediaPath =  config.mediaApiUrl;
  catName;
  noNews;
  language;
  latestPost;
  newsArrayLength;
  news: any;
  constructor(private network: Network, private _toastService: ToastService, private _newsService: NewsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.language = localStorage.getItem('language');
    this.catName = this.route.snapshot.params['cat'];
    this.singleCategory();
  }

  singleCategory(){
    var catId = this.route.snapshot.params['id'];
    console.log('catId',catId);
    this._newsService.allCatNews(catId).subscribe(res => {
      console.log("catNews",res);
      this.newsArray = res;
      this.news = res[0];
      this.newsArray.splice(0,1);
      this.latestPost = JSON.parse(JSON.stringify(res[0]));
      
      console.log('this.latestPost',this.newsArray[0]);
      this.newsArrayLength = this.newsArray.length; 
      if(!this.newsArray.length){
        this.noNews = true;
        console.log('this.noNews',this.noNews)
      }
    }, err => {
      this._toastService.toastFunction(err.error.message, 'danger');
    })
  }

  goToCategories(){
    this.router.navigateByUrl('/home/categories')
  }
  singleNews(id){
    this.router.navigateByUrl('/single-post/'+id + '/category')
  }
}
