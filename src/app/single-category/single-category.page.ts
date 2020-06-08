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
import { AppComponent } from '../app.component'
import { AdmobfreeService } from '../services/admobfree.service';
import {StorageService} from '../services/storage.service';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.page.html',
  styleUrls: ['./single-category.page.scss'],
})
export class SingleCategoryPage implements OnInit {
  newsArray = [];
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
  limit: any;
  page_number = 1;
  page_limit = 20;
  constructor(private translate: TranslateService,private _storageService: StorageService,private _admobService: AdmobfreeService, public appcomponent: AppComponent, public alertController: AlertController, private ngzone: NgZone, private platform: Platform, private _generalService: GeneralService, private network: Network, private _toastService: ToastService, private _newsService: NewsService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.platform.backButton.subscribe(async () => {
      this.appcomponent.openRatingModal();
    });
    this.language = localStorage.getItem('language');
    this.catName = this.route.snapshot.params['cat'];
  }
  ionViewWillEnter() {
    this._admobService.interstitalAdOnFivePageChange()
    if (localStorage.getItem('skip')) {
      this.skip = localStorage.getItem('skip');
      this.firstLargePostClick = localStorage.getItem('firstLargePostClick')
    }

    this.singleCategory(false, '');
    this.newsArrayLength = false;
    this.language = localStorage.getItem('language');
  }
  ionViewWillLeave(){
    this.newsArray = []
  }
  async singleCategory(isFirstLoad, event) {
    if (this.page_number == 1) {
      this.loading = true
    }
    var catId = this.route.snapshot.params['id'];
    console.log('catId', catId);

    if (navigator.onLine) {
      this._newsService.allCatNews(catId, this.page_number, this.page_limit).subscribe((res: any) => {
        console.log("catNews", res);
        if (this.page_number == 1) {
          if (res.length == 1) {
            this.newsArrayLength = true;
            console.log("length news", res.length)
          } else if (res.length == 0) {
            this.noNews = true;
            console.log('this.noNews', this.noNews)
          }
        }
        if (isFirstLoad) {
          event.target.complete();
        }

        if (this.page_number == 1) {
          this.news = res.shift();
        }
        this.newsArray.push(...res);
        console.log('this.latestPost', this.latestPost);
        console.log('this.newsArray', this.newsArray);
        this.page_number++;
        this.loading = false
        // console.log('this.latestPost', this.newsArray[0]);
      }, err => {
      })
    }else{
      this._storageService.getPostByCatOffline(catId).then((res: any) =>{
        if (res.length == 1) {
          this.newsArrayLength = true;
          console.log("length news", res.length)
        } else if (res.length == 0) {
          this.noNews = true;
          console.log('this.noNews', this.noNews)
        }
        this.news = res.shift();
        this.newsArray.push(...res);
        this.loading = false;
      })
    }
  }

  doInfinite(event) {
    if(navigator.onLine){
      this.singleCategory(true, event);
      console.log(event);
    }else{
      event.target.complete();
      this.translate.get('No internet connection').subscribe((res:any)=>{
        this._toastService.toast(res,'danger')
      })
    }
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
  backButton() {
    this.appcomponent.openRatingModal();
  }
}
