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
	categories: any;
	loggedInUser;
	loading: any;
	constructor(public storage: Storage, private network: Network, private http: HttpClient) { }

	private handleError(error: HttpErrorResponse) {
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
		return this.http.get(config.baseApiUrl + "category").pipe(
			map(async (result: any) => {
				this.categories = result['data'];
				if (tokenLocalStorage) {
					this.notifyChange();
				}
				console.log("THIS.CATEGORIES2", this.categories);
				await this.storage.remove('cat');
				await this.storage.set('cat', JSON.stringify(this.categories));
				return result['data'];
			})
		)
	};

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