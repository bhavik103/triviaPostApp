import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { GeneralService } from '../services/general.service';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
let PrivacyComponent = class PrivacyComponent {
    constructor(platform, _generalService, router) {
        this.platform = platform;
        this._generalService = _generalService;
        this.router = router;
    }
    ngOnInit() {
        this.platform.backButton.subscribe(() => tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (this.router.url.includes('privacy')) {
                this.router.navigate(['settings']);
            }
        }));
        this.getPrivacyPolicy();
    }
    getPrivacyPolicy() {
        this.loading = true;
        this._generalService.getPolicy().subscribe((res) => {
            this.loading = false;
            this.privacyPolicy = res;
            console.log(this.privacyPolicy);
        }, (err) => {
            this.loading = false;
            this.error = err;
        });
    }
};
PrivacyComponent = tslib_1.__decorate([
    Component({
        selector: 'app-privacy',
        templateUrl: './privacy.component.html',
        styleUrls: ['./privacy.component.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [Platform, GeneralService, Router])
], PrivacyComponent);
export { PrivacyComponent };
//# sourceMappingURL=privacy.component.js.map