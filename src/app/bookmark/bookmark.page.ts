import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Category } from '../home/category';
import { config } from '../config';
import { Router } from '@angular/router';
import { NewsService } from '../services/news.service';
import { ActionSheetController, Platform } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { ToastService } from '../services/toast.service';
import { Network } from '@ionic-native/network/ngx';
import { bookmark } from '../changeLang';
import { AppComponent } from '../app.component'
import { AdmobfreeService } from '../services/admobfree.service';
import { shareMessage } from '../changeLang'
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.page.html',
  styleUrls: ['./bookmark.page.scss'],
})
export class BookmarkPage implements OnInit {

  newsArray: any;
  newsObj: any;
  category_array: Category[];
  error = '';
  language: string;
  mediaPath = config.mediaApiUrl;
  bookmarkLength: any;
  loading: any;
  hide;
  noNews;
  bookmarkTitle = bookmark;
  wrongStatus: any;
  shareMessage = shareMessage;

  constructor(private translate: TranslateService,private _admobService: AdmobfreeService, private appcomponent: AppComponent, private network: Network, private _toastService: ToastService, private platform: Platform, private socialSharing: SocialSharing, public actionSheetController: ActionSheetController, public _newsService: NewsService, public _categoryService: CategoryService, private router: Router) { }

  ngOnInit() {
    this.platform.backButton.subscribe(async () => {
      this.appcomponent.openRatingModal();
      if (this.router.url.includes('bookmarks')) {
        this.router.navigate(['settings']);
      }
    });
  }

  ionViewWillEnter() {
    this.loading = true;
    this.viewEnterFun();
    this.bookmarkedNews();
  }

  viewEnterFun(){
    this.language = localStorage.getItem('language');
    this._admobService.interstitalAdOnFivePageChange()
  }

  bookmarkedNews(): void {
    if (navigator.onLine) {

      this._newsService.getAllBookmarks().subscribe(
        (res: any) => {
          if (res.length === 0) {
            this.noNews = true
          }
          this.loading = false;
          this.newsObj = res;
          this.newsArray = this.newsObj;
          console.log(" BOOKMARKED NEWS ", this.newsArray)
          this.bookmarkLength = this.newsArray.length;
        },
        (err) => {
          this.loading = false;
          this.error = err;
        });
    }else{
      this.loading = false
      this.translate.get('No internet connection').subscribe((mes:any)=>{
				this._toastService.toastFunction(mes, 'success')
			})
    }
  }

  deleteBookmarked(id) {
    if (this.network.type == 'none') {
      this.translate.get('No internet connection').subscribe((mes:any)=>{
				this._toastService.toastFunction(mes, 'success')
			})
    } else {
      this._newsService.bookmarkPost(id).subscribe((res: any) => {
        console.log("res", res);
        this.translate.get('Bookmark Removed Successfully.').subscribe((mes:any)=>{
          this._toastService.toastFunction(mes, 'success')
        })  
        this.bookmarkedNews();
      }, err => {
        this.bookmarkedNews();
      })
    }
  }

  shareBookmarked(newsImage, link, title) {
    console.log(shareMessage[this.language])
    if (localStorage.getItem('accessToken')) {
      var message = shareMessage[this.language] + '"' + title + '" ';
      var subject = "Trivia Post";
      var url = link;
      this.socialSharing.share(message, subject, null, url)
        .then((entries) => {
          console.log('success ' + JSON.stringify(entries));
        })
        .catch((error) => {
        });
    } else {
      this.translate.get('Please Login').subscribe((mes:any)=>{
        this._toastService.toastFunction(mes, 'success')
      })  
    }
  }

  getSingleBookmark(id) {
    if (this.wrongStatus) {
      this.wrongStatus = false
    } else {
      console.log("bookmark id", id)
      this.router.navigate(['single-post/' + id + '/bookmark']);
    }
  }
  categoryClick(catId, catName) {
    this.router.navigateByUrl('/single-category/' + catId + '/' + catName);
  }
  backButton() {
    this.appcomponent.openRatingModal();
  }
}
