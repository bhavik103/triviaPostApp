import { Component, OnInit } from '@angular/core';
import 'hammerjs';
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
  categories$: Observable<any>;
  mediaPath = config.mediaApiUrl;
  language: any;
  constructor(private _toastService: ToastService ,private network: Network,private _categoryService: CategoryService, private router: Router) {
    this.getCategories();
    this.categories$;
  }

  ngOnInit() {
  }

  goToAllPosts() {
    this.router.navigateByUrl('/home/all-post')
  }

  getCategories() {
    this.language = localStorage.getItem('language');
    this.categories$ = this._categoryService.getAll().pipe();
    console.log("after", this.categories$);
  }

  singeCategory(catId, catname) {
    console.log('catId compoennt', catId)
    this.router.navigateByUrl('single-category/' + catId + '/' + catname);
  }

  addNotify(catId) {
    if (this.network.type == 'none') {
      const message = "No internet connection";
      const color = "danger";
      this._toastService.toastFunction(message, color);
    } else {
      this._categoryService.notifyUser(catId).subscribe((res: any) => {
        this._toastService.toastFunction(res.message, 'success');
        this.getCategories();
      }, err => {
        this.getCategories();
        this._toastService.toastFunction(err.error.message, 'danger');
      })
    }
  }
}
