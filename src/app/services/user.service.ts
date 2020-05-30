import { langList } from './../changeLang';
import { language } from 'app/changeLang';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { config } from '../config';
// import * as CryptoJS from 'crypto-js';
import { Storage } from '@ionic/storage';
import { map, catchError } from 'rxjs/operators';
import { BehaviorSubject, Observable, throwError, Subject } from 'rxjs';
import { Platform } from '@ionic/angular';
import { Category } from '../home/category';
@Injectable({
	providedIn: 'root'
})
export class UserService {
	private _listners = new Subject<any>();
	private currentUserSubject: BehaviorSubject<any>;
	public currentUser: Observable<any>;
	private myObservable = new Subject<string>();
	currentData = this.myObservable.asObservable();
	categories: Category[];
	singleUser: any;
	tokenLocalStorage: string;
	private customSubject = new Subject<any>();
	customObservable = this.customSubject.asObservable();
	constructor(private http: HttpClient, private storage: Storage, private plt: Platform) {
		this.currentUserSubject = new BehaviorSubject<any>(localStorage.getItem('accessToken'));
		this.currentUser = this.currentUserSubject.asObservable();
	}

	serviceFunction() {
		this.myObservable.next("randomFunction");
	}

	// Service message commands
	callComponentMethod(value: any) {
		this.customSubject.next(value);
	}

	private handleError(error: HttpErrorResponse) {
		return throwError('Error! something went wrong.');
	}

	public get currentUserValue(): any {
		return this.currentUserSubject.value;
	}

	//annonymous user
	firstTimeUser(lang) {
		var deviceToken = localStorage.getItem('deviceToken');
		const annonymousUser = {
			deviceToken: deviceToken,
			notification: true,
			language: lang
		}
		console.log("annonymous user", annonymousUser);
		return this.http.post(config.baseApiUrl + "register-token", annonymousUser);
	}

	loggedInUserDeviceToken(accessToken,deviceToken){
		const userData = {
			deviceToken: deviceToken,
			accessToken: accessToken
		}
		return this.http.post(config.baseApiUrl + "update-device-token", userData);
	}

	//changeLanguage
	changeLanguage(lang) {
		this.tokenLocalStorage = localStorage.getItem('accessToken');
		if (this.tokenLocalStorage) {
			const language = {
				language: lang,
			}
			return this.http.put(config.baseApiUrl + "change-language", language)
		}
	}
	googleLogin(token) {
		var deviceToken = localStorage.getItem('deviceToken');
		var language = localStorage.getItem('language');
		const accessToken = {
			accessToken: token,
			deviceToken: deviceToken,
			language: language
		}
		console.log('service google', accessToken);
		return this.http.post(config.baseApiUrl + "googleLogin", accessToken).
			pipe(map((user: any) => {
				console.log("login user with google=========>", user);
				// login successful if there's a jwt token in the response
				if (user && user.data.accessToken) {
					// store user details and jwt token in local storage to keep user logged in between page refreshes
					this.storage.set('accessToken', user.data.accessToken);
					localStorage.setItem('accessToken', user.data.accessToken);
					console.log("token in service", localStorage.getItem('accessToken'));
					this.storage.get('accessToken').then((val) => {
						console.log('accessToken', val);
					});
					this.currentUserSubject.next(user);
				}
				return user;
			}));
	}

	fbLogin(token) {
		var deviceToken = localStorage.getItem('deviceToken');
		var language = localStorage.getItem('language');
		const accessToken = {
			accessToken: token,
			deviceToken: deviceToken,
			language: language
		}
		console.log('service facebook', accessToken);
		return this.http.post(config.baseApiUrl + "facebookLogin", accessToken).pipe(map((user: any) => {
			console.log("login user with fb=========>", user);
			if (user && user.data.accessToken) {
				// store user details and jwt token in local storage to keep user logged in between page refreshes
				localStorage.setItem('accessToken', user.data.accessToken);
				localStorage.getItem('accessToken');
				this.currentUserSubject.next(user);
			}
			return user;
		}));
	}

	logOut() {
		var deviceToken = localStorage.getItem('deviceToken');
		// localStorage.setItem('notification', 'false');
		// localStorage.setItem('annonymousNotify', 'false');
		this.currentUserSubject.next(null);
		return this.http.put(config.baseApiUrl + 'user-logout', { deviceToken: deviceToken });
	}

	signup(user) {
		user.language = localStorage.getItem('language');
		user.deviceToken = localStorage.getItem('deviceToken');
		return this.http.post(config.baseApiUrl + "user", user);
	}

	customLogin(login) {
		login.deviceToken = localStorage.getItem('deviceToken');
		login.language = localStorage.getItem('language');
	
		console.log(login);
		return this.http.put(config.baseApiUrl + "user-login", login).pipe(map((user: any) => {
			if (user && user.data.accessToken) {
				// store user details and jwt token in local storage to keep user logged in between page refreshes
				localStorage.setItem('accessToken', user.data.accessToken);
				localStorage.getItem('accessToken');
				this.currentUserSubject.next(user);
			}
			return user;
		}));
	}

	userFeedbackFrom(feedback) {
		return this.http.post(config.baseApiUrl + "feedback", feedback);
	}

	notifyToggle(notify) {
		var accessToken = localStorage.getItem('accessToken');
		var deviceToken = localStorage.getItem('deviceToken');
		const nologinNotify = {
			deviceToken: deviceToken,
			notification: notify
		}
		if (accessToken) {
			console.log("Log in apii notify");
			return this.http.put(config.baseApiUrl + "allow-notify", { notification: notify });
		} else {
			console.log("Not Log in apii notify");
			return this.http.put(config.baseApiUrl + "allow-notify-nologin", nologinNotify);
		}
	}

	getUserDetail() {
		return this.http.get(config.baseApiUrl + 'single-user').pipe(
			map((res) => {
				this.singleUser = res['data'];
				return this.singleUser;
			}),
			catchError(this.handleError));
	}

	passwordReset(email) {
		return this.http.post(config.baseApiUrl + "forgotpassword", email);
	}
	userRating(rating) {
		return this.http.post(config.baseApiUrl + 'ratings', { ratingValue: rating });
	}
}