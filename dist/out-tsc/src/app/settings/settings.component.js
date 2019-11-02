import * as tslib_1 from "tslib";
import { Component, ChangeDetectorRef } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ActionSheetController, Platform } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Storage } from '@ionic/storage';
import { FCM } from '@ionic-native/fcm/ngx';
import { GeneralService } from '../services/general.service';
let SettingsComponent = class SettingsComponent {
    constructor(cd, _generalService, platform, fcm, storage, socialSharing, actionSheetController, _userService, router, toastController) {
        this.cd = cd;
        this._generalService = _generalService;
        this.platform = platform;
        this.fcm = fcm;
        this.storage = storage;
        this.socialSharing = socialSharing;
        this.actionSheetController = actionSheetController;
        this._userService = _userService;
        this.router = router;
        this.toastController = toastController;
        this.customActionSheetOptions = {
            addCancelButtonWithLabel: false,
        };
    }
    ngOnInit() {
        this.getUrl();
        this.platform.backButton.subscribe(() => tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (this.router.url.includes('settings')) {
                this.router.navigate(['allcategory']);
            }
        }));
        this.tokenLocalStorage = localStorage.getItem('accessToken');
        this.notifyFlag = localStorage.getItem('notification');
        this.annonymousNotify = localStorage.getItem('annonymousNotify');
        console.log(this.annonymousNotify);
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
        document.querySelector('.action-sheet-group.action-sheet-group-cancel.sc-ion-action-sheet-md').style.display = 'none';
    }
    getUrl() {
        this._generalService.getPolicy().subscribe((res) => {
            this.privacyPolicy = res;
        }, (err) => {
            this.error = err;
        });
    }
    logout() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
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
                            this.router.navigate(['/allcategory']);
                            this.toast = this.toastController.create({
                                message: 'You have been logged out!',
                                duration: 2000,
                                color: 'primary'
                            }).then((toastData) => {
                                toastData.present();
                            });
                        }
                    }, {
                        text: 'Cancel',
                        handler: () => {
                        }
                    }]
            });
            localStorage.setItem('language', 'English');
            yield actionSheet.present();
        });
    }
    sendShare() {
        var message = "An awesome news app that is only you need!";
        var subject = "Install Trivia Post";
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
        this._userService.notifyToggle(e.target.checked).subscribe((res) => {
            if (accessToken) {
                this.getUserDetail();
            }
            this.toast = this.toastController.create({
                message: res.message,
                duration: 2000,
                color: 'success'
            }).then((toastData) => {
                toastData.present();
            });
        }, err => {
            console.log('err===========>', err.error.message);
            this.toast = this.toastController.create({
                message: err.error.message,
                duration: 2000,
                color: 'danger'
            }).then((toastData) => {
                toastData.present();
            });
        });
    }
    getUserDetail() {
        this._userService.getUserDetail().subscribe((res) => {
            this.userData = res.notification;
        }, (err) => {
            this.error = err;
        });
    }
};
SettingsComponent = tslib_1.__decorate([
    Component({
        selector: 'app-settings',
        templateUrl: './settings.component.html',
        styleUrls: ['./settings.component.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, GeneralService, Platform, FCM, Storage, SocialSharing, ActionSheetController, UserService, Router, ToastController])
], SettingsComponent);
export { SettingsComponent };
//# sourceMappingURL=settings.component.js.map