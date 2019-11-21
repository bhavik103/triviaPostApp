import { Component, OnInit, Input } from '@angular/core';
import { config } from '../config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-latest-post',
  templateUrl: './latest-post.page.html',
  styleUrls: ['./latest-post.page.scss'],
})
export class LatestPostPage implements OnInit {
  @Input('news') news: any;
  @Input('index') index: any;

  mediaPath = config.mediaApiUrl;
  language: string;
  constructor(private router: Router) {
  }
  
  ngOnInit() {
    console.log('this.news', this.news)
    this.language = localStorage.getItem('language');
  }

  categoryClick(catId, catName) {
    this.router.navigateByUrl('/single-category/' + catId + '/' + catName);
  }

  singleNews(postid) {
    console.log('postid', postid);
    this.router.navigateByUrl('/single-post/' + postid);
  }
}