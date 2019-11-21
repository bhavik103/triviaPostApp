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
  mediaPath = config.mediaApiUrl;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  singleNews(postid) {
    console.log('postid', postid);
    this.router.navigateByUrl('/single-post/' + postid);
  }
}
