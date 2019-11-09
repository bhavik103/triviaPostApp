import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../services/category.service';
import {Category} from '../home/category';
import {config} from '../config';
import {Router} from '@angular/router';
import {NewsService} from '../services/news.service';
import {News} from '../home/news';
import { ActionSheetController,Platform } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Observable } from 'rxjs/Observable';
import { ToastService } from '../services/toast.service';
@Component({
	selector: 'app-bookmarks',
	templateUrl: './bookmarks.component.html',
	styleUrls: ['./bookmarks.component.scss'],
})
export class BookmarksComponent implements OnInit {
	newsArray: any;
	newsObj: any;
	category_array: Category[];
	error = '';
	language: string;
	mediaPath = config.mediaApiUrl;
	bookmarkLength: any;
	loading:any;
	hide;
	constructor(private _toastService: ToastService ,private platform: Platform, private socialSharing: SocialSharing,public actionSheetController: ActionSheetController,public _newsService: NewsService,public _categoryService: CategoryService, private router:Router) { }

	ngOnInit() {
		this.platform.backButton.subscribe(async () => {
            if(this.router.url.includes('bookmarks')){
                this.router.navigate(['settings']);
            }
        });
		this.bookmarkedNews();
		this.language = localStorage.getItem('language');
	}

	ionViewWillEnter(){
		// // Check Internet conectivity
		var offline = Observable.fromEvent(document, "offline");
		var online = Observable.fromEvent(document, "online");
	
		offline.subscribe(() => {
		  this.hide = false;
		  const message = 'No internet connection';
		  const color = 'danger';
		  this._toastService.toastFunction(message,color);
		});
	}

	bookmarkedNews(): void{
		this.loading = true;
		this._newsService.getAllBookmarks().subscribe(
			(res) => {
				this.loading = false;
				this.newsObj = res;
				this.newsArray = this.newsObj;
				this.bookmarkLength = this.newsArray.length;
			},
			(err) => {
				this.loading = false;
				this.error = err;
			});
	}

	async bookmarkAction(id, title){
		console.log(id);
		const actionSheet = await this.actionSheetController.create({
			buttons: [{
				text: 'Remove',
				role: 'destructive',
				handler: () => {
					this._newsService.bookmarkPost(id).subscribe((res: any) => {
						console.log("res",res);
						this._toastService.toastFunction(res.message,'success');
						this.bookmarkedNews();
					}, err => {
						this._toastService.toastFunction(err.error.message,'danger');
						this.bookmarkedNews();
					})
				}
			}, {
				text: 'Share',
				handler: () => {
					var message = "Check out this amazing news " + '" ' + title + ' "';
					var subject = "Trivia Post";
					var url = 'https://triviapost.in/post/' + id; 
					this.socialSharing.share(message,subject, null , url)
					.then((entries) => {
						console.log('success ' + JSON.stringify(entries));
					})
					.catch((error) => {
					});	
				}
			}]
		});
		await actionSheet.present();
	}

	getSingleBookmark(id){
		this.router.navigate(['single-post/'+ id + '/bookmark']);
	}
}