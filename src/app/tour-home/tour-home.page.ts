import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from '../services/news.service';
import { UserService } from '../services/user.service';
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
  page_number = 1;
  page_limit = 20;

  constructor(public _userService: UserService, public _newsService: NewsService, private router: Router) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.skip = localStorage.getItem('skip')
    console.log("Date in home tour", new Date().getSeconds())
    this.smallLoading = true;
    this.getAllPost(false, '');
  }
  //get all news - HOME PAGE ( FEEDS )
  async getAllPost(isFirstLoad, event) {
    this.newsArray = []
    this.latestPost = [];
    localStorage.setItem('firstTimeLoaded', 'true');

    this.language = localStorage.getItem('language');
    if (!localStorage.getItem('newsArray')) {
      if (navigator.onLine) {
        this._newsService.getAllNews(this.page_number, this.page_limit).subscribe(
          (res: any) => {
            if (this.page_number == 1) {
              this.latestPost = res.shift();
            }
            this.newsArray.push(...res);
            if (localStorage.getItem('firstLargePostClick') && [!localStorage.getItem('bookmarkFlag') || localStorage.getItem('shareFlag')] && !localStorage.getItem('skip')) {
              this.router.navigateByUrl('/single-post/' + this.latestPost.newsId);
            }
            if (isFirstLoad)
              event.target.complete();
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
            this.page_number++;
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
      this.newsArray = JSON.parse(localStorage.getItem('newsArray'))
      this.latestPost = JSON.parse(localStorage.getItem('newsArray'))[0];
      this.newsArray.splice(0, 1)
      if (localStorage.getItem('firstLargePostClick') && [!localStorage.getItem('bookmarkFlag') || localStorage.getItem('shareFlag')] && !localStorage.getItem('skip')) {
        this.router.navigateByUrl('/single-post/' + this.latestPost.newsId);
      } else {

        this.smallLoading = false;
      }
    }
    this._userService.firstTimeUser(await localStorage.getItem('language')).subscribe((res: any) => {
      this._userService.serviceFunction();
      localStorage.setItem('annonymousNotify', 'true');
    },
      (err) => {
      });

  }

  doInfinite(event) {
    this.getPagePosts(true, event);
    console.log(event);
  }

  async getPagePosts(isFirstLoad, event) {
    // this.smallLoading = true;
    localStorage.setItem('firstTimeLoaded', 'true');
    this._newsService.getAllNews(this.page_number,this.page_limit).subscribe(
        (res: any) => {
            if(this.page_number == 1){
                this.latestPost = res.shift();
            }
            this.newsArray.push(...res);
            // this.newsArray = res;
            if (isFirstLoad)
            event.target.complete();
            
            this.page_number++;
            // this.latestPost = this.newsArray.shift();
            console.log('this.allnews =======', this.newsArray)
            console.log('this.allnews =======', this.latestPost)
            this.checkForRating();
            // this.smallLoading = false;
        },
        (err) => {
            this.newsArray = localStorage.newsArray;
        });
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
