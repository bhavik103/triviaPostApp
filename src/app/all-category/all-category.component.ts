import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Category } from '../home/category';
import { config } from '../config';
import { Router, NavigationExtras } from '@angular/router';
import * as _ from 'lodash';
import { Platform } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Network } from '@ionic-native/network/ngx';
import { ToastService } from "../services/toast.service";
@Component({
	selector: 'app-all-category',
	templateUrl: './all-category.component.html',
	styleUrls: ['./all-category.component.scss'],
})
export class AllCategoryComponent implements OnInit {
	categories$: Observable<any>;
	error = '';
	tokenLocalStorage: any;
	mediaPath = config.mediaApiUrl;
	loggedInUser: any;
	loading: any;
	language: string;
	that;
	constructor(private _toastService: ToastService ,private network: Network, public platform: Platform, public _categoryService: CategoryService, private router: Router) {
		this.getCategories();
		this.categories$;
	}

	ngOnInit() {
		this.language = localStorage.getItem('language');
	}

	ionViewWillEnter() {
		this.platform.backButton.subscribe(async () => {
			if (this.router.url.includes('allcategory')) {
				this.router.navigate(['home']);
			}
		});
		this.language = localStorage.getItem('language');
	}

	handleCategories(res: any, that) {
	}
	handleCatError(err) {
		this.loading = false;
		this.error = err;
		console.error(err);
	}

	handleCatComplete() {
		console.log("Observable Category Completed")
	}
	getCategories() {

		this.tokenLocalStorage = localStorage.getItem('accessToken');
		if (this.tokenLocalStorage){
			var base64Url = this.tokenLocalStorage.split('.')[1];
			var base64 = base64Url.replace('-', '+').replace('_', '/');
			var decodedToken = JSON.parse(window.atob(base64));
			this.loggedInUser = decodedToken.user._id;
			console.log("Decoded", this.loggedInUser);
		}
		var that = this;
		console.log("before", this.categories$);
		this.categories$ = this._categoryService.getAll().pipe();
		console.log("after", this.categories$);
	}

	search() {
		this.router.navigate(['searchBar']);
	}

	categoryNews(id) {
		let navigationExtras: NavigationExtras = {
			state: {
				catId: id
			}
		};
		this.router.navigate(['catResult'], navigationExtras);
	}

	addNotify(catId){
		if(this.network.type == 'none'){
			const message = "No internet connection";
			const color = "danger";
			this._toastService.toastFunction(message,color);
		}else{
			this._categoryService.notifyUser(catId).subscribe((res: any) => {
				this._toastService.toastFunction(res.message,'success');
				this.getCategories();
			}, err => {
				this.getCategories();
				this._toastService.toastFunction(err.error.message,'danger');
			})
		}
	}
}