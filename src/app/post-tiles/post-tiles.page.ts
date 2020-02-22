import { Component, OnInit, Input, LOCALE_ID } from '@angular/core';
import { config } from '../config';
import { Router } from '@angular/router';
import { ToastService } from '../services/toast.service'
import { visitAll } from '@angular/compiler';

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
    this.visitedArray = JSON.parse(localStorage.getItem('isVisited'));
    this.isPresent = this.visitedArray.includes(this.news.newsId);

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
    this.visitedArray = JSON.parse(localStorage.getItem('isVisited'));
    this.visitedArray.push(postid);
    localStorage.setItem('isVisited',JSON.stringify(this.visitedArray))
    if (navigator.onLine) {
      if (this.wrongStatus) {
        this.wrongStatus = false
      }
      else {
        this.router.navigateByUrl('/single-post/' + postid);
      }
    } else {
      this._toastService.toastFunction('No internet connnection', 'danger');
    }
  }
}