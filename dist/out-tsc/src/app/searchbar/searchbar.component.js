import * as tslib_1 from "tslib";
import { Component, Directive, Renderer, ElementRef } from '@angular/core';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { Router } from '@angular/router';
import { NewsService } from '../services/news.service';
import { config } from '../config';
import { Platform } from '@ionic/angular';
let SearchbarComponent = class SearchbarComponent {
    constructor(platform, router, _newsService, renderer, elementRef, keyboard) {
        this.platform = platform;
        this.router = router;
        this._newsService = _newsService;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.keyboard = keyboard;
        this.error = '';
        this.mediaPath = config.mediaApiUrl;
    }
    ngOnInit() {
        this.platform.backButton.subscribe(() => tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (this.router.url.includes('searchBar')) {
                this.router.navigate(['allcategory']);
            }
        }));
        const element = this.elementRef.nativeElement.querySelector('ion-input');
        // to delay
        setTimeout(() => {
            this.renderer.invokeElementMethod(element, 'focus', []);
            this.keyboard.show();
        }, 500);
        this.language = localStorage.getItem('language');
    }
    searchNews(key) {
        this.keyValue = key;
        if (this.keyValue.length == 0) {
            this.newsArray = [];
            this.searchLength = this.newsArray;
        }
        else {
            this._newsService.searchedNews(key).subscribe((res) => {
                this.newsArray = res;
                this.searchLength = this.newsArray.length;
                console.log(this.newsArray);
            }, (err) => {
                this.error = err;
            });
        }
    }
    getSingleSearch() {
        this.keyboard.hide();
        setTimeout(() => {
            this.router.navigate(['home/search-news/' + this.keyValue]);
        }, 500);
    }
};
SearchbarComponent = tslib_1.__decorate([
    Component({
        selector: 'app-searchbar',
        templateUrl: './searchbar.component.html',
        styleUrls: ['./searchbar.component.scss'],
    }),
    Directive({
        selector: '[set-focuser]' // Attribute selector
    }),
    tslib_1.__metadata("design:paramtypes", [Platform, Router, NewsService, Renderer, ElementRef, Keyboard])
], SearchbarComponent);
export { SearchbarComponent };
//# sourceMappingURL=searchbar.component.js.map