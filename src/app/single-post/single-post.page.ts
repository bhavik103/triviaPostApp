import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService } from "../services/news.service";
import { config } from '../config';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { ToastService } from '../services/toast.service';
import { Network } from '@ionic-native/network/ngx';
import * as _ from 'lodash';
import { Platform } from '@ionic/angular';
import { FirebaseAnalytics } from '@ionic-native/firebase-analytics/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.page.html',
  styleUrls: ['./single-post.page.scss'],
})
export class SinglePostPage implements OnInit {
  singlepost: any;
  mediaPath = config.mediaApiUrl;
  tokenLocalStorage: string;
  loggedInUser: any;
  language: string;
  backKeyBookmark: boolean;
  backKeyCategory: boolean;
  backKeySearch: boolean;
  loading: boolean;
  news: any;
  singleNewsLoading: any;
  shareBlink: string;
  byPassedNews: any;
  constructor(private domSanitizer: DomSanitizer, private iab: InAppBrowser, private firebaseAnalytics: FirebaseAnalytics, private platform: Platform, private network: Network, private _toastService: ToastService, private _newsService: NewsService, private route: ActivatedRoute, private socialSharing: SocialSharing, private router: Router) { }

  ngOnInit() {
    this.singlePost();
    this.route.params.subscribe((param: any) => {
      this.configureBack(this.router.url, param);
    });
  }
  ionViewWillEnter() {
    this.shareBlink = localStorage.getItem('shareBlink');
    this.increaseViews();
    this.removeRedirectItem();

    if (this.platform.is('cordova')) {
      // Firebase Analytics 'screen_view' event tracking
      this.firebaseAnalytics.setCurrentScreen('Single Post').then(res => {
        console.log("firebase", res)
      })
    }
    var postId = this.route.snapshot.params['id'];
  }

  configureBack(url, param) {
    console.log("url, param", url, param);
    if (url.includes('bookmark')) {
      this.backKeyBookmark = true;
    } else if (url.includes('category')) {
      this.backKeyCategory = true;
    } else if (url.includes('search')) {
      this.backKeySearch = true;
    }
  }
  increaseViews() {
    var postId = this.route.snapshot.params['id'];

    this._newsService.increaseView(postId).subscribe((res: any) => {
      console.log("GOT RESPONSE FROM INCREASE VIEW API CALL", res)
    })
  }
  removeRedirectItem() {
    localStorage.removeItem('bookmarkId');
    localStorage.removeItem('likepostId');
  }
  singlePost() {
    this.loading = true;
    this.language = localStorage.getItem('language');
    var postId = this.route.snapshot.params['id'];

    this.tokenLocalStorage = localStorage.getItem('accessToken');
    if (this.tokenLocalStorage) {
      var base64Url = this.tokenLocalStorage.split('.')[1];
      var base64 = base64Url.replace('-', '+').replace('_', '/');
      var decodedToken = JSON.parse(window.atob(base64));
      this.loggedInUser = decodedToken.user._id;
    }
    this._newsService.getSingleNews(postId).subscribe(res => {
      const singlepostArray = [];
      singlepostArray.push(res);
      this.singlepost = singlepostArray;
      if (this.tokenLocalStorage) {
        _.forEach(res, (save: { [x: string]: boolean; bookMark: any; }) => {
          _.forEach(save.bookMark, (Id: any) => {
            if (Id == this.loggedInUser) {
              save['bookmarkKey'] = true
            }
          })
        })
      }
      this.singlepost = res;
      this.news = res[0];
      this.singlepost.splice(0, 1);
      this.loading = false;
      this.singleNewsLoading = false;
      console.log("SINGLE POST", this.news)
      this.byPassedNews = this.domSanitizer.bypassSecurityTrustHtml(this.news[this.language].content);
      this.byPassedNews = this.byPassedNews.changingThisBreaksApplicationSecurity;
      if (this.platform.is('cordova')) {
        this.firebaseAnalytics.logEvent('post_viewed', { postTitle: this.news[this.language].title }).then(res => {
          // console.log("Post Tracked", this.news[this.language].title)
        })
      }
    });
  }
  //  Do Share Post 
  sharePost(link: string, newsTitle: string, newsImage) {
    this.shareBlink = '1';
    localStorage.setItem('shareBlink', '1')
    var message = "Check out this amazing news " + '"' + newsTitle + '" ';
    var subject = "Trivia Post";
    var str = newsTitle;
    var file = this.mediaPath + newsImage;
    var url = link;
    this.socialSharing.share(url, subject, null, message)
      .then((entries) => {
      })
      .catch((error) => {
        alert('error ' + JSON.stringify(error));
      });
  }

  //  Do Bookmark
  bookmark(newsid) {
    if (!localStorage.getItem('accessToken')) {
      console.log("newsId done", newsid);
      localStorage.setItem('bookmarkId', newsid);
      this._toastService.toastFunction('You need to login first', 'danger');
      this.router.navigateByUrl('/login');
    } else {
      if (this.platform.is('cordova')) {
        if (this.network.type == 'none') {
          this.singlePost();
          this._toastService.toastFunction('No internet connection', 'danger');
        }
      } else {
        this._newsService.bookmarkPost(newsid).subscribe((res: any) => {
          this._toastService.toastFunction(res.message, 'success');
          this.singlePost();
        }, err => {
          this._toastService.toastFunction(err.error.message, 'danger');
        })
      }
    }
  }

  alreadyLiked() {
    this._toastService.toastFunction('You have already liked!', 'danger');
  }

  categoryClick(catId, catName) {
    this.router.navigateByUrl('/single-category/' + catId + '/' + catName);
  }

  openWithSystemBrowser(url) {
    let target = "_blank";
    this.iab.create(url, `_blank`);
  }
  singleNews(postid) {
    console.log('postid', postid);
    this.router.navigateByUrl('/single-post/' + postid);
  }
  singleCategory(catId, catname) {
    console.log('catId compoennt', catId)
    this.router.navigateByUrl('single-category/' + catId + '/' + catname);
  }
}