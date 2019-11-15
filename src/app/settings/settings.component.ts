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

	constructor(private _toastService: ToastService, private cd: ChangeDetectorRef, public _generalService: GeneralService, private platform: Platform, private fcm: FCM, private storage: Storage, private socialSharing: SocialSharing, public actionSheetController: ActionSheetController, public _userService: UserService, private router: Router) {
	}

	ngOnInit() {
		this.getUserRating();
		this.getUrl();
		this.platform.backButton.subscribe(async () => {
			this.router.navigate(['home/categories']);
		});

		this.tokenLocalStorage = localStorage.getItem('accessToken');
		this.notifyFlag = localStorage.getItem('notification');
		this.annonymousNotify = localStorage.getItem('annonymousNotify');
		console.log(this.annonymousNotify);
		if(this.tokenLocalStorage){
			console.log("token");
			$('.settings').css('padding-top','23px');

		}
		if (this.tokenLocalStorage) {
			var base64Url = this.tokenLocalStorage.split('.')[1];
			var base64 = base64Url.replace('-', '+').replace('_', '/');
			var decodedToken = JSON.parse(window.atob(base64));
			if (decodedToken.user.email) {
				this.firstCharUser = decodedToken.user.email.charAt(0).toUpperCase();
			}
		}
		this.language = localStorage.getItem('language');

		if (this.tokenLocalStorage) {
			this.getUserDetail();
		}
	}

	removeCancelButton() {
		(document.querySelector('.action-sheet-group.action-sheet-group-cancel.sc-ion-action-sheet-md') as HTMLElement).style.display = 'none';
	}
	getUrl() {
		this._generalService.getPolicy().subscribe(
			(res: any) => {
				this.privacyPolicy = res;
			},
			(err) => {
				this.error = err;
			});
	}
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
					this.router.navigate(['/home/categories']);
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

	languageChange($event) {
		var language = $event.target.value;
		localStorage.setItem('language', language);
		this.changeLanOnClick();
	}

	changeLanOnClick() {
		this.language = localStorage.getItem('language');
	}

	notificationSwitch(e) {
		localStorage.setItem('notification', e.target.checked);
		localStorage.setItem('annonymousNotify', e.target.checked);
		var accessToken = localStorage.getItem('accessToken');
		this._userService.notifyToggle(e.target.checked).subscribe((res: any) => {
			if (accessToken) {
				this.getUserDetail();
			}
			this._toastService.toastFunction(res.message, 'success');
		}, err => {
			this._toastService.toastFunction(err.error.message, 'danger');
		})
	}

	getUserDetail(): void {
		this._userService.getUserDetail().subscribe(
			(res: any) => {
				this.userData = res.notification;
			},
			(err) => {
				this.error = err;
			});
	}

	logRatingChange(rating) {
		localStorage.setItem('rating', rating);
		this._userService.userRating(rating).subscribe();
		this.rating = true;
		this.userRating = localStorage.getItem('rating');
	}

	getUserRating() {
		if (localStorage.getItem('rating')) {
			this.rating = true;
			this.userRating = localStorage.getItem('rating');
		}
	}
}