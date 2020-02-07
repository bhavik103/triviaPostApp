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

  constructor(private _categoryService: CategoryService) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.getCategories();
  }

  getCategories() {
    this.language = localStorage.getItem('language');
    this._categoryService.getAll().subscribe((res) => {
      this.categories = res;
      console.log("after", this.categories);
    },
      (err) => {
      });
  }
}
