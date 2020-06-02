import { Injectable } from '@angular/core';
import { Observable, throwError, Subject } from 'rxjs';
import { map, catchError, filter } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { from as observableFrom } from 'rxjs';
import { config } from '../config';
import { News } from '../home/news';
import { Network } from '@ionic-native/network/ngx';
import * as _ from 'lodash';
import { AppComponent } from '../app.component';
import { UserService } from './user.service'
import { language } from 'app/changeLang';
import { SimplePlaceholderMapper } from '@angular/compiler/src/i18n/serializers/serializer';
import { CompileTemplateMetadata } from '@angular/compiler';
import { resolve } from 'url';
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
	private myObservable = new Subject<string>();
	currentData = this.myObservable.asObservable();
	private handleError(error: HttpErrorResponse) {
		return throwError('Error! something went wrong.');
	}

	constructor(public _userService: UserService, private network: Network, private http: HttpClient) { }

	//fetch all news
	getAllNews(pageNumber, pageLimit) {
		if (pageLimit != 'offline') {
			return this.http.get(config.baseApiUrl + 'news?isApproved=APPROVED&appRequest=true&page=' + pageNumber + '&limit=' + pageLimit).pipe(
				map((res: any) => {
					return res.data
				})
			);
		} else {
			return this.http.get(config.baseApiUrl + 'news?isApproved=APPROVED').pipe(
				map((res: any) => {
					let offlineArray = JSON.parse(JSON.stringify(res.data));
					localStorage.removeItem('newsArray')
					localStorage.setItem('newsArray', JSON.stringify(offlineArray))
					console.log("FINAL OBJECT", offlineArray)
					return res.data
				})
			);
		}
	}


	//all cat news
	allCatNews(id, page, limit) {
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
				this.http.get(config.baseApiUrl + 'news?isApproved=APPROVED&categoryId=' + id + '&appRequest=true&page=' + page + '&limit=' + limit).subscribe(
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

	searchedNews(searchKey, lang, page, limit) {
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
				this.http.get(config.baseApiUrl + 'news?isApproved=APPROVED&language&keyword=' + searchKey + '&appRequest=true&page=' + page + '&limit=' + limit).subscribe(
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
						if (this.newsArray.length > 0) {

							this.newsArray = this.newsArray[0].post;
							this.newsArray.map((e) => {
								e['bookmarkKey'] = true;
							});
						}
						console.log(this.newsArray)

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
		const language = localStorage.getItem('language');
		console.log("LANGUAGE", id)
		return this.http.get(config.baseApiUrl + 'single-news?postId=' + id + '&language=' + language).pipe(
			map((result: any) => {
				console.log('result', JSON.parse(JSON.stringify(result.data)))
				this.singleNews = JSON.parse(JSON.stringify(result.data));
				return JSON.parse(JSON.stringify(this.singleNews));
			},
				(error) => {
					console.log("ERROR")
				}));

	}

	newsCount(data) {
		console.log("post data", data);
		return this.http.put(config.baseApiUrl + 'post-views', data);
	}

	increaseView(id) {
		const postType = localStorage.getItem('language');
		if (localStorage.getItem('accessToken')) {
			return this.http.put(config.baseApiUrl + 'post-view-loggedin', { postId: id, postType: postType });
		} else {
			const deviceToken = localStorage.getItem('deviceToken');
			if (localStorage.getItem('deviceToken')) {
				// const deviceToken = Math.floor(Math.random() * 6) + 1  
				return this.http.put(config.baseApiUrl + 'post-view-without-login', { postId: id, postType: postType, deviceToken: deviceToken });
			}
		}
	}
}

