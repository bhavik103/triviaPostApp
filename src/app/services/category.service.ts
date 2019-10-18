import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { config } from '../config';
import { Storage } from '@ionic/storage';
import { map, catchError } from 'rxjs/operators';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { Platform } from '@ionic/angular';
import {Category} from '../home/category';
import { Network } from '@ionic-native/network/ngx';

@Injectable({
	providedIn: 'root'
})
export class CategoryService {
	categories: Category[];

	constructor(private network: Network,private http: HttpClient) { }

	private handleError(error: HttpErrorResponse) {
		return throwError('Error! something went wrong.');
	}

	//get all cateogries
	getAll(): Observable<Category[]> {
		return new Observable(observer => {
			this.categories = JSON.parse(localStorage.getItem("categories"))
			observer.next(this.categories);
				
			if(this.network.type == 'none' ){
				console.log(JSON.parse(localStorage.getItem("newsArray")));
				observer.complete();
			}else{    
				this.http.get(config.baseApiUrl + "category").subscribe(
					(result: object) => {
						this.categories = result['data'];
						localStorage.setItem('categories',JSON.stringify(this.categories))
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

	notifyUser(catId){
		console.log(catId);
		return this.http.put(config.baseApiUrl + "category-notify", {categoryId:catId});
	}
}