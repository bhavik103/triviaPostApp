import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { GeneralService } from '../services/general.service';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
let TermsAndCondComponent = class TermsAndCondComponent {
    constructor(platform, _generalService, router) {
        this.platform = platform;
        this._generalService = _generalService;
        this.router = router;
    }
    ngOnInit() {
        this.platform.backButton.subscribe(() => tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (this.router.url.includes('terms')) {
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
TermsAndCondComponent = tslib_1.__decorate([
    Component({
        selector: 'app-terms-and-cond',
        templateUrl: './terms-and-cond.component.html',
        styleUrls: ['./terms-and-cond.component.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [Platform, GeneralService, Router])
], TermsAndCondComponent);
export { TermsAndCondComponent };
//# sourceMappingURL=terms-and-cond.component.js.map