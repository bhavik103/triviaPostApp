import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../services/general.service';
import { config } from '../config';
import { Router } from '@angular/router';
import { privacyTitle } from '../changeLang'
import { Platform } from '@ionic/angular';
import { AppComponent } from '../app.component'
import { AdmobfreeService } from '../services/admobfree.service';

@Component({
	selector: 'app-privacy',
	templateUrl: './privacy.component.html',
	styleUrls: ['./privacy.component.scss'],
})
export class PrivacyComponent implements OnInit {
	privacyPolicy: any;
	error: any;
	loading: any;
	privacyTitle = privacyTitle;
	language: any;
	constructor(private _admobService: AdmobfreeService,public appcomponent: AppComponent, private platform: Platform, public _generalService: GeneralService, private router: Router) {
	}

	ionViewWillEnter(){
		this._admobService.interstitalAdOnFivePageChange()
	}
	ngOnInit() {
		this.language = localStorage.getItem('language')
		this.platform.backButton.subscribe(async () => {
			this.appcomponent.openRatingModal();
			if (this.router.url.includes('privacy')) {
				this.router.navigate(['settings']);
			}
		});
		this.getPrivacyPolicy();
	}

	getPrivacyPolicy(): void {
		this.loading = true;
		this._generalService.getPolicy().subscribe(
			(res: any) => {
				this.loading = false;
				this.privacyPolicy = res;
				console.log(this.privacyPolicy);
			},
			(err) => {
				this.loading = false;
				this.error = err;
			});
	}
	backButton() {
		this.appcomponent.openRatingModal();
	}
}
