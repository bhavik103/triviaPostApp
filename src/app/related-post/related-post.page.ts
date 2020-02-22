import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import 'hammerjs';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { config } from '../config';
import {ToastService} from '../services/toast.service';
@Component({
  selector: 'app-related-post',
  templateUrl: './related-post.page.html',
  styleUrls: ['./related-post.page.scss'],
})
export class RelatedPostPage implements OnInit {
  @Input() news: any;
  @Input() language: string;
  @Input() postCount: any;
  mediaPath = config.mediaApiUrl;
  wrongStatus: boolean;
  visitedArray: any;
  isPresent: any;
  constructor(private router: Router, private _toastService: ToastService) { }

  ngOnInit() {
    this.visitedArray = JSON.parse(localStorage.getItem('isVisited'));
    this.isPresent = this.visitedArray.includes(this.news.newsId);
    console.log("RELATED POST", this.news)
    $('.relatedPostRow').addClass('borderClass');
    console.log("GOT 4", this.postCount);
  }

  singleNews(postid) {
    this.visitedArray = JSON.parse(localStorage.getItem('isVisited'));
    this.visitedArray.push(postid);
    localStorage.setItem('isVisited',JSON.stringify(this.visitedArray))
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
  categoryClick(catId, catName) {
    localStorage.setItem('skip', '1')
    this.router.navigateByUrl('/single-category/' + catId + '/' + catName);
  }
}