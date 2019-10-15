import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
declare var $: any;
import { NewsService } from '../services/news.service';
import * as _ from 'lodash';
import { config } from '../config';
@Component({
  selector: 'app-categry-list',
  templateUrl: './categry-list.component.html',
  styleUrls: ['./categry-list.component.scss'],
})
export class CategryListComponent implements OnInit {
  loading: boolean = false;
  language: string;
  loggedInUser: any;
  error = '';
  tokenLocalStorage: any;
  newsArray: any = [];
  isTextVisible = false;
  text;
  mediaPath = config.mediaApiUrl;
  constructor(private route: ActivatedRoute,public _newsService: NewsService ) { 
    setTimeout(function(){
			console.log("ReInitializing swiper");
			$('#scriptid').remove();
			var script = document.createElement('script');
			script.setAttribute('id', 'scriptid');
			script.src = "assets/js/swiper.js";
			document.body.appendChild(script);
		}, 1800);
  }

  ngOnInit() {
   
    this.route.params.subscribe(param => {
      console.log("params=========>", param);
      this.catNews(param.id)
    })
  }

  catNews(id): void {
    this.loading = true;
    this.language = localStorage.getItem('language');
    this.checkForToken();
    var userId = this.loggedInUser;
    this._newsService.allCatNews(id).subscribe(
      (res: any) => {
        console.log("res of cat news", res)
        this.loadNewsToPage(res, userId);
      },
      (err) => {
        this.loading = false;
        this.error = err;
      });
  }

  checkForToken() {
    this.tokenLocalStorage = localStorage.getItem('accessToken');
    if (this.tokenLocalStorage) {
      var base64Url = this.tokenLocalStorage.split('.')[1];
      var base64 = base64Url.replace('-', '+').replace('_', '/');
      var decodedToken = JSON.parse(window.atob(base64));
      this.loggedInUser = decodedToken.user._id;
    }
  }

  loadNewsToPage(res, userId) {
    this.newsArray = [];
    this.loading = false;
    if (!res.length) {
      this.isTextVisible = true
      this.text = "There are no news yet..."
    }
    this.newsArray = res;
    if (this.tokenLocalStorage) {
      _.forEach(this.newsArray, (save) => {
        _.forEach(save.bookMark, (Id) => {
          if (Id == userId) {
            save['bookmarkKey'] = true
          }
        })
      })
    }

    this.buildForSwiper();
  }

  buildForSwiper() {
    console.log("in buildfunction========================")
    for (let i = 0; i < this.newsArray.length; i++) {
      console.log("Slider", "New news for building news letter ", i);
      $(function () {
        var window_height = $(document).height() * 0.66;
        var content_height = window_height;
        function buildNewsletter() {
          if ($('#sliderContent' + i).contents().length > 0) {
            console.log("Slider", "ENTERED INTO IF STATEMENT")
            let page = $("#page_slider" + i).clone().addClass("swiper-slide").css("display", "block");
            $(".swiper-container-h > #swiper-wrapper" + i).append(page);
            $(".swiper-container-h > #swiper-wrapper" + i + "> .page_slider:first-child").css("display", "none");
            $('#sliderContent' + i).columnize({
              columns: 1,
              target: "#swiper-wrapper" + i + " .swiper-slide:last .content",
              overflow: {
                height: content_height,
                id: "#sliderContent" + i,
                doneFunc: function () {
                }
              },
            });
          } else {
            console.log("in else condition================>");
            // this.buildForSwiper();
          }
        }
        setTimeout(buildNewsletter, 1000);

      })
    }
    //  this.reInitializeSwiper();
  }

}
