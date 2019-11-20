import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError, filter } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { from as observableFrom } from 'rxjs';
import { config } from '../config';
import { News } from '../home/news';
import { Network } from '@ionic-native/network/ngx';
import * as _ from 'lodash';
@Injectable({
	providedIn: 'root'
})
export class NewsService {
	authorization = localStorage.getItem('accessToken');
	newsArray: any;
	singleNews: any;
	userId: any;
	tokenLocalStorage: string;
	loggedInUser: any;
	private handleError(error: HttpErrorResponse) {
		return throwError('Error! something went wrong.');
	}

	constructor(private network: Network, private http: HttpClient) { }

	//fetch all news
	getAllNews(): Observable<any> {
		return new Observable(observer => {

			this.newsArray = JSON.parse(localStorage.getItem("newsArray"))
			// this.notifyChange();

			observer.next(this.newsArray);
			if (this.network.type == 'none') {
				observer.complete();
			} else {
				this.http.get(config.baseApiUrl + 'news?isApproved=APPROVED').subscribe(
					(result: object) => {
						this.newsArray = result['data'];
						localStorage.setItem('categories', JSON.stringify(this.newsArray))
						console.log("NEWS", this.newsArray);
						observer.next(this.newsArray);
					},
					(error) => {
						observer.error(error);
					});
			}
		});
	}

	allCatNews(id) {
		console.log("Inside", id)
		if (this.network.type == 'none') {
			return new Observable(observer => {
				console.log(JSON.parse(localStorage.getItem("newsArray")));
				this.newsArray = JSON.parse(localStorage.getItem("newsArray"))
				var filtersArray = [id];

				var filtered = this.newsArray.filter(function (element) {
					var cats = element.newsCategoryId.split(' ');

					return cats.filter(function (cat) {
						return filtersArray.indexOf(cat) > -1;
					}).length === filtersArray.length;
				});
				this.newsArray = filtered;
				console.log("filtered", filtered);
				setTimeout(() => {
					observer.next(this.newsArray);
					observer.complete();
				}, 1);
			});
		} else {
			return new Observable(observer => {
				console.log("in ");
				this.http.get(config.baseApiUrl + 'news?isApproved=APPROVED&categoryId=' + id).subscribe(
					(result: object) => {
						this.newsArray = result['data'];
						console.log("in cat service", this.newsArray);
						// localStorage.setItem('newsArray',JSON.stringify(this.newsArray))
						observer.next(this.newsArray);
						observer.complete();
					},
					(error) => {
						observer.error(error);
					});
			});
		}
	}

	searchedNews(searchKey) {
		if (this.network.type == 'none') {
			return new Observable(observer => {
				console.log("fdfdfd", JSON.parse(localStorage.getItem("newsArray")));
				console.log("regex");
				this.newsArray = JSON.parse(localStorage.getItem("newsArray"));
				const items = this.newsArray.filter(item => item.newsTitleEnglish.indexOf(searchKey) !== -1);
				console.log("after", items);
				this.newsArray = items;
				setTimeout(() => {
					observer.next(this.newsArray);
					observer.complete();
				}, 1);
			});
		} else {
			return new Observable(observer => {
				this.http.get(config.baseApiUrl + 'news?isApproved=APPROVED&keyword=' + searchKey).subscribe(
					(result: object) => {
						this.newsArray = result['data'];
						console.log("in cat service", this.newsArray);
						// localStorage.setItem('newsArray',JSON.stringify(this.newsArray))
						observer.next(this.newsArray);
						observer.complete();
					},
					(error) => {
						observer.error(error);
					});
			});
		}
	}

	getAllBookmarks() {
		console.log("Hello");
		if (this.network.type == 'none') {
			return new Observable(observer => {
				console.log("fdfdfd", JSON.parse(localStorage.getItem("newsArray")));
				console.log("regex");
				this.newsArray = JSON.parse(localStorage.getItem("newsArray"));
				this.tokenLocalStorage = localStorage.getItem('accessToken');
				if (this.tokenLocalStorage) {
					var base64Url = this.tokenLocalStorage.split('.')[1];
					var base64 = base64Url.replace('-', '+').replace('_', '/');
					var decodedToken = JSON.parse(window.atob(base64));
					this.loggedInUser = decodedToken.user._id;
				}
				if (this.tokenLocalStorage) {
					_.forEach(this.newsArray, (save: { [x: string]: boolean; bookMark: any; }) => {
						_.forEach(save.bookMark, (Id: any) => {
							if (Id == this.loggedInUser) {
								save['bookmarkKey'] = true
							}
						})
					})
				}
				this.newsArray = this.newsArray.filter(obj => Object.keys(obj).includes("bookmarkKey"));
				console.log('this.newsArray', this.newsArray);
				setTimeout(() => {
					observer.next(this.newsArray);
					observer.complete();
				}, 1);
			});
		} else {
			return new Observable(observer => {
				this.http.get(config.baseApiUrl + 'bookmark').subscribe(
					(res: object) => {
						this.newsArray = res['data'];
						this.newsArray = this.newsArray.post;
						this.newsArray.map((e) => {
							e['bookmarkKey'] = true;
						});
						console.log('this.newsArraythis.newsArraythis.newsArray', this.newsArray);
						observer.next(this.newsArray);
						observer.complete();
					},
					(error) => {
						observer.error(error);
					});
			});
		}
	}

	bookmarkPost(id) {
		return this.http.post(config.baseApiUrl + "bookmark", { postId: id });
	}

	//get single news
	getSingleNews(id) {
		if (this.network.type == 'none') {
			return new Observable(observer => {
				console.log(JSON.parse(localStorage.getItem("newsArray")));
				this.newsArray = JSON.parse(localStorage.getItem("newsArray"))
				var filtersArray = [id];

				var filtered = this.newsArray.filter(function (element) {
					var news = element.newsId.split(' ');

					return news.filter(function (post) {
						return filtersArray.indexOf(post) > -1;
					}).length === filtersArray.length;
				});
				this.newsArray = filtered;
				console.log("filtered", filtered);
				setTimeout(() => {
					observer.next(this.newsArray);
					observer.complete();
				}, 1);
			});
		} else {
			return new Observable(observer => {
				console.log("in ");
				this.http.get(config.baseApiUrl + 'single-news?postId=' + id).subscribe(
					(result: object) => {
						this.newsArray = result['data'];
						console.log("in cat service", this.newsArray);
						// localStorage.setItem('newsArray',JSON.stringify(this.newsArray))
						observer.next(this.newsArray);
						observer.complete();
					},
					(error) => {
						observer.error(error);
					});
			});
		}
	}

	newsCount(data) {
		console.log("post data", data);
		return this.http.put(config.baseApiUrl + 'post-views', data);
	}

	likepost(id) {
		return this.http.put(config.baseApiUrl + 'post-like', { postId: id });
	}
}