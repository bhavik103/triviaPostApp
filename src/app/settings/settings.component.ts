import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { UserService } from '../services/user.service'
import { Router } from '@angular/router';
import { ActionSheetController, Platform } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Storage } from '@ionic/storage';
import { FCM } from '@ionic-native/fcm/ngx';
import { GeneralService } from '../services/general.service';
import { ToastService } from "../services/toast.service";
import { savePref,category,signInText, signIn, orUsing, langSelectText, shareApp, terms, privacy, feedback, notification, bookmark, language } from '../changeLang';
import 'jquery';
@Component({
	selector: 'app-settings',
	templateUrl: './settings.component.html',
	styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
	tokenLocalStorage: any;
	language: any;
	firstCharUser: any;
	notifyFlag: any;
	userData: any;
	error: any;
	privacyPolicy: any;
	annonymousNotify: any;
	rating: any;
	customActionSheetOptions: any = {
		addCancelButtonWithLabel: false,
	};
	userRating: string;
	ratings: any;

	//static variables based on language starts********
	langSelectText = langSelectText;
	shareApp = shareApp;
	terms = terms;
	privacy = privacy;
	category = category;
	savePref = savePref;
	signInText = signInText;
	feedback = feedback;
	bookmark = bookmark;
	signIn = signIn;
	languageText = language;
	orUsing = orUsing;
	notification = notification;
	//********static variables based on language ends
	
	languageActionSheet = [
		{
			text: 'English', shortForm: 'en', role: 'destructive', handler: () => {
				this.language = 'en';
				localStorage.setItem('language', 'en');
				this._userService.changeLanguage('en');
			}
		},
		{
			text: 'हिंदी', shortForm: 'hn', role: 'destructive', handler: () => {
				this.language = 'hn';
				localStorage.setItem('language', 'hn');
				this.language = localStorage.getItem('language');
				this._userService.changeLanguage('hn');
			}
		},
		{
			text: 'অসমীয়া', shortForm: 'as', role: 'destructive', handler: () => {
				this.language = 'as';
				localStorage.setItem('language', 'as');
				this._userService.changeLanguage('as');
			}
		},
		{
			text: 'বাংলা', shortForm: 'bn', role: 'destructive', handler: () => {
				this.language = 'bn';
				localStorage.setItem('language', 'bn')
				this._userService.changeLanguage('bn');
			}
		},
		{
			text: 'ગુજરાતી', shortForm: 'gu', role: 'destructive', handler: () => {
				this.language = 'gu';
				localStorage.setItem('language', 'gu');
				this._userService.changeLanguage('gu');
			}
		},
		{
			text: 'ಕನ್ನಡ', shortForm: 'kn', role: 'destructive', handler: () => {
				this.language = 'kn';
				localStorage.setItem('language', 'kn');
				this._userService.changeLanguage('kn');
			}
		},
		{
			text: 'മലയാളം', shortForm: 'ml', role: 'destructive', handler: () => {
				this.language = 'ml';
				localStorage.setItem('language', 'ml');
				this._userService.changeLanguage('ml');
			}
		},
		{
			text: 'मराठी', shortForm: 'mr', role: 'destructive', handler: () => {
				this.language = 'mr';
				localStorage.setItem('language', 'mr');
				this._userService.changeLanguage('mr');
			}
		},
		{
			text: 'ਪੰਜਾਬੀ', shortForm: 'pa', role: 'destructive', handler: () => {
				this.language = 'pa';
				localStorage.setItem('language', 'pa');
				this._userService.changeLanguage('pa');
			}
		},
		{
			text: 'தமிழ்', shortForm: 'ta', role: 'destructive', handler: () => {
				this.language = 'ta';
				localStorage.setItem('language', 'ta');
				this._userService.changeLanguage('ta');
			}
		},
		{
			text: 'తెలుగు', shortForm: 'te', role: 'destructive', handler: () => {
				this.language = 'te';
				localStorage.setItem('language', 'te');
				this._userService.changeLanguage('te');
			}
		},
	];

	constructor(private _toastService: ToastService, private cd: ChangeDetectorRef, public _generalService: GeneralService, private platform: Platform, private fcm: FCM, private storage: Storage, private socialSharing: SocialSharing, public actionSheetController: ActionSheetController, public _userService: UserService, private router: Router) {
	}

	ionViewWillEnter() {
		this.displayFirstChar();
		if (this.tokenLocalStorage) {
			$(".optionsDiv").addClass("loggedInDiv");
		} else {
			$(".optionsDiv").removeClass("loggedInDiv");
		}
		if (this.tokenLocalStorage) {
			this.getUserDetail();
		}
		this.language = localStorage.getItem('language');
		console.log("langSelectText", this.langSelectText[this.language])
	}

	ngOnInit() {
		this.getUrl();
		this.notifyFlag = localStorage.getItem('notification');
		this.annonymousNotify = localStorage.getItem('annonymousNotify');
		console.log(this.annonymousNotify);
	}

	//for displaying first character
	displayFirstChar() {
		this.tokenLocalStorage = localStorage.getItem('accessToken');
		if (this.tokenLocalStorage) {
			var base64Url = this.tokenLocalStorage.split('.')[1];
			var base64 = base64Url.replace('-', '+').replace('_', '/');
			var decodedToken = JSON.parse(window.atob(base64));
			if (decodedToken.user.email) {
				this.firstCharUser = decodedToken.user.email.charAt(0).toUpperCase();
			}
		}
	}

	//for getting app link for sharing app
	getUrl() {
		this._generalService.getPolicy().subscribe(
			(res: any) => {
				this.privacyPolicy = res;
			},
			(err) => {
				this.error = err;
			});
	}

	//forlogout action sheet
	async logout() {
		const actionSheet = await this.actionSheetController.create({
			buttons: [{
				text: 'Logout',
				role: 'destructive',
				handler: () => {
					this._userService.logOut().subscribe();
					localStorage.removeItem('accessToken');
					this.fcm.getToken().then(token => {
						localStorage.setItem('deviceToken', token);
					});

					this.fcm.onTokenRefresh().subscribe(token => {
						localStorage.setItem('deviceToken', token);
					});
					this.router.navigate(['/home']);
					this._toastService.toastFunction('You have been logged out!', 'primary');
				}
			}, {
				text: 'Cancel',
				handler: () => {
				}
			}]
		});
		localStorage.setItem('language', 'English');
		await actionSheet.present();
	}

	//share app
	sendShare() {
		var message = "An awesome news app that is only you need!";
		var subject = "Install Trivia Post";
		console.log("Share", this.privacyPolicy)
		var url = this.privacyPolicy[0].applink;
		this.socialSharing.share("Check out Trivia Post App. I found it best for reading news", "Trivia Post App", null, url)
			.then((entries) => {
				console.log('success ' + JSON.stringify(entries));
			})
			.catch((error) => {
				alert('error ' + JSON.stringify(error));
			});
	}

	//notify toggle function
	notificationSwitch(e) {
		localStorage.setItem('notification', e.target.checked);
		localStorage.setItem('annonymousNotify', e.target.checked);
		var accessToken = localStorage.getItem('accessToken');
		this._userService.notifyToggle(e.target.checked).subscribe((res: any) => {
			if (accessToken) {
				this.getUserDetail();
			}
			this._toastService.toastFunction(res.message, 'danger');
		}, err => {
			this._toastService.toastFunction(err.error.message, 'danger');
		})
	}

	//user detail for notification switch
	getUserDetail(): void {
		this._userService.getUserDetail().subscribe(
			(res: any) => {
				this.userData = res.notification;
			},
			(err) => {
				this.error = err;
			});
	}

	//open select language alert
	async changeLang(lang) {
		console.log("LANG", lang);

		for (var i = 0; i < this.languageActionSheet.length; i++) {
			// look for the entry with a matching `language` value
			if (this.languageActionSheet[i].shortForm == lang) {
				this.languageActionSheet[i]['cssClass'] = 'myActionSheetBtnStyle';
			} else {
				this.languageActionSheet[i]['cssClass'] = '';
			}
		}

		const actionSheet = await this.actionSheetController.create({
			header: 'Select Language',
			cssClass: 'myPage',
			buttons: this.languageActionSheet
		});
		await actionSheet.present();
	}
}