import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';

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

  constructor(private _categoryService: CategoryService) { }

  ngOnInit() {
    const alertOnlineStatus = () => {
    }

    window.addEventListener('online', alertOnlineStatus)
    window.addEventListener('offline', alertOnlineStatus)
  }

  ionViewWillEnter() {
    if (localStorage.getItem('skip')) {
      localStorage.setItem('skip', '1');
      localStorage.setItem('shareBlink', '1');
      localStorage.setItem('catSelect', '1');
      localStorage.setItem('firstLargePostClick', '1');
    }

    this.loading = false;
    this.getCategories();
  }

  getCategories() {
    this.loading = true;
    this.language = localStorage.getItem('language');
    if (navigator.onLine) {
      this._categoryService.getAll().subscribe((res) => {
        this.categories = res;
        this.loading = false;
        console.log("after", this.categories);
      },
        (err) => {
          this.loading = false;
        });
    } else {
      console.log("OFFFFFFFFF")
      this.categories = JSON.parse(localStorage.getItem('categoryArray'))
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
}
