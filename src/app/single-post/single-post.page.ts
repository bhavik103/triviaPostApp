import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, Route } from '@angular/router';
import { NewsService } from "../services/news.service";
import { config } from '../config';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { ToastService } from '../services/toast.service';
import { Network } from '@ionic-native/network/ngx';
import * as _ from 'lodash';
import { ActionSheetController, Platform } from '@ionic/angular';
import { FirebaseAnalytics } from '@ionic-native/firebase-analytics/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

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
  constructor(private iab: InAppBrowser, private firebaseAnalytics: FirebaseAnalytics, private platform: Platform, private network: Network, private _toastService: ToastService, private _newsService: NewsService, private route: ActivatedRoute, private socialSharing: SocialSharing, private router: Router) { }

  ngOnInit() {
    this.singlePost();
    this.route.params.subscribe((param: any) => {
      this.configureBack(this.router.url, param);
    });
    this.increaseViews();
  }
  ionViewWillEnter() {
    this.removeRedirectItem();
    
    // Firebase Analytics 'screen_view' event tracking
    this.firebaseAnalytics.setCurrentScreen('Single Post').then(res => {
      console.log("firebase", res)
    })
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
      console.log("NEWS", res)
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
      console.log('this.news=>>>>>>>>>>', this.news)
      this.singlepost.splice(0, 1);
      console.log("News single", this.news.newsEnglish);

      //condition for youtube icon
      if (!this.news.newsEnglish.includes("https://img.icons8.com/color/96/000000/youtube-play.png")) {
        this.loading = false;
        this.singleNewsLoading = false;
      }else{
        this.singleNewsLoading = true;
        setTimeout(() => {
          $('.singleNews').css('visibility','hidden');
        }, 0.1);
      }

      this.firebaseAnalytics.logEvent('post_viewed', { postTitle: this.singlepost[0]['newsTitleEnglish'] }).then(res => {
        console.log("Post Tracked", this.singlepost[0]['newsTitleEnglish'])
      })

      //for youtube play icon
      setTimeout(() => {
        $("[src='https://img.icons8.com/color/96/000000/youtube-play.png']").css({ "position": "absolute", "margin-top": "22%", "margin-left": "33%", "pointer-events": "none" });
        $('.singleNews').css('visibility','visible');
        this.loading = false;
        this.singleNewsLoading = false;
      }, 1000);
    });
  }
  //  Do Share Post 
  sharePost(link: string, newsTitle: string, newsImage) {
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
      if (this.network.type == 'none') {
        this.singlePost();
        this._toastService.toastFunction('No internet connection', 'danger');
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

  // //like post
  // likePost(postid) {
  //   if (!localStorage.getItem('accessToken')) {
  //     console.log("newsId done", postid);
  //     localStorage.setItem('likepostId', postid);
  //     this._toastService.toastFunction('Please login first!', 'danger');
  //     this.router.navigateByUrl('/login');
  //   } else {
  //     if (this.network.type == 'none') {
  //       this._toastService.toastFunction('No internet connection', 'danger');
  //       this.singlePost();
  //     } else {
  //       this._newsService.likepost(postid).subscribe((res: any) => {
  //         this.singlePost();
  //         this._toastService.toastFunction(res.message, 'success');
  //       }), err => {
  //         this._toastService.toastFunction(err.error.message, 'danger');
  //       }
  //     }
  //   }
  // }

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