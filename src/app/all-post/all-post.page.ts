import { Component, OnInit } from '@angular/core';
import 'hammerjs';
import { Router } from '@angular/router';
import { NewsService } from '../services/news.service';
import { config } from '../config';

@Component({
  selector: 'app-all-post',
  templateUrl: './all-post.page.html',
  styleUrls: ['./all-post.page.scss'],
})
export class AllPostPage implements OnInit {
  newsArray: any;
  mediaPath = config.mediaApiUrl;
  language: string;
  constructor(private router: Router, public _newsService: NewsService) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.getAllPost();
  }

  goToCategories() {
    this.router.navigateByUrl('/home/categories')
  }

  //get all news - HOME PAGE ( FEEDS )
  getAllPost(): void {
    this.language = localStorage.getItem('language');
    this._newsService.getAllNews().subscribe(
      (res: any) => {
        console.log("all news==========>", res)
        this.newsArray = res;
      },
      (err) => {
        this.newsArray = localStorage.newsArray;
      });
  }

  singleNews(postid){
    console.log('postid',postid);
    this.router.navigateByUrl('/single-post/'+ postid);
  }
}
