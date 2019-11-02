import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Platform } from '@ionic/angular';
let FeedbackComponent = class FeedbackComponent {
    constructor(platform, toastController, _userService, router) {
        this.platform = platform;
        this.toastController = toastController;
        this._userService = _userService;
        this.router = router;
        this.feedbackForm = new FormGroup({
            email: new FormControl('', Validators.required),
            name: new FormControl('', Validators.required),
            mobile: new FormControl('', Validators.required),
            message: new FormControl('', Validators.required),
        });
        this.feedback = {
            email: "",
            name: "",
            mobile: "",
            message: ""
        };
    }
    ngOnInit() {
        this.platform.backButton.subscribe(() => tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (this.router.url.includes('feedback')) {
                this.router.navigate(['settings']);
            }
        }));
    }
    userFeedback(feedback) {
        this.loading = true;
        this._userService.userFeedbackFrom(feedback).subscribe((res) => {
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
};
FeedbackComponent = tslib_1.__decorate([
    Component({
        selector: 'app-feedback',
        templateUrl: './feedback.component.html',
        styleUrls: ['./feedback.component.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [Platform, ToastController, UserService, Router])
], FeedbackComponent);
export { FeedbackComponent };
//# sourceMappingURL=feedback.component.js.map