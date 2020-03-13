import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Category } from '../home/category';
import { config } from '../config';
import { Router } from '@angular/router';
import { NewsService } from '../services/news.service';
import { News } from '../home/news';
import { ActionSheetController, Platform } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Observable } from 'rxjs/Observable';
import { ToastService } from '../services/toast.service';
import { Network } from '@ionic-native/network/ngx';
import { bookmark } from '../changeLang';
import { AppComponent } from '../app.component'
import { AdmobfreeService } from '../services/admobfree.service';

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

  constructor(private _admobService: AdmobfreeService, private appcomponent: AppComponent, private network: Network, private _toastService: ToastService, private platform: Platform, private socialSharing: SocialSharing, public actionSheetController: ActionSheetController, public _newsService: NewsService, public _categoryService: CategoryService, private router: Router) { }

  ngOnInit() {
    this.platform.backButton.subscribe(async () => {
      this.appcomponent.openRatingModal();
      if (this.router.url.includes('bookmarks')) {
        this.router.navigate(['settings']);
      }
    });
    this.language = localStorage.getItem('language');
  }

  onPress(newsImage, fcmLink, newsId, newsTitleEnglish, $event) {
    console.log('newsId=', newsId)
  }
  ionViewWillEnter() {
    this._admobService.interstitalAdOnFivePageChange()
    this.bookmarkedNews();
    // // Check Internet conectivity
    var offline = Observable.fromEvent(document, "offline");
    var online = Observable.fromEvent(document, "online");

    offline.subscribe(() => {
      this.hide = false;
      const message = 'No internet connection';
      const color = 'danger';
      this._toastService.toastFunction(message, color);
    });
  }

  bookmarkedNews(): void {
    this.loading = true;
    this._newsService.getAllBookmarks().subscribe(
      (res: any) => {
        if (res.length === 0) {
          this.noNews = true
        }
        this.loading = false;
        this.newsObj = res;
        this.newsArray = this.newsObj;
        console.log(" BOOKMARKED NEWS", this.newsArray)
        this.bookmarkLength = this.newsArray.length;
      },
      (err) => {
        this.loading = false;
        this.error = err;
      });
  }

  deleteBookmarked(id) {
    if (this.network.type == 'none') {
      this._toastService.toastFunction('No internet connection', 'danger');
    } else {
      this._newsService.bookmarkPost(id).subscribe((res: any) => {
        console.log("res", res);
        this._toastService.toastFunction(res.message, 'success');
        this.bookmarkedNews();
      }, err => {
        this._toastService.toastFunction(err.error.message, 'danger');
        this.bookmarkedNews();
      })
    }
  }

  shareBookmarked(newsImage, link, title) {
    if (localStorage.getItem('accessToken')) {
      var message = "Check out this amazing news " + '"' + title + '" ';
      var subject = "Trivia Post";
      var url = link;
      // var file = this.mediaPath + newsImage;
      this.socialSharing.share(message, subject, null, url)
        .then((entries) => {
          console.log('success ' + JSON.stringify(entries));
        })
        .catch((error) => {
        });
    }else{
      this._toastService.toastFunction('You need to login first!','danger')
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
