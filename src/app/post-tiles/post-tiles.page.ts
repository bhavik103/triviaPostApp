import { Component, OnInit,Input } from '@angular/core';
import { config } from '../config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-tiles',
  templateUrl: './post-tiles.page.html',
  styleUrls: ['./post-tiles.page.scss'],
})
export class PostTilesPage implements OnInit {

  @Input('news') news: string;
  @Input('language') language: string;
  mediaPath = config.mediaApiUrl;
  constructor(private router: Router) {
  }

  ngOnInit() {
    console.log('this.newsArray tiles',this.news);
  }

  categoryClick(catId, catName) {
    this.router.navigateByUrl('/single-category/' + catId + '/' + catName);
  }

  singleNews(postid) {
    console.log('postid', postid);
    this.router.navigateByUrl('/single-post/' + postid);
  }
}