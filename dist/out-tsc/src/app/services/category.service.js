import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from '../config';
import { Observable, throwError } from 'rxjs';
import { Network } from '@ionic-native/network/ngx';
import * as _ from 'lodash';
let CategoryService = class CategoryService {
    constructor(network, http) {
        this.network = network;
        this.http = http;
    }
    handleError(error) {
        return throwError('Error! something went wrong.');
    }
    //get all cateogries
    getAll() {
        const tokenLocalStorage = localStorage.getItem('accessToken');
        if (tokenLocalStorage) {
            var base64Url = tokenLocalStorage.split('.')[1];
            var base64 = base64Url.replace('-', '+').replace('_', '/');
            var decodedToken = JSON.parse(window.atob(base64));
            this.loggedInUser = decodedToken.user._id;
            console.log("Decoded", this.loggedInUser);
        }
        return new Observable(observer => {
            this.categories = JSON.parse(localStorage.getItem("categories"));
            this.notifyChange();
            observer.next(this.categories);
            if (this.network.type == 'none') {
                console.log(JSON.parse(localStorage.getItem("newsArray")));
                observer.complete();
            }
            else {
                this.http.get(config.baseApiUrl + "category").subscribe((result) => {
                    this.categories = result['data'];
                    localStorage.setItem('categories', JSON.stringify(this.categories));
                    this.notifyChange();
                    observer.next(this.categories);
                }, (error) => {
                    observer.error(error);
                });
                // setInterval(function(){
                // 	var cats = getLocalStorageCategories();
                // 	console.log("Next Service Data = ",cats);
                // 	observer.next(cats);
                // 	function getLocalStorageCategories(){
                // 		return JSON.parse(localStorage.getItem("categories"));
                // 	}
                // },10000);
                // observer.complete();
            }
        });
    }
    notifyChange() {
        _.forEach(this.categories, (user) => {
            _.forEach(user.notify, (Id) => {
                if (Id == this.loggedInUser) {
                    user['isNotify'] = true;
                }
            });
        });
    }
    notifyUser(catId) {
        console.log(catId);
        return this.http.put(config.baseApiUrl + "category-notify", { categoryId: catId });
    }
};
CategoryService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [Network, HttpClient])
], CategoryService);
export { CategoryService };
//# sourceMappingURL=category.service.js.map