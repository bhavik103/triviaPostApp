import { Component, OnInit,Input } from '@angular/core';
import { config } from '../config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-latest-post',
  templateUrl: './latest-post.page.html',
  styleUrls: ['./latest-post.page.scss'],
})
export class LatestPostPage implements OnInit {
  @Input() news: string;
  mediaPath = config.mediaApiUrl;
  language: string;
  constructor(private router: Router) {
    // console.log(news)
  }

  ngOnInit() {
    this.language = localStorage.getItem('language');
    console.log('Latest Page',this.news);
  }

  categoryClick(catId, catName) {
    this.router.navigateByUrl('/single-category/' + catId + '/' + catName);
  }

  singleNews(postid) {
    console.log('postid', postid);
    this.router.navigateByUrl('/single-post/' + postid);
  }
}
