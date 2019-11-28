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
	}

	ngOnInit() {
		this.getUserRating();
		this.getUrl();
		this.notifyFlag = localStorage.getItem('notification');
		this.annonymousNotify = localStorage.getItem('annonymousNotify');
		console.log(this.annonymousNotify);
		this.language = localStorage.getItem('language');
	}

	//remove cancel button for language 
	removeCancelButton() {
		(document.querySelector('.action-sheet-group.action-sheet-group-cancel.sc-ion-action-sheet-md') as HTMLElement).style.display = 'none';
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

	//changing language
	languageChange($event) {
		var language = $event.target.value;
		localStorage.setItem('language', language);
		this.language = localStorage.getItem('language');
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

	//rate change on submit
	logRatingChange() {
		console.log($("ion-icon[ng-reflect-name='ios-star']").length);
		this.ratings = $("ion-icon[ng-reflect-name='ios-star']").length;
		if (this.ratings != 0) {
			localStorage.setItem('rating', this.ratings);
			this._userService.userRating(this.ratings).subscribe();
			this.rating = true;
			this.userRating = localStorage.getItem('rating');
		}else{
			this._toastService.toastFunction('Please input your rating!', 'danger');
		}
	}

	//getting user ratings
	getUserRating() {
		if (localStorage.getItem('rating')) {
			this.rating = true;
			this.userRating = localStorage.getItem('rating');
		}
	}
}