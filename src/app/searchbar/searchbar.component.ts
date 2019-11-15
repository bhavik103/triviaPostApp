import { Component, OnInit, ViewChild, Directive, Renderer, ElementRef } from '@angular/core';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService } from '../services/news.service';
import { News } from '../home/news';
import { config } from '../config';
import { Platform } from '@ionic/angular';
@Component({
    selector: 'app-searchbar',
    templateUrl: './searchbar.component.html',
    styleUrls: ['./searchbar.component.scss'],
})

@Directive({
    selector: '[set-focuser]' // Attribute selector
})
export class SearchbarComponent implements OnInit {
    catId: any;
    newsArray: News[];
    error = '';
    language: string;
    mediaPath = config.mediaApiUrl;
    searchLength: any;
    loading: any;
    box: any;
    constructor(private platform: Platform, private router: Router, public _newsService: NewsService, private renderer: Renderer, private elementRef: ElementRef, public keyboard: Keyboard) { }
    keyValue;
    @ViewChild('searchInput', { static: false }) searchInput;
    ngOnInit() {
        this.box = true;
        this.platform.backButton.subscribe(async () => {
            if (this.router.url.includes('searchBar')) {
                this.router.navigate(['allcategory']);
            }
        });
        const element = this.elementRef.nativeElement.querySelector('ion-input');
        // to delay
        this.language = localStorage.getItem('language');
    }
    ionViewWillEnter() {
        this.searchInput.setFocus()
    }
    searchNews(key) {
        this.loading = true;
        this.keyValue = key;
        if (this.keyValue.length == 0) {
            this.loading = false;
            this.newsArray = [];
            this.searchLength = this.newsArray;
            this.box = true;
        } else {
            this._newsService.searchedNews(key).subscribe(
                (res: any) => {
                    this.loading = false;
                    this.newsArray = res;
                    this.searchLength = this.newsArray.length;
                    console.log(this.newsArray);
                    this.box = false;
                },
                (err) => {
                    this.loading = false;
                    this.error = err;
                });
        }
    }

    getSingleSearch(postid) {
        //    this.keyboard.hide();
        setTimeout(() => {
            this.router.navigate(['single-post/' + postid + '/search']);
        }, 500);
    }
}