import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import 'hammerjs';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { config } from '../config';

@Component({
  selector: 'app-related-post',
  templateUrl: './related-post.page.html',
  styleUrls: ['./related-post.page.scss'],
})
export class RelatedPostPage implements OnInit {
  @Input() news: string;
  @Input() language: string;
  @Input() postCount: any;
  mediaPath = config.mediaApiUrl;
  constructor(private router: Router) { }

  ngOnInit() {
    console.log("RELATED POST", this.news)
    if (this.postCount <= 1) {
      $('.relatedPostRow').addClass('borderClass');
      console.log("GOT 4", this.postCount);
    }
  }

  singleNews(postid) {
    console.log('postid', postid);
    this.router.navigateByUrl('/single-post/' + postid);
  }
  categoryClick(catId, catName) {
    this.router.navigateByUrl('/single-category/' + catId + '/' + catName);
  }
}