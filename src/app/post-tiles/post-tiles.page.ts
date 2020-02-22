import { Component, OnInit, Input } from '@angular/core';
import { config } from '../config';
import { Router } from '@angular/router';
import { ToastService } from '../services/toast.service'

@Component({
  selector: 'app-post-tiles',
  templateUrl: './post-tiles.page.html',
  styleUrls: ['./post-tiles.page.scss'],
})
export class PostTilesPage implements OnInit {
  @Input('singleCat') singleCat: any;
  @Input('news') news: string;
  @Input('language') language: string;
  mediaPath = config.mediaApiUrl;
  wrongStatus = false
  firstLargePostClick: string;
  skip: string;
  firstTimeBlur = false;
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