import { Component, OnInit, NgZone } from '@angular/core';
import { ActivatedRoute, Params, Router, Route } from '@angular/router';
import { NewsService } from "../services/news.service";
import { config } from '../config';
import { ToastService } from '../services/toast.service';
import { Network } from '@ionic-native/network/ngx';
import * as _ from 'lodash';
import { GeneralService } from '../services/general.service'
import { Platform } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.page.html',
  styleUrls: ['./single-category.page.scss'],
})
export class SingleCategoryPage implements OnInit {
  newsArray: any;
  mediaPath = config.mediaApiUrl;
  catName;
  noNews;
  language;
  latestPost;
  newsArrayLength: any;
  news: any;
  loading: boolean;
  subscription: any;
  skip: string;
  firstLargePostClick: string;
  constructor(public alertController: AlertController, private ngzone: NgZone, private platform: Platform, private _generalService: GeneralService, private network: Network, private _toastService: ToastService, private _newsService: NewsService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.language = localStorage.getItem('language');
    this.catName = this.route.snapshot.params['cat'];
  }
  ionViewWillEnter() {
    if(localStorage.getItem('skip')){
      this.skip = localStorage.getItem('skip');
      this.firstLargePostClick = localStorage.getItem('firstLargePostClick')
    }
    
    this.singleCategory();
    this.newsArrayLength = false;
    this.language = localStorage.getItem('language');
  }
  async singleCategory() {
    this.loading = true
    var catId = this.route.snapshot.params['id'];
    console.log('catId', catId);
    this._newsService.allCatNews(catId).subscribe((res: any) => {
      console.log("catNews", res);
      this.loading = false
      if (res.length == 1) {
        this.newsArrayLength = true;
        console.log("length news", res.length)
      } else if (res.length == 0) {
        this.noNews = true;
        console.log('this.noNews', this.noNews)
      }
      this.newsArray = res;
      this.news = res[0];
      console.log('this.news large', this.news);
      this.newsArray.splice(0, 1);
      this.latestPost = JSON.parse(JSON.stringify(res[0]));

      console.log('this.latestPost', this.newsArray[0]);
    }, err => {
      this._toastService.toastFunction(err.error.message, 'danger');
    })
    // if (!localStorage.getItem('skip')) {

    //   const alert = await this.alertController.create({
    //     header: 'Confirm!',
    //     message: 'Are you sure you want to skip the <strong>tour</strong>?',
    //     cssClass: 'alertCustomCss',
    //     buttons: [
    //       {
    //         text: 'Continue',
    //         role: 'cancel',

    //         handler: (blah) => {
    //           this.router.navigateByUrl('/single-post/' + this.latestPost.newsId);
    //         }
    //       }, {
    //         text: 'Skip',

    //         handler: () => {
    //           localStorage.setItem('skip', '1');
    //           localStorage.setItem('shareBlink', '1');
    //           localStorage.setItem('catSelect', '1');
    //           localStorage.setItem('firstLargePostClick', '1');
    //           // this.skip = localStorage.getItem('skip');
    //           this.router.navigateByUrl('all-categories');
    //         }
    //       }
    //     ]
    //   });
    //   await alert.present();
    // }
  }

  goToCategories() {
    this.router.navigateByUrl('/home/categories')
  }
  singleNews(id) {
    this.router.navigateByUrl('/single-post/' + id + '/category')
  }
  setExtras(page) {
    localStorage.setItem('skip', '1')
    this._generalService.setExtras(page);
  }
}
