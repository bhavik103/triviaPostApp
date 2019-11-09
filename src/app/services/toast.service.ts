import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  toast: any;
  constructor(public toastController: ToastController) { }

  toastFunction(message, color){
    this.toast = this.toastController.create({
      message: message,
      duration: 2000,
      color: 'danger'
    }).then((toastData) => {
      toastData.present();
    });
    return "Toast Shown";
  }
}
