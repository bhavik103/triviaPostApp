import { Component, OnInit, Input } from '@angular/core';
import { config } from '../config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-large-post',
  templateUrl: './large-post.page.html',
  styleUrls: ['./large-post.page.scss'],
})
export class LargePostPage implements OnInit {
  @Input('news') news: any;
  @Input('singleCat') singleCat: any;
  @Input('language') language: string;
  mediaPath = config.mediaApiUrl;
  firstLargePostClick: string;
  constructor(private router: Router) {
  }

  ngOnInit() {
    console.log("news[language].title", this.news[this.language].title)
    console.log('this.news', this.news)
    this.firstLargePostClick = localStorage.getItem('firstLargePostClick')
  }
  
  ionViewWillEnter() {
    if (!localStorage.getItem('firstLargePostClick')) {
      console.log("firstLargePostClick")
    }
    this.language = localStorage.getItem('language');
    console.log('this.language', this.language)
  }

  categoryClick(catId, catName) {
    this.router.navigateByUrl('/single-category/' + catId + '/' + catName);
  }

  singleNews(postid) {
    console.log('postid', postid);
    localStorage.setItem('firstLargePostClick','1')
    this.firstLargePostClick = '1';
    this.router.navigateByUrl('/single-post/' + postid);
  }

}
