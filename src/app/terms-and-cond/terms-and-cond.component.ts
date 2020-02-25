import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../services/general.service';
import { config } from '../config';
import { Router } from '@angular/router';
import { privacyPolicy } from '../privacy/privacyPolicy';
import { Platform } from '@ionic/angular';
import {termsTitle} from '../changeLang'
@Component({
	selector: 'app-terms-and-cond',
	templateUrl: './terms-and-cond.component.html',
	styleUrls: ['./terms-and-cond.component.scss'],
})
export class TermsAndCondComponent implements OnInit {
	privacyPolicy: any;
	error: any;
	loading: any;
	termsTitle = termsTitle;
	language: any;
	constructor(private platform: Platform, public _generalService: GeneralService, private router: Router) {
	}

	ngOnInit() {
		this.language = localStorage.getItem('language');
		this.platform.backButton.subscribe(async () => {
			if (this.router.url.includes('terms')) {
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
				var text = $('#termsAndCondotion').text();
				var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
				var text1 = text.replace(exp, "<a href='$1'>$1</a>");
				var exp2 = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
				$('#termsAndCondotion').replaceWith(text1.replace(exp2, '$1<a target="_blank" href="http://$2">$2</a>'));
				console.log(text1.replace(exp2, '$1<a target="_blank" href="http://$2">$2</a>'))
			},
			(err) => {
				this.loading = false;
				this.error = err;
			});
	}
}
