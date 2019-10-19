import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { from as observableFrom } from 'rxjs';
import { config } from '../config';
import { News } from '../home/news';
import { Network } from '@ionic-native/network/ngx';
@Injectable({
	providedIn: 'root'
})
export class NewsService {
	authorization = localStorage.getItem('accessToken');
	newsArray: any;
	singleNews: any;

	private handleError(error: HttpErrorResponse) {
		return throwError('Error! something went wrong.');
	}

	constructor(private network: Network, private http: HttpClient) { }

	//fetch all news
	getAllNews(): Observable<any> {
		if (this.network.type == 'none') {
			return new Observable(observer => {
				console.log(JSON.parse(localStorage.getItem("newsArray")));
				this.newsArray = JSON.parse(localStorage.getItem("newsArray"))
				setTimeout(() => {
					observer.next(this.newsArray);
					observer.complete();
				}, 1);
			});
		} else {
			return new Observable(observer => {
				this.http.get(config.baseApiUrl + 'news?isApproved=APPROVED').subscribe(
					(result: object) => {
						this.newsArray = result['data'];
						localStorage.setItem('newsArray', JSON.stringify(this.newsArray))
						observer.next(this.newsArray);
						observer.complete();
					},
					(error) => {
						observer.error(error);
					});
			});
		}
	}

	allCatNews(id) {
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
				console.log("filtered",filtered);
				setTimeout(() => {
					observer.next(this.newsArray);
					observer.complete();
				}, 1);
			});
		} else {
			return new Observable(observer => {
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
		// return this.http.get(config.baseApiUrl + 'news?isApproved=APPROVED&categoryId='+id).pipe(
		// 	map((res) => {
		// 		this.newsArray = res['data'];
		// 		return this.newsArray;
		// 	}),
		// 	catchError(this.handleError));
	}

	searchedNews(searchKey) {
		return this.http.get(config.baseApiUrl + 'news?isApproved=APPROVED&keyword=' + searchKey).pipe(
			map((res) => {
				this.newsArray = res['data'];
				return this.newsArray;
			}),
			catchError(this.handleError));
	}

	getAllBookmarks() {
		console.log("Hello");
		return this.http.get(config.baseApiUrl + 'bookmark').pipe(
			map((res) => {
				this.newsArray = res['data'];
				return this.newsArray;
			}),
			catchError(this.handleError));
	}

	bookmarkPost(id) {
		return this.http.post(config.baseApiUrl + "bookmark", { postId: id });
	}

	//get single news
	getSingleNews(id): Observable<News[]> {
		return this.http.get(config.baseApiUrl + 'single-news?postId=' + id).pipe(
			map((res) => {
				this.singleNews = res['data'];
				console.log("ser", this.singleNews);
				return this.singleNews;
			}),
			catchError(this.handleError));
	}

	newsCount(data) {
		console.log("post data", data);
		return this.http.put(config.baseApiUrl + 'post-views', data);
	}
}