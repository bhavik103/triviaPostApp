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
	loading: any;
	constructor(private network: Network, private http: HttpClient) { }

	private handleError(error: HttpErrorResponse) {
		return throwError('Error! something went wrong.');
	}

	//get all cateogries
	getAll(): Observable<any> {
		const tokenLocalStorage = localStorage.getItem('accessToken');
		if (tokenLocalStorage) {
			var base64Url = tokenLocalStorage.split('.')[1];
			var base64 = base64Url.replace('-', '+').replace('_', '/');
			var decodedToken = JSON.parse(window.atob(base64));
			this.loggedInUser = decodedToken.user._id;
			console.log("Decoded", this.loggedInUser);
		}
		if (this.network.type == 'none') {
			return new Observable(observer => {
				console.log(JSON.parse(localStorage.getItem("categoryArray")));
				this.categories = JSON.parse(localStorage.getItem("categoryArray"))
				setTimeout(() => {
					observer.next(this.categories);
					observer.complete();
				}, 1);
			});
		} else {
			return new Observable(observer => {
				this.http.get(config.baseApiUrl + "category").subscribe(
					(result: object) => {
						this.categories = result['data'];
						this.notifyChange();
						console.log('this.categories', this.categories)
						localStorage.setItem('categoryArray', JSON.stringify(this.categories))
						observer.next(this.categories);
						observer.complete();
					},
					(error) => {
						observer.error(error);
					});
			});
		}
	}

	//append notification key
	notifyChange() {
		_.forEach(this.categories, (user) => {
			_.forEach(user.notify, (Id) => {
				if (Id == this.loggedInUser) {
					console.log("NOTIFIED CATEGORY",Id)
					user['isNotify'] = true;
				}
			})
		})
	}

	//subcribing category
	notifyUser(catId) {
		console.log(catId);
		return this.http.put(config.baseApiUrl + "category-notify", { categoryId: catId });
	}
}