import { Component, OnInit, ViewChild, Directive, Renderer, ElementRef } from '@angular/core';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService } from '../services/news.service';
import { News } from '../home/news';
import { config } from '../config';
import { Platform } from '@ionic/angular';
import { AppComponent } from '../app.component'
import { AdmobfreeService } from '../services/admobfree.service';

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
    keywordSearch: any;
    page_number = 1;
    page_limit = 10000;
    constructor(private _admobService: AdmobfreeService,public appcomponent: AppComponent,private platform: Platform, private router: Router, public _newsService: NewsService, private renderer: Renderer, private elementRef: ElementRef, public keyboard: Keyboard) { }
    keyValue;
    @ViewChild('searchInput', { static: false }) searchInput;
    ngOnInit() {
        this.box = true;
        this.platform.backButton.subscribe(async () => {
            this.appcomponent.openRatingModal();
            if (this.router.url.includes('searchBar')) {
                this.router.navigate(['allcategory']);
            }
        });
        const element = this.elementRef.nativeElement.querySelector('ion-input');
        // to delay
        this.language = localStorage.getItem('language');
    }
    ionViewWillEnter() {
        this._admobService.interstitalAdOnFivePageChange()
        this.searchInput.setFocus()
    }
    async searchNews( value) {
        console.log(value)
        // console.log(event.target.value)
        this.loading = true;
        // this.keyValue = key;
        if (value.length == 0) {
            this.loading = false;
            this.newsArray = [];
            this.searchLength = this.newsArray;
            this.box = true;
        } else  {
            (await this._newsService.searchedNews(value, this.language, this.page_number, this.page_limit)).subscribe(
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

    // doInfinite(event) {
        
    //     this.searchNews(this.keywordSearch,true,event);
    //     console.log(event);
    // }

    getSingleSearch(postid) {
        setTimeout(() => {
            this.router.navigate(['single-post/' + postid + '/search']);
        }, 500);
    }

    categoryClick(catId, catName) {
        this.router.navigateByUrl('/single-category/' + catId + '/' + catName);
    }
    backButton() {
		this.appcomponent.openRatingModal();
	}
}