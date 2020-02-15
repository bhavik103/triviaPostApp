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
		return new Observable(observer => {
			this.http.get(config.baseApiUrl + "category").subscribe(
				(result: object) => {
					this.categories = result['data'];
					var prop = ['category', 'categoryId', 'notify'];
					let offlineArray = JSON.parse(JSON.stringify(this.categories));
					offlineArray.forEach(element => {
						for (var k in element) {
							if (prop.indexOf(k) < 0) {
								delete element[k];
							}
						}
					});
					localStorage.removeItem('categoryArray')
					localStorage.setItem('categoryArray', JSON.stringify(offlineArray))
					if(tokenLocalStorage){
						this.notifyChange();
					}
					observer.next(this.categories);
					observer.complete();
				},
				(error) => {
					observer.error(error);
				});
		});

	}

	//append notification key
	notifyChange() {
		_.forEach(this.categories, (user) => {
			_.forEach(user.notify, (Id) => {
				if (Id == this.loggedInUser) {
					console.log("NOTIFIED CATEGORY", Id)
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