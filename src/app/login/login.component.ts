import { Component, OnInit } from '@angular/core';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { UserService } from '../services/user.service'
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastService } from "../services/toast.service";
import { Platform } from '@ionic/angular';
import 'hammerjs';
import * as $ from 'jquery';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { error } from 'util';
@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
	loading: any;
	emailLogin: any;
	email: any;
	postId: any;
	isDisabled: boolean;
	googleSpinner: boolean;
	facebookSpinner: boolean;

	constructor(private keyboard: Keyboard, private _toastService: ToastService, public platform: Platform, private googlePlus: GooglePlus, public _userService: UserService, private router: Router, private fb: Facebook) { }
	ngOnInit() {
		this.platform.backButton.subscribe(async () => {
			if (this.router.url.includes('login')) {
				this.router.navigate(['settings']);
			}
		});
	}
	ionViewWillEnter() {
		this.email = localStorage.getItem('email');
	}

	signupForm = new FormGroup({
		userName: new FormControl('', Validators.required),
		email: new FormControl('', [Validators.required, Validators.email]),
		mobile: new FormControl('', Validators.required),
		password: new FormControl('', Validators.required),
	});

	loginForm = new FormGroup({
		userName: new FormControl('', Validators.required),
		password: new FormControl('', Validators.required),
	});

	forgotPassword = new FormGroup({
		email: new FormControl('', [Validators.required, Validators.email])
	});

	user = {
		userName: "",
		email: "",
		mobile: "",
		password: "",
	}

	login: any;

	forgot = {
		email: "",
	}

	goBack() {
		this.router.navigateByUrl('/settings');
	}

	doGoogleLogin() {
		this.isDisabled = true;
		this.googleSpinner = true;
		console.log("in google login============")
		this.googlePlus.login({})
			.then((res) => {
				this.loading = true;
				console.log('res==of google==============>', res);
				this._userService.googleLogin(res.accessToken).subscribe((res: any) => {
					this.isDisabled = false;
					this.googleSpinner = false;
					this.loading = false;
					if (localStorage.getItem('bookmarkId')) {
						this.postId = localStorage.getItem('bookmarkId');
						this.router.navigateByUrl('/single-post/' + this.postId)
					} else if (localStorage.getItem('likepostId')) {
						this.postId = localStorage.getItem('likepostId');
						this.router.navigateByUrl('/single-post/' + this.postId);
					} else {
						this.router.navigate(['home']);
					}
				}, err => {
					this.isDisabled = false;
					this.googleSpinner = false;
					this.loading = false;
					console.log('err==========>', err)
				})
			})
			.catch(err => {
				this.isDisabled = false;
				this.googleSpinner = false;
				this.loading = false;
				console.error('err==============>', err)
			});
	}

	async doFbLogin() {
		this.isDisabled = true;
		this.facebookSpinner = true;
		console.log("in facebook login============")
		let permissions = new Array<string>();
		//the permissions your facebook app needs from the user
		permissions = ["public_profile", "email"];
		this.fb.login(permissions)
			.then((response: FacebookLoginResponse) => {
				this.loading = true;
				this.isDisabled = false;
				console.log('response=============>', response)
				let accessToken = response.authResponse.accessToken;
				console.log('accessToken=============,accessToken', accessToken)
				this._userService.fbLogin(accessToken).subscribe((res: any) => {
					this.facebookSpinner = false;
					this.isDisabled = false;
					this.loading = false;

					if (localStorage.getItem('bookmarkId')) {
						this.postId = localStorage.getItem('bookmarkId');
						this.router.navigateByUrl('/single-post/' + this.postId)
					} else if (localStorage.getItem('likepostId')) {
						this.postId = localStorage.getItem('likepostId');
						this.router.navigateByUrl('/single-post/' + this.postId);
					} else {
						this.router.navigate(['home']);
					}
				}, err => {
					this.facebookSpinner = false;
					this.isDisabled = false;
					this.loading = false;
				})
			}, error => {
				this.facebookSpinner = false;
				this.isDisabled = false;
				this.loading = false;
				console.log('err===========>', error)
			})
	}

	signup(user) {
		this.isDisabled = true;
		this.loading = true;
		this.keyboard.hide();
		this._userService.signup(user).subscribe((res: any) => {
			this.loading = false;
			this.isDisabled = false;
			this._toastService.toastFunction(res.message, 'success');
			this.signupForm.reset();
			this.router.navigate(['settings']);
			this.router.navigate(['login']);
		},
			err => {
				this.isDisabled = false;
				this.loading = false;
				this._toastService.toastFunction(err.error.message, 'danger');
			})
	}

	userLogin(login) {
		this.loading = true;
		const element = document.getElementById('remember') as HTMLInputElement;
		if (element.checked) {
			localStorage.setItem("remembered", JSON.stringify(login));
		} else {
			localStorage.removeItem('remembered');
		}
		console.log(login);
		this._userService.customLogin(login).subscribe((res: any) => {
			this.loading = false;
			this._toastService.toastFunction(res.message, 'success');
			if (localStorage.getItem('bookmarkId')) {
				this.postId = localStorage.getItem('bookmarkId');
				this.router.navigateByUrl('/single-post/' + this.postId)
			} else if (localStorage.getItem('likepostId')) {
				this.postId = localStorage.getItem('likepostId');
				this.router.navigateByUrl('/single-post/' + this.postId);
			} else {
				this.router.navigate(['home']);
			}
		}, err => {
			this.loading = false;
			this._toastService.toastFunction(err.error.message, 'success');
		})
	}

	resetPassword(user) {
		this.loading = true;
		this._userService.passwordReset(user).subscribe((res: any) => {
			this.loading = false;
			this._toastService.toastFunction(res.message, 'success');

			this.router.navigate(['settings']);
		}, err => {
			this.loading = false;
			this._toastService.toastFunction(err.error.message, 'success');
		})
	}

	signUpClose() {
		this.signupForm.reset();
	}

	signInRoute() {
		this.keyboard.hide();
		this.emailLogin = $('#emailInput').val();
		localStorage.setItem('email', this.emailLogin);
		setTimeout(() => {
			this.router.navigateByUrl('/signin')
		}, 1000);
	}
}