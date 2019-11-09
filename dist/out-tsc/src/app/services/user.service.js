import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from '../config';
// import * as CryptoJS from 'crypto-js';
import { Storage } from '@ionic/storage';
import { map, catchError } from 'rxjs/operators';
import { BehaviorSubject, throwError } from 'rxjs';
import { Platform } from '@ionic/angular';
let UserService = class UserService {
    constructor(http, storage, plt) {
        this.http = http;
        this.storage = storage;
        this.plt = plt;
        this.currentUserSubject = new BehaviorSubject(localStorage.getItem('accessToken'));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    handleError(error) {
        return throwError('Error! something went wrong.');
    }
    get currentUserValue() {
        return this.currentUserSubject.value;
    }
    //annonymous user
    firstTimeUser() {
        var deviceToken = localStorage.getItem('deviceToken');
        const annonymousUser = {
            deviceToken: deviceToken,
            notification: true
        };
        console.log("annonymous user", annonymousUser);
        return this.http.post(config.baseApiUrl + "register-token", annonymousUser);
    }
    googleLogin(token) {
        var deviceToken = localStorage.getItem('deviceToken');
        const accessToken = {
            accessToken: token,
            deviceToken: deviceToken
        };
        console.log('service google', accessToken);
        return this.http.post(config.baseApiUrl + "googleLogin", accessToken).
            pipe(map((user) => {
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
        const accessToken = {
            accessToken: token,
            deviceToken: deviceToken
        };
        console.log('service facebook', accessToken);
        return this.http.post(config.baseApiUrl + "facebookLogin", accessToken).pipe(map((user) => {
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
        return this.http.post(config.baseApiUrl + "user", user);
    }
    customLogin(login) {
        login.deviceToken = localStorage.getItem('deviceToken');
        console.log(login);
        return this.http.put(config.baseApiUrl + "user-login", login).pipe(map((user) => {
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
        };
        if (accessToken) {
            console.log("Log in apii notify");
            return this.http.put(config.baseApiUrl + "allow-notify", { notification: notify });
        }
        else {
            console.log("Not Log in apii notify");
            return this.http.put(config.baseApiUrl + "allow-notify-nologin", nologinNotify);
        }
    }
    getUserDetail() {
        return this.http.get(config.baseApiUrl + 'single-user').pipe(map((res) => {
            this.singleUser = res['data'];
            return this.singleUser;
        }), catchError(this.handleError));
    }
    passwordReset(email) {
        return this.http.post(config.baseApiUrl + "forgotpassword", email);
    }
};
UserService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [HttpClient, Storage, Platform])
], UserService);
export { UserService };
//# sourceMappingURL=user.service.js.map