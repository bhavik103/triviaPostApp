import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import 'hammerjs';
import { Router } from '@angular/router';
import { CategoryService } from '../services/category.service';
import { Observable } from 'rxjs';
import { config } from '../config';
import { Network } from '@ionic-native/network/ngx';
import { ToastService } from "../services/toast.service";
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { language, tourCategory, modalBookmarkText, modalBookmarkTitle, modalNotificationText, modalNotificationTitle, proceedTour } from 'app/changeLang';
import { IonSlides } from '@ionic/angular';
import * as introJs from 'intro.js/intro.js';
@Component({
  selector: 'app-category-tiles',
  templateUrl: './category-tiles.page.html',
  styleUrls: ['./category-tiles.page.scss'],
})
export class CategoryTilesPage implements OnInit {
  @Input('category') category: string;
  @Input('language') language: string;
  @Input('firstTime') firstTime: any;
  @Input('index') index: any;
  @Output() onSubscribe: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild(IonSlides, { static: false }) protected slider: IonSlides;
  tourCategory = tourCategory;
  modalBookmarkTitle = modalBookmarkTitle
  modalBookmarkText = modalBookmarkText
  modalNotificationTitle = modalNotificationTitle
  modalNotificationText = modalNotificationText
  proceedTour = proceedTour
  skip: any
  mediaPath = config.mediaApiUrl;
  modal: boolean;
  sliderIndex: number;
  ifTourCompleted: any;
  introJS = introJs();
  constructor(private _toastService: ToastService, private network: Network, private _categoryService: CategoryService, private router: Router) {
  }

  ngOnInit() {
    console.log("INDEX",this.index)
    if (!localStorage.getItem('catModal')) {
      this.modal = true;
    }
    $('.introjs-helperLayer').click();
    if (localStorage.getItem('catSelect') == '0') {
      // introJs().start();
      this.ifTourCompleted = 1;
      console.log('this.ifTourCompleted', this.ifTourCompleted)
    }
    this.skip = localStorage.getItem('skip');
    const alertOnlineStatus = () => {
    }

    window.addEventListener('online', alertOnlineStatus)
    window.addEventListener('offline', alertOnlineStatus)
    console.log("this.categories in child", this.category)
    console.log("this.categories in child", this.language)
  }
  goToAllPosts() {
    this.router.navigateByUrl('/home/all-post')
  }

  singleCategory(catId, catname) {
    this.router.navigateByUrl('single-category/' + catId + '/' + catname);
  }

  addNotify(catId, isNotify) {
    localStorage.setItem('catModal', '1')
    if (this.network.type == 'none') {
      const message = "No internet connection";
      const color = "danger";
      this._toastService.toastFunction(message, color);
    } else {
      this._categoryService.notifyUser(catId).subscribe((res: any) => {
        this._toastService.toastFunction(res.message, 'success');
        var emitObject = { catId: catId, statusCode: res.statusCode }
        console.log("EMIT OBJECT", emitObject)
        this.onSubscribe.emit(emitObject);
      }, err => {
        this._toastService.toastFunction(err.error.message, 'danger');
      })
    }
  }

  closeModal() {
    localStorage.setItem('catModal', '1')
    this.modal = false;
  }

  redirectToSignup() {
    localStorage.setItem('catModal', '1')
    this.router.navigateByUrl('/login')
  }

  protected async slideDidChange(): Promise<void> {
    this.sliderIndex = await this.slider.getActiveIndex();
    console.log("ACTIVE INDEX", this.sliderIndex)
  }
  async next() {
    if (this.sliderIndex == 2) {
      localStorage.setItem('catModal', '1')
      this.router.navigateByUrl('/login')
    } else {
      this.slider.slideNext();
    }
  }
}