import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from '../services/news.service';
@Component({
  selector: 'app-tour-home',
  templateUrl: './tour-home.page.html',
  styleUrls: ['./tour-home.page.scss'],
})
export class TourHomePage implements OnInit {
  newsArray: any;
  latestPost: any;
  smallLoading: boolean;
  language: string;
  skip: any;
  loading: boolean;
  showRateModal: boolean;
  
  constructor(public _newsService: NewsService, private router: Router) { }
  
  ngOnInit() {
  }
  
  ionViewWillEnter() {
    this.skip = localStorage.getItem('skip')
    console.log("Date in home tour",new Date().getSeconds())
    this.smallLoading = true;
    this.getAllPost();
  }
  //get all news - HOME PAGE ( FEEDS )
  async getAllPost() {
    this.newsArray = []
    this.latestPost = [];
    localStorage.setItem('firstTimeLoaded', 'true');

    this.language = localStorage.getItem('language');
    if (!localStorage.getItem('newsArray') || localStorage.getItem('skip') || localStorage.getItem('firstLargePostClick')) {
      if (navigator.onLine) {
        this._newsService.getAllNews().subscribe(
          (res: any) => {
            this.newsArray = res;
            this.latestPost = res[0];
            if (localStorage.getItem('firstLargePostClick') && [!localStorage.getItem('bookmarkFlag') || localStorage.getItem('shareFlag')] && !localStorage.getItem('skip')) {
              this.router.navigateByUrl('/single-post/' + this.latestPost.newsId);
            }
            console.log('this.latestPost', this.latestPost)
            this.newsArray.splice(0, 1);
            $('.newsFeedBlock').hide();

            if (!this.skip) {
              console.log(new Date())
              $('.newsFeedBlock').show();
              setTimeout(() => {
                this.smallLoading = false;
                this.loading = false
              }, 1500);
            } else {
              this.smallLoading = false;
              this.loading = false
              $('.newsFeedBlock').show();
            }
            this.checkForRating();
          },
          (err) => {
            this.newsArray = localStorage.newsArray;
          });
      } else {
        this.newsArray = JSON.parse(localStorage.getItem('newsArray'))
        this.latestPost = JSON.parse(localStorage.getItem('newsArray'))[0];
        this.newsArray.splice(0, 1)
      }
    } else {
      console.log("Date in home tour outside tour",new Date().getSeconds())
      // setTimeout(() => {
        // console.log("Date in home tour",new Date().getSeconds())
      // }, 2000);
      this.newsArray = JSON.parse(localStorage.getItem('newsArray'))
      this.latestPost = JSON.parse(localStorage.getItem('newsArray'))[0];
      this.newsArray.splice(0, 1)
      this.smallLoading = false;



    }
  }

  checkForRating() {
    if (localStorage.getItem('isRated') != 'true' || localStorage.getItem('isRated') == 'pending') {
      this.showRateModal = true;
    } else {
      this.showRateModal = false;
    }
  }
  //navigate to searchbar
  search() {
    if (localStorage.getItem('skip')) {
      this.router.navigateByUrl('/searchBar');
    }
  }
  settings() {
    if (localStorage.getItem('skip')) {
      this.router.navigateByUrl('/settings');
    }
  }
}
