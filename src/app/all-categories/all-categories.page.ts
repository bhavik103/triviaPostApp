import { StorageService } from './../services/storage.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { catTitle } from '../changeLang';
import { UserService } from '../services/user.service';
import { AppComponent } from '../app.component'
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { AdmobfreeService } from '../services/admobfree.service';
import {Storage} from '@ionic/storage'
@Component({
  selector: 'app-all-categories',
  templateUrl: './all-categories.page.html',
  styleUrls: ['./all-categories.page.scss'],
})
export class AllCategoriesPage implements OnInit {
  language: string;
  categories: any;
  loading: boolean;
  catSelect: string;
  catTitle = catTitle;
  openRatingModal: any;
  constructor(private storage: Storage,private _storageService: StorageService, private _admobService: AdmobfreeService, private router: Router, private platform: Platform, private appcomponent: AppComponent, private _userService: UserService, private _categoryService: CategoryService) { }

  ngOnInit() {
    this.platform.backButton.subscribe(() => {
      this.appcomponent.openRatingModal();
    });
    this.language = localStorage.getItem('language')
    const alertOnlineStatus = () => {
    }

    window.addEventListener('online', alertOnlineStatus)
    window.addEventListener('offline', alertOnlineStatus)
  }
  ionViewWillEnter() {
    this.initFun();
    this.getCategories();
  }

  initFun(){
    this._admobService.interstitalAdOnFivePageChange()
    if (localStorage.getItem('skip')) {
      localStorage.setItem('skip', '1');
      localStorage.setItem('shareBlink', '1');
      localStorage.setItem('catSelect', '1');
      localStorage.setItem('firstLargePostClick', '1');
    }
    if (localStorage.getItem('catModal') && !localStorage.getItem('skip')) {
      this.router.navigateByUrl('/login')
    }
    this.loading = false;
  }

  handlingBackButton() {
    this._userService.callComponentMethod('1');
    console.log("this.openRatingModal", this.appcomponent)
  }
  async getCategories() {
    this.loading = true;
    this.language = localStorage.getItem('language');
    if (navigator.onLine) {
      this._categoryService.getAll().toPromise().then((res: any) => {
        console.log("after", res);
        this.categories = [].concat(res).reverse();
        this.loading = false;
      },
        (err) => {
          this.loading = false;
        });
    } else {
      console.log("HELLO")
      let catString = await this.storage.get('cat')
      this.categories = JSON.parse(catString);
      console.log("OFFLINE CATEGORY",this.categories);
      this.loading = false
    }
  }
  //change on subscription of category
  subscribedCategory(e, isNotify) {
    console.log("Event e", e);
    if (e.cat === 1) {
      localStorage.setItem('catSelect', '1');
      localStorage.setItem('language', this.language);
      this.catSelect = '1';
    } else {
      if (e.statusCode == 1) {
        this.categories.find((o) => o.categoryId === e.catId).isNotify = true;
      } else if (e.statusCode == 0) {
        this.categories.find((o) => o.categoryId === e.catId).isNotify = false;
      }
    }
  }
  backButton() {
    this.appcomponent.openRatingModal();
  }
}