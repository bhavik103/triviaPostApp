import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../services/category.service';
import {Category} from '../home/category';
import {config} from '../config';
import {Router, NavigationExtras} from '@angular/router';
import { ToastController } from '@ionic/angular';
import * as _ from 'lodash';
import {Platform } from '@ionic/angular';
import { Observable } from 'rxjs';
@Component({
	selector: 'app-all-category',
	templateUrl: './all-category.component.html',
	styleUrls: ['./all-category.component.scss'],
})
export class AllCategoryComponent implements OnInit {
	categories$: Observable<any>;
	toast: any;
	error = '';
	tokenLocalStorage: any;
	mediaPath = config.mediaApiUrl;
	loggedInUser: any;
	loading:any;
	language: string;
	myTitle: string;
	that;
	constructor(public platform:Platform, public toastController: ToastController,public _categoryService: CategoryService, private router:Router){
		this.getCategories();
		this.categories$;
		this.myTitle = "Old Title";
	}

	ngOnInit() {
		this.language = localStorage.getItem('language');
	}

	ionViewWillEnter(){
		// this.loading = true;
		this.platform.backButton.subscribe(async () => {
            if(this.router.url.includes('allcategory')){
                this.router.navigate(['home']);
            }
        });
		this.language = localStorage.getItem('language');
		console.log("language in all category",this.language)
		// this.getCategories();
	}

	handleCategories(res:any,that){
	}
	handleCatError(err){
		this.loading = false;
		this.error = err;
		console.error(err);
	}

	handleCatComplete(){
		console.log("Observable Category Completed")
	}
	getCategories(){
		
		this.tokenLocalStorage = localStorage.getItem('accessToken');
		if(this.tokenLocalStorage){
			var base64Url = this.tokenLocalStorage.split('.')[1];
			var base64 = base64Url.replace('-', '+').replace('_', '/');
			var decodedToken = JSON.parse(window.atob(base64));
			this.loggedInUser = decodedToken.user._id;
			console.log("Decoded",this.loggedInUser);
		}
		var that = this;
		console.log("before", this.categories$);
		this.categories$ = this._categoryService.getAll().pipe();
		console.log("after", this.categories$);
	}

	search(){
		this.router.navigate(['searchBar']);
	}

	categoryNews(id){
		let navigationExtras: NavigationExtras = {
			state: {
				catId: id
			}
		};
		this.router.navigate(['catResult'], navigationExtras);
	}

	addNotify(catId){
		console.log("ts",catId);
		this._categoryService.notifyUser(catId).subscribe((res: any) => {
			console.log("res",res);
			this.toast = this.toastController.create({
				message: res.message,
				duration: 2000,
				color: 'success'
			}).then((toastData)=>{
				this.getCategories();
				console.log(toastData);
				toastData.present();
			});
		}, err => {
			this.toast = this.toastController.create({
				message: err.error.message,
				duration: 2000,
				color: 'danger'
			}).then((toastData)=>{
				console.log(toastData);
				toastData.present();
			});
		})
	}
}