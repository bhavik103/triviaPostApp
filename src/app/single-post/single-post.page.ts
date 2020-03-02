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
import { AlertController } from '@ionic/angular';
import { AppComponent } from '../app.component'
import { modalSignupButton, clickShare, clickBookmark, modalSkipButton, language, sharePostModalContent, sharePostModal, tourCategory, modalBookmarkText, modalBookmarkTitle, modalNotificationText, modalNotificationTitle, proceedTour } from 'app/changeLang';

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
  skip: string;
  loginBookmark: any;
  firstTimeBlur = false;
  showRateModal: boolean;
  bookmarkModal: boolean;
  modalSignupButton = modalSignupButton;
  clickShare = clickShare;
  clickBookmark = clickBookmark;
  tourCategory = tourCategory;
  modalSkipButton = modalSkipButton;
  modalBookmarkTitle = modalBookmarkTitle
  modalBookmarkText = modalBookmarkText
  sharePostModal = sharePostModal
  sharePostModalContent = sharePostModalContent;
  shareModal: boolean;
  bookmarkFlag: string;
  shareFlag: string;
  constructor(public appcomponent: AppComponent, private alertController: AlertController, private domSanitizer: DomSanitizer, private iab: InAppBrowser, private firebaseAnalytics: FirebaseAnalytics, private platform: Platform, private network: Network, private _toastService: ToastService, private _newsService: NewsService, private route: ActivatedRoute, private socialSharing: SocialSharing, private router: Router) { }

  ngOnInit() {
    this.platform.backButton.subscribe(async () => {
      this.appcomponent.openRatingModal();
    });
    this.route.params.subscribe((param: any) => {
      this.configureBack(this.router.url, param);
    });
  }
  ionViewWillLeave() {
    this.showRateModal = true;
  }
  ionViewWillEnter() {
    if (localStorage.getItem('bookmarkFlag')) {
      this.bookmarkFlag = '1'
    }
    if (localStorage.getItem('shareFlag')) {
      this.shareFlag = '1'
    }
    this.firstTimeBlur = false;
    if (localStorage.getItem('bookmarkId')) {
      this.bookmark(localStorage.getItem('bookmarkId'));
    }
    this.shareBlink = localStorage.getItem('shareBlink');
    this.skip = localStorage.getItem('skip');
    this.increaseViews();
    this.removeRedirectItem();
    if (!this.skip) {
      this.firstTimeBlur = true;
    }
    var postId = this.route.snapshot.params['id'];
    if (this.platform.is('cordova')) {
      // Firebase Analytics 'screen_view' event tracking
      this.firebaseAnalytics.setCurrentScreen('Single Post').then(res => {
        console.log("firebase", res)
      })
    }
    this.singlePost();
  }

  configureBack(url, param) {
    console.log("url, param", url, param);
    if (url.includes('bookmark')) {
      this.singlePost();
      this.backKeyBookmark = true;
    } else if (url.includes('category')) {
      this.backKeyCategory = true;
    } else if (url.includes('search')) {
      this.backKeySearch = true;
    } else {
      this.singlePost();
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
    this.singlePostfun(postId);
  }

  singlePostfun(postid) {
    this._newsService.getSingleNews(postid).subscribe(res => {
      const singlepostArray = [];
      singlepostArray.push(JSON.parse(JSON.stringify(res)));
      this.singlepost = JSON.parse(JSON.stringify(singlepostArray));
      if (this.tokenLocalStorage) {
        _.forEach(res, (save: { [x: string]: boolean; bookMark: any; }) => {
          _.forEach(save.bookMark, (Id: any) => {
            if (Id.toString() == this.loggedInUser) {
              console.log("ID =====", Id);
              save['bookmarkKey'] = true
            }
          })
        })
      }
      this.singlepost = JSON.parse(JSON.stringify(res));
      this.news = JSON.parse(JSON.stringify(res[0]));
      this.singlepost.splice(0, 1);
      this.loading = false;
      console.log("SINGLE POST", this.news)
      this.byPassedNews = this.domSanitizer.bypassSecurityTrustHtml(this.news[this.language].content);
      this.byPassedNews = this.byPassedNews.changingThisBreaksApplicationSecurity;
      console.log('this.byPassedNews', res)
      if (this.platform.is('cordova')) {
        this.firebaseAnalytics.logEvent('post_viewed', { postTitle: this.news[this.language].title }).then(res => {
          // console.log("Post Tracked", this.news[this.language].title)
        })
      }
    });
  }
  //  Do Share Post 
  sharePost(link, newsTitle, newsImage) {
    if (!localStorage.getItem('shareFlag')) {
      this.shareModal = true;
    } else {
      console.log(link, newsTitle, newsImage)
      this.shareBlink = '1';
      this.skip = '1';
      this.firstTimeBlur = false;
      localStorage.setItem('shareBlink', '1')
      localStorage.setItem('skip', '1')
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
  }

  //  Do Bookmark
  bookmark(newsid) {
    if (!localStorage.getItem('bookmarkFlag')) {
      this.bookmarkModal = true;
    } else {
      this.firstTimeBlur = false;
      this.shareBlink = '1';
      this.skip = '1'
      localStorage.setItem('shareBlink', '1')
      localStorage.setItem('skip', '1')
      if (!localStorage.getItem('accessToken')) {
        localStorage.setItem('bookmarkId', newsid);
        this._toastService.toastFunction('You need to login first', 'danger');
        this.router.navigateByUrl('/login');
      } else {
        if (this.network.type == 'none') {
          this.singlePostfun(newsid);
          this._toastService.toastFunction('No internet connection', 'danger');
        } else {
          this._newsService.bookmarkPost(newsid).subscribe((res: any) => {
            this._toastService.toastFunction(res.message, 'success');
            this.singlePostfun(newsid);

            if (localStorage.getItem('bookmarkId')) {
              localStorage.removeItem('bookmarkId')
              this.loginBookmark = true;
            }
          }, err => {
            this._toastService.toastFunction(err.error.message, 'danger');
          })
        }
      }
    }
  }

  alreadyLiked() {
    this._toastService.toastFunction('You have already liked!', 'danger');
  }

  openWithSystemBrowser(url) {
    if (localStorage.getItem('skip')) {
      this.iab.create(url, `_blank`);
    }
  }
  singleNews(postid) {
    this.firstTimeBlur = false;
    localStorage.setItem('skip', '1')
    localStorage.setItem('skip', 'true');
    localStorage.setItem('shareBlink', '1');
    localStorage.setItem('catSelect', '1');
    localStorage.setItem('firstLargePostClick', '1');
    this.skip = localStorage.getItem('skip');
    this.router.navigateByUrl('/single-post/' + postid);
  }
  singleCategory(catId, catname) {
    if (localStorage.getItem('skip')) {
      this.firstTimeBlur = false
      localStorage.setItem('skip', '1')
      localStorage.setItem('skip', 'true');
      localStorage.setItem('shareBlink', '1');
      localStorage.setItem('catSelect', '1');
      localStorage.setItem('firstLargePostClick', '1');
      this.skip = localStorage.getItem('skip');
      localStorage.setItem('skip', '1')
      this.router.navigateByUrl('single-category/' + catId + '/' + catname);
    }
  }
  backClick() {
    this.appcomponent.openRatingModal();
  }
  async skipTour() {
    if (!localStorage.getItem('skip') && localStorage.getItem('firstLargePostClick')) {

      const alert = await this.alertController.create({
        header: 'Confirm!',
        message: 'Are you sure you want to skip the <strong>tour</strong>?',
        cssClass: 'alertCustomCss',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',

            handler: (blah) => {
            }
          }, {
            text: 'Skip',

            handler: () => {
              localStorage.setItem('skip', '1')
              localStorage.setItem('skip', 'true');
              localStorage.setItem('shareBlink', '1');
              localStorage.setItem('catSelect', '1');
              localStorage.setItem('firstLargePostClick', '1');
              this.skip = localStorage.getItem('skip');
              this.router.navigateByUrl('all-categories');
            }
          }
        ]
      });
      await alert.present();
    }
  }

  homeClick() {
    localStorage.setItem('skip', '1')
  }
  bookmarkClose() {
    this.bookmarkModal = false;
    localStorage.setItem('bookmarkFlag', '1')
    this.bookmarkFlag = '1';
    if (localStorage.getItem('shareFlag') && localStorage.getItem('bookmarkFlag')) {
      localStorage.setItem('skip', '1');
      this.skip = '1';
    }
  }
  shareClose() {
    this.shareModal = false;
    localStorage.setItem('shareFlag', '1');
      this.shareFlag = '1';
    if (localStorage.getItem('shareFlag') && localStorage.getItem('bookmarkFlag')) {
      localStorage.setItem('skip', '1');
      this.skip = '1';
    }
  }
  signup() {
    this.router.navigateByUrl('/login')
  }
}