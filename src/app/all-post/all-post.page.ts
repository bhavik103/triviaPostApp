import { Component, OnInit } from '@angular/core';
import 'hammerjs';
import { Router } from '@angular/router';
import { NewsService } from '../services/news.service';
import { config } from '../config';
import { Deeplinks } from '@ionic-native/deeplinks/ngx';
import { FCM } from '@ionic-native/fcm/ngx';
import { FirebaseDynamicLinks } from '@ionic-native/firebase-dynamic-links/ngx';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-all-post',
  templateUrl: './all-post.page.html',
  styleUrls: ['./all-post.page.scss'],
})
export class AllPostPage implements OnInit {
  newsArray: any;
  mediaPath = config.mediaApiUrl;
  language: string;
  loading: any;
  constructor(private firebaseDynamicLinks: FirebaseDynamicLinks, private fcm: FCM, private deeplinks: Deeplinks, private router: Router, public _newsService: NewsService) { }

  ngOnInit() {
    if (!config.isvisited && !config.counter) {
      this.firebaseDynamicLinks.onDynamicLink().subscribe((res: any) => {
        var postId = res.deepLink.split('?')[1].split('=')[1];
        console.log("dynamic link", res.deepLink.split('?')[1].split('=')[1])
        console.log('Is Visited:------------- 1', config.isvisited);

        if (!config.isvisited && !config.counter) {
          config.counter++;
          config.isvisited = true;
          console.log('Is Visited:------------- 2', config.isvisited);
        } else {
          config.counter++;
          config.isvisited = false;
          console.log('Is Visited:------------- 3', config.isvisited);
        }
        this.router.navigate(['single-post/' + postId]);
      }, (error: any) => {
        console.log(error)
      });
    }
  }
  ionViewWillEnter() {
    this.fcm.onNotification().subscribe(data => {
      this.router.navigate(['/single-post/' + data.newsId]);
      if (data.wasTapped) {
        console.log('Received in background', data.wasTapped);
      } else {
        console.log('Received in foreground');
      }
    });
    this.getAllPost();
    this.loading = true;
    setTimeout(() => {
      this.loading = false
    }, 300);
  }

  getAllPost() {
    this.language = localStorage.getItem('language');
    this._newsService.getAllNews().subscribe(
      (res: any) => {
        this.loading = false;
        console.log("all news==========>", res)
        this.newsArray = res;
      },
      (err) => {
        this.newsArray = localStorage.newsArray;
      });
  }

  goToCategories() {
    this.router.navigateByUrl('/home/categories')
  }

  singleNews(postid) {
    console.log('postid', postid);
    this.router.navigateByUrl('/single-post/' + postid);
  }

  categoryClick(catId, catName) {
    this.router.navigateByUrl('/single-category/' + catId + '/' + catName);
  }
}