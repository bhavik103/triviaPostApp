import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { config } from '../config';
import { Storage } from '@ionic/storage';
import { map, catchError } from 'rxjs/operators';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { Platform } from '@ionic/angular';
import { Category } from '../home/category';
import { Network } from '@ionic-native/network/ngx';
import * as _ from 'lodash';
@Injectable({
	providedIn: 'root'
})
export class CategoryService {
	categories: Category[];
	loggedInUser;
	constructor(private network: Network, private http: HttpClient) { }

	private handleError(error: HttpErrorResponse) {
		return throwError('Error! something went wrong.');
	}

	//get all cateogries
	getAll(): Observable<Category[]> {
		const tokenLocalStorage = localStorage.getItem('accessToken');
		if (tokenLocalStorage) {
			var base64Url = tokenLocalStorage.split('.')[1];
			var base64 = base64Url.replace('-', '+').replace('_', '/');
			var decodedToken = JSON.parse(window.atob(base64));
			this.loggedInUser = decodedToken.user._id;
			console.log("Decoded", this.loggedInUser);
		}
		return new Observable(observer => {

			this.categories = JSON.parse(localStorage.getItem("categories"))
			this.notifyChange();
			
			observer.next(this.categories);

			if (this.network.type == 'none') {
				console.log(JSON.parse(localStorage.getItem("newsArray")));
				observer.complete();
			} else {
				this.http.get(config.baseApiUrl + "category").subscribe(
					(result: object) => {
						this.categories = result['data'];
						localStorage.setItem('categories', JSON.stringify(this.categories))
						this.notifyChange();
						observer.next(this.categories);
					},
					(error) => {
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

	notifyChange(){
		_.forEach(this.categories, (user) => {
			_.forEach(user.notify, (Id) => {
				if (Id == this.loggedInUser) {
					user['isNotify'] = true
				}
			})
		})
	}

	notifyUser(catId) {
		console.log(catId);
		return this.http.put(config.baseApiUrl + "category-notify", { categoryId: catId });
	}
}