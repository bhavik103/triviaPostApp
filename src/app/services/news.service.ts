import { Injectable } from '@angular/core';
import {Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { from as observableFrom } from 'rxjs';
import {config} from '../config';
import {News} from '../home/news';
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

	constructor(private network: Network,private http: HttpClient) { }

	//fetch all news
	getAllNews(): Observable<any>{
		return new Observable(observer => {
			if(this.network.type == 'none' ){
				console.log(JSON.parse(localStorage.getItem("newsArray")));
				this.newsArray = JSON.parse(localStorage.getItem("newsArray"))
				observer.next(this.newsArray);
				observer.complete();
			} else{    
				this.http.get(config.baseApiUrl + 'news?isApproved=APPROVED').subscribe(
					(result: object) => {
						this.newsArray = result['data'];
						localStorage.setItem('newsArray',JSON.stringify(this.newsArray))
						observer.next(this.newsArray);
						observer.complete();
					},
					(error) => {
						observer.error(error);
					});
			}
		});
	}

	allCatNews(id){
		return this.http.get(config.baseApiUrl + 'news?isApproved=APPROVED&categoryId='+id).pipe(
			map((res) => {
				this.newsArray = res['data'];
				return this.newsArray;
			}),
			catchError(this.handleError));
	}

	searchedNews(searchKey){
		return this.http.get(config.baseApiUrl + 'news?isApproved=APPROVED&keyword='+ searchKey).pipe(
			map((res) => {
				this.newsArray = res['data'];
				return this.newsArray;
			}),
			catchError(this.handleError));
	}

	getAllBookmarks(){
		console.log("Hello");
		return this.http.get(config.baseApiUrl + 'bookmark').pipe(
			map((res) => {
				this.newsArray = res['data'];
				return this.newsArray;
			}),
			catchError(this.handleError));
	}

	bookmarkPost(id){
		return this.http.post(config.baseApiUrl + "bookmark", {postId:id});
	}

	//get single news
	getSingleNews(id): Observable<News[]> {
		return this.http.get(config.baseApiUrl + 'single-news?postId=' + id).pipe(
			map((res) => {
				this.singleNews = res['data'];
				console.log("ser",this.singleNews);
				return this.singleNews;
			}),
			catchError(this.handleError));
	}

	newsCount(data) {
		return this.http.put(config.baseApiUrl + 'post-views',data);
	}
}