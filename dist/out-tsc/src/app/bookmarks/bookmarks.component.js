import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { config } from '../config';
import { Router } from '@angular/router';
import { NewsService } from '../services/news.service';
import { ActionSheetController, Platform } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Observable } from 'rxjs/Observable';
let BookmarksComponent = class BookmarksComponent {
    constructor(platform, socialSharing, toastController, actionSheetController, _newsService, _categoryService, router) {
        this.platform = platform;
        this.socialSharing = socialSharing;
        this.toastController = toastController;
        this.actionSheetController = actionSheetController;
        this._newsService = _newsService;
        this._categoryService = _categoryService;
        this.router = router;
        this.error = '';
        this.mediaPath = config.mediaApiUrl;
    }
    ngOnInit() {
        this.platform.backButton.subscribe(() => tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (this.router.url.includes('bookmarks')) {
                this.router.navigate(['settings']);
            }
        }));
        this.bookmarkedNews();
        this.language = localStorage.getItem('language');
    }
    ionViewWillEnter() {
        // // Check Internet conectivity
        var offline = Observable.fromEvent(document, "offline");
        var online = Observable.fromEvent(document, "online");
        offline.subscribe(() => {
            this.hide = false;
            this.toast = this.toastController.create({
                message: 'No internet connection',
                animated: true,
                showCloseButton: true,
                duration: 2000,
                closeButtonText: "OK",
                cssClass: "my-toast",
                position: "bottom",
                color: "danger"
            }).then((obj) => {
                obj.present();
            });
        });
    }
    bookmarkedNews() {
        this.loading = true;
        this._newsService.getAllBookmarks().subscribe((res) => {
            this.loading = false;
            this.newsObj = res;
            this.newsArray = this.newsObj;
            this.bookmarkLength = this.newsArray.length;
        }, (err) => {
            this.loading = false;
            this.error = err;
        });
    }
    bookmarkAction(id, title) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log(id);
            const actionSheet = yield this.actionSheetController.create({
                buttons: [{
                        text: 'Remove',
                        role: 'destructive',
                        handler: () => {
                            this._newsService.bookmarkPost(id).subscribe((res) => {
                                console.log("res", res);
                                this.toast = this.toastController.create({
                                    message: res.message,
                                    duration: 2000,
                                    color: 'success'
                                }).then((toastData) => {
                                    this.bookmarkedNews();
                                    console.log(toastData);
                                    toastData.present();
                                });
                            }, err => {
                                this.toast = this.toastController.create({
                                    message: err.error.message,
                                    duration: 2000,
                                    color: 'danger'
                                }).then((toastData) => {
                                    console.log(toastData);
                                    toastData.present();
                                });
                            });
                        }
                    }, {
                        text: 'Share',
                        handler: () => {
                            var message = "Check out this amazing news " + '" ' + title + ' "';
                            var subject = "Trivia Post";
                            var url = 'https://triviapost.com/post/' + id;
                            this.socialSharing.share(message, subject, null, url)
                                .then((entries) => {
                                console.log('success ' + JSON.stringify(entries));
                            })
                                .catch((error) => {
                            });
                        }
                    }]
            });
            yield actionSheet.present();
        });
    }
    getSingleBookmark(id) {
        this.router.navigate(['post/' + id]);
    }
};
BookmarksComponent = tslib_1.__decorate([
    Component({
        selector: 'app-bookmarks',
        templateUrl: './bookmarks.component.html',
        styleUrls: ['./bookmarks.component.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [Platform, SocialSharing, ToastController, ActionSheetController, NewsService, CategoryService, Router])
], BookmarksComponent);
export { BookmarksComponent };
//# sourceMappingURL=bookmarks.component.js.map