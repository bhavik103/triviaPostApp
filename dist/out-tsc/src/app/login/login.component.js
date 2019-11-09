import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { Facebook } from '@ionic-native/facebook/ngx';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import 'hammerjs';
let LoginComponent = class LoginComponent {
    constructor(platform, toastController, googlePlus, _userService, router, fb) {
        this.platform = platform;
        this.toastController = toastController;
        this.googlePlus = googlePlus;
        this._userService = _userService;
        this.router = router;
        this.fb = fb;
        this.signupForm = new FormGroup({
            userName: new FormControl('', Validators.required),
            email: new FormControl('', [Validators.required, Validators.email]),
            mobile: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required),
        });
        this.loginForm = new FormGroup({
            userName: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required),
        });
        this.forgotPassword = new FormGroup({
            email: new FormControl('', [Validators.required, Validators.email])
        });
        this.user = {
            userName: "",
            email: "",
            mobile: "",
            password: "",
        };
        this.forgot = {
            email: "",
        };
    }
    ngOnInit() {
        this.platform.backButton.subscribe(() => tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (this.router.url.includes('login')) {
                this.router.navigate(['settings']);
            }
        }));
        this.rememberMe();
    }
    rememberMe() {
        if (localStorage.getItem("remembered")) {
            var login = JSON.parse(localStorage.getItem("remembered"));
            console.log(login);
            this.login = {
                userName: login.userName,
                password: login.password
            };
        }
        else {
            this.login = {
                userName: "",
                password: ""
            };
        }
    }
    goBack() {
        this.router.navigateByUrl('/settings');
    }
    doGoogleLogin() {
        console.log("in google login============");
        this.googlePlus.login({})
            .then((res) => {
            this.loading = true;
            console.log('res==of google==============>', res);
            this._userService.googleLogin(res.accessToken).subscribe((res) => {
                this.loading = false;
                this.router.navigate(['allcategory']);
            }, err => {
                this.loading = false;
                console.log('err==========>', err);
            });
        })
            .catch(err => console.error('err==============>', err));
    }
    doFbLogin() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log("in facebook login============");
            let permissions = new Array();
            //the permissions your facebook app needs from the user
            permissions = ["public_profile", "email"];
            this.fb.login(permissions)
                .then((response) => {
                this.loading = true;
                console.log('response=============>', response);
                let accessToken = response.authResponse.accessToken;
                console.log('accessToken=============,accessToken', accessToken);
                this._userService.fbLogin(accessToken).subscribe((res) => {
                    this.loading = false;
                    this.router.navigate(['allcategory']);
                }, err => {
                    this.loading = false;
                    console.log('err===========>', err);
                });
            });
        });
    }
    signup(user) {
        this.loading = true;
        this._userService.signup(user).subscribe((res) => {
            this.loading = false;
            this.toast = this.toastController.create({
                message: res.message,
                duration: 2000,
                color: 'success'
            }).then((toastData) => {
                console.log(toastData);
                toastData.present();
            });
            this.signupForm.reset();
            this.router.navigate(['settings']);
            this.router.navigate(['login']);
        }, err => {
            this.loading = false;
            this.toast = this.toastController.create({
                message: err.message,
                duration: 2000,
                color: 'danger'
            }).then((toastData) => {
                console.log(toastData);
                toastData.present();
            });
            console.log(err);
        });
    }
    userLogin(login) {
        this.loading = true;
        const element = document.getElementById('remember');
        if (element.checked) {
            localStorage.setItem("remembered", JSON.stringify(login));
        }
        else {
            localStorage.removeItem('remembered');
        }
        console.log(login);
        this._userService.customLogin(login).subscribe((res) => {
            this.loading = false;
            this.toast = this.toastController.create({
                message: res.message,
                duration: 2000,
                color: 'success'
            }).then((toastData) => {
                console.log(toastData);
                toastData.present();
            });
            this.router.navigate(['allcategory']);
        }, err => {
            this.loading = false;
            console.log('err===========>', err.error.message);
            this.toast = this.toastController.create({
                message: err.error.message,
                duration: 2000,
                color: 'danger'
            }).then((toastData) => {
                console.log(toastData);
                toastData.present();
            });
        });
    }
    resetPassword(user) {
        this.loading = true;
        this._userService.passwordReset(user).subscribe((res) => {
            this.loading = false;
            this.toast = this.toastController.create({
                message: res.message,
                duration: 2000,
                color: 'success'
            }).then((toastData) => {
                console.log(toastData);
                toastData.present();
            });
            this.router.navigate(['settings']);
        }, err => {
            this.loading = false;
            console.log('err===========>', err.error.message);
            this.toast = this.toastController.create({
                message: err.error.message,
                duration: 2000,
                color: 'danger'
            }).then((toastData) => {
                console.log(toastData);
                toastData.present();
            });
        });
    }
    signUpClose() {
        this.signupForm.reset();
    }
};
LoginComponent = tslib_1.__decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [Platform, ToastController, GooglePlus, UserService, Router, Facebook])
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map