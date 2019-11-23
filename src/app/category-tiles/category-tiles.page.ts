import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import 'hammerjs';
import { Router } from '@angular/router';
import { CategoryService } from '../services/category.service';
import { Observable } from 'rxjs';
import { config } from '../config';
import { Network } from '@ionic-native/network/ngx';
import { ToastService } from "../services/toast.service";
// import {NavParams} from '@ionic/angular';

@Component({
  selector: 'app-category-tiles',
  templateUrl: './category-tiles.page.html',
  styleUrls: ['./category-tiles.page.scss'],
})
export class CategoryTilesPage implements OnInit {
  @Input('category') category: string;
  @Input('language') language: string;
  @Output() onSubscribe: EventEmitter<any> = new EventEmitter<any>();


  mediaPath = config.mediaApiUrl;
  constructor(private _toastService: ToastService, private network: Network, private _categoryService: CategoryService, private router: Router) {
    // console.log('this.navParams.data',navParams.data);
  }

  ngOnInit() {
    console.log("this.categories in child",this.category)
  }
  goToAllPosts() {
    this.router.navigateByUrl('/home/all-post')
  }

  singleCategory(catId, catname) {
    this.router.navigateByUrl('single-category/' + catId + '/' + catname);
  }

  addNotify(catId,isNotify) {
    if (this.network.type == 'none') {
      const message = "No internet connection";
      const color = "danger";
      this._toastService.toastFunction(message, color);
    } else {
      this._categoryService.notifyUser(catId).subscribe((res: any) => {
        this._toastService.toastFunction(res.message, 'success');
        var emitObject = {catId: catId, isNotify: isNotify}
        this.onSubscribe.emit(emitObject);
      }, err => {
        this._toastService.toastFunction(err.error.message, 'danger');
      })
    }
  }
}