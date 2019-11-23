import { Component, OnInit } from '@angular/core';
import 'hammerjs';
import {NavParams} from '@ionic/angular';
import { Router } from '@angular/router';
import { CategoryService } from '../services/category.service';
import { Observable } from 'rxjs';
import { config } from '../config';
import { Network } from '@ionic-native/network/ngx';
import { ToastService } from "../services/toast.service";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
  categories: any;
  mediaPath = config.mediaApiUrl;
  language: any;
  loading: any;
  constructor(private navParams:NavParams,private _toastService: ToastService, private network: Network, private _categoryService: CategoryService, private router: Router) {
    // console.log('this.navParams.data',navParams.data);
    this.getCategories();
  }
  
  ngOnInit() {
  }
  
  ionViewWillEnter() {
    this.language = this.navParams.data;
  }

  getCategories() {
    this.language = localStorage.getItem('language');
    this._categoryService.getAll().subscribe((res) => {
      this.categories = res;
      console.log("in categories component=>>>>>>>", this.categories);
    },
      (err) => {
      });
  }

  subscribedCategory(e) {
    console.log("Event e", e);
    if (e.isNotify == true) {
      this.categories.find((o) => o.categoryId === e.catId).isNotify = false;
    } else {
      this.categories.find((o) => o.categoryId === e.catId).isNotify = true;
    }
  }
}