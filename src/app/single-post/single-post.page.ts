import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, Route } from '@angular/router';
import { NewsService } from "../services/news.service";
import { config } from '../config';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { ToastService } from '../services/toast.service';
import { Network } from '@ionic-native/network/ngx';
import * as _ from 'lodash';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.page.html',
  styleUrls: ['./single-post.page.scss'],
})
export class SinglePostPage implements OnInit {
  singlepost: any;
  mediaPath = config.mediaApiUrl;
  tokenLocalStorage: string;
  loggedInUser: any;
  language: string;

  constructor(private network: Network, private _toastService: ToastService, private _newsService: NewsService, private route: ActivatedRoute, private socialSharing: SocialSharing, private router: Router) { }

  ngOnInit() {
    this.singlePost();
  }

  singlePost() {
    this.language = localStorage.getItem('language');
    var postId = this.route.snapshot.params['id'];
    this.tokenLocalStorage = localStorage.getItem('accessToken');
    if (this.tokenLocalStorage) {
      var base64Url = this.tokenLocalStorage.split('.')[1];
      var base64 = base64Url.replace('-', '+').replace('_', '/');
      var decodedToken = JSON.parse(window.atob(base64));
      this.loggedInUser = decodedToken.user._id;
    }
    this._newsService.getSingleNews(postId).subscribe(res => {
      const singlepostArray = [];
      singlepostArray.push(res[0]);
      this.singlepost = singlepostArray;
      if (this.tokenLocalStorage) {
        _.forEach(this.singlepost, (save: { [x: string]: boolean; bookMark: any; }) => {
          _.forEach(save.bookMark, (Id: any) => {
            if (Id == this.loggedInUser) {
              save['bookmarkKey'] = true
            }
          })
        })
      }
      if (this.tokenLocalStorage) {
        _.forEach(this.singlepost, (save: { [x: string]: boolean; like: any; }) => {
          _.forEach(save.like, (Id: any) => {
            if (Id == this.loggedInUser) {
              save['likeKey'] = true
            }
          })
        })
      }
      console.log("Single newsssssss", this.singlepost);
    });
  }

  titleCaseWord(word: string) {
    if (!word) return word;
    return word[0].toUpperCase() + word.substr(1).toLowerCase();
  }

  //  Do Share Post 
  sharePost(id: string, newsTitle: string) {
    var message = "Check out this amazing news " + '" ' + newsTitle + ' "';
    var subject = "Trivia Post";
    var str = newsTitle;
    var url = 'https://triviapost.com/post/' + id;
    this.socialSharing.share(message, subject, null, url)
      .then((entries) => {
      })
      .catch((error) => {
        alert('error ' + JSON.stringify(error));
      });
  }

  //  Do Bookmark
  bookmark(newsid) {
    if (this.network.type == 'none') {
      this.singlePost();
      this._toastService.toastFunction('No internet connection', 'danger');
    } else {
      this._newsService.bookmarkPost(newsid).subscribe((res: any) => {
        this._toastService.toastFunction(res.message, 'success');
        this.singlePost();
      }, err => {
        this._toastService.toastFunction(err.error.message, 'danger');
      })
    }
  }

  //like post
  likePost(postid){
    this._newsService.likepost(postid).subscribe((res: any) =>{
      this.singlePost();
      this._toastService.toastFunction(res.message,'success');
    }), err=> {
      this._toastService.toastFunction(err.error.message,'danger');
    }
  }

  alreadyLiked(){
    this._toastService.toastFunction('You have already liked!','danger');
  }

  categoryClick(catId,catName){
    this.router.navigateByUrl('/single-category/'+catId+'/'+catName);
  }
}
