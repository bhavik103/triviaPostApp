import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { config } from '../config';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { Network } from '@ionic-native/network/ngx';
let AllCategoryComponent = class AllCategoryComponent {
    constructor(network, platform, toastController, _categoryService, router) {
        this.network = network;
        this.platform = platform;
        this.toastController = toastController;
        this._categoryService = _categoryService;
        this.router = router;
        this.error = '';
        this.mediaPath = config.mediaApiUrl;
        this.getCategories();
        this.categories$;
        this.myTitle = "Old Title";
    }
    ngOnInit() {
        this.language = localStorage.getItem('language');
    }
    ionViewWillEnter() {
        // this.loading = true;
        this.platform.backButton.subscribe(() => tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (this.router.url.includes('allcategory')) {
                this.router.navigate(['home']);
            }
        }));
        this.language = localStorage.getItem('language');
        console.log("language in all category", this.language);
        // this.getCategories();
    }
    handleCategories(res, that) {
    }
    handleCatError(err) {
        this.loading = false;
        this.error = err;
        console.error(err);
    }
    handleCatComplete() {
        console.log("Observable Category Completed");
    }
    getCategories() {
        this.tokenLocalStorage = localStorage.getItem('accessToken');
        if (this.tokenLocalStorage) {
            var base64Url = this.tokenLocalStorage.split('.')[1];
            var base64 = base64Url.replace('-', '+').replace('_', '/');
            var decodedToken = JSON.parse(window.atob(base64));
            this.loggedInUser = decodedToken.user._id;
            console.log("Decoded", this.loggedInUser);
        }
        var that = this;
        console.log("before", this.categories$);
        this.categories$ = this._categoryService.getAll().pipe();
        console.log("after", this.categories$);
    }
    search() {
        this.router.navigate(['searchBar']);
    }
    categoryNews(id) {
        let navigationExtras = {
            state: {
                catId: id
            }
        };
        this.router.navigate(['catResult'], navigationExtras);
    }
    addNotify(catId) {
        if (this.network.type == 'none') {
            this.toast = this.toastController.create({
                message: "No internet connection",
                duration: 2000,
                color: 'danger'
            }).then((toastData) => {
                toastData.present();
            });
        }
        else {
            this._categoryService.notifyUser(catId).subscribe((res) => {
                console.log("res", res);
                this.toast = this.toastController.create({
                    message: res.message,
                    duration: 2000,
                    color: 'success'
                }).then((toastData) => {
                    this.getCategories();
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
    }
};
AllCategoryComponent = tslib_1.__decorate([
    Component({
        selector: 'app-all-category',
        templateUrl: './all-category.component.html',
        styleUrls: ['./all-category.component.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [Network, Platform, ToastController, CategoryService, Router])
], AllCategoryComponent);
export { AllCategoryComponent };
//# sourceMappingURL=all-category.component.js.map