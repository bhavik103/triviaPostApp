import { Component, OnInit, Input, LOCALE_ID } from '@angular/core';
import { config } from '../config';
import { Router } from '@angular/router';
import { ToastService } from '../services/toast.service'
import { visitAll } from '@angular/compiler';
import { decode } from 'punycode';

@Component({
  selector: 'app-post-tiles',
  templateUrl: './post-tiles.page.html',
  styleUrls: ['./post-tiles.page.scss'],
})
export class PostTilesPage implements OnInit {
  @Input('singleCat') singleCat: any;
  @Input('news') news: any;
  @Input('language') language: any;
  mediaPath = config.mediaApiUrl;
  wrongStatus = false
  firstLargePostClick: string;
  skip: string;
  firstTimeBlur = false;
  visitedArray: any;
  isPresent: any;
  tokenLocalStorage: string;
  constructor(private _toastService: ToastService, private router: Router) {
  }

  ionViewWillEnter() {
    const alertOnlineStatus = () => {
    }

    window.addEventListener('online', alertOnlineStatus)
    window.addEventListener('offline', alertOnlineStatus)
    if (!localStorage.getItem('firstLargePostClick')) {
      console.log("firstLargePostClick")
    }
    console.log('this.language', this.language)
  }

  ngOnInit() {
    if (!localStorage.getItem('accessToken')) {
      this.visitedArray = JSON.parse(localStorage.getItem('isVisited'));
      this.isPresent = this.visitedArray.includes(this.news.newsId);
    } else {
      this.tokenLocalStorage = localStorage.getItem('accessToken');
      if (this.tokenLocalStorage) {
        var base64Url = this.tokenLocalStorage.split('.')[1];
        var base64 = base64Url.replace('-', '+').replace('_', '/');
        var decodedToken = JSON.parse(window.atob(base64));
        if (this.news[this.language].userViewed.includes(decodedToken.user._id)) {
          this.isPresent = true;
          console.log("IS PRESENT", this.isPresent)
        }
      }
    }

    // console.log("NEWS IN TILES",this.news.newsId)
    const alertOnlineStatus = () => {
    }

    this.firstLargePostClick = localStorage.getItem('firstLargePostClick')
    this.skip = localStorage.getItem('skip');
    if (!this.firstLargePostClick && !this.skip) {
      this.firstTimeBlur = true;
    }
    this.language = localStorage.getItem('language');
    window.addEventListener('online', alertOnlineStatus)
    window.addEventListener('offline', alertOnlineStatus)
  }

  categoryClick(catId, catName) {
    if (localStorage.getItem('skip')) {
      this.router.navigateByUrl('/single-category/' + catId + '/' + catName);
    }
  }

  singleNews(postid) {
    if (localStorage.getItem('skip')) {
      if (navigator.onLine) {
        if (this.wrongStatus) {
          this.wrongStatus = false
        }
        else {
          this.visitedArray = JSON.parse(localStorage.getItem('isVisited'));
          this.visitedArray.push(postid);
          localStorage.setItem('isVisited', JSON.stringify(this.visitedArray))
          localStorage.setItem('firstLargePostClick', '1')
          // localStorage.setItem('skip', '1')
          console.log('postid', postid);
          this.router.navigateByUrl('/single-post/' + postid);

        }
      } else {
        this._toastService.toastFunction('No internet connnection', 'danger');
      }
    }
  }
}