import { Component } from '@angular/core';
import { NavController, Item } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { GroceriesServiceProvider } from '../../providers/groceries-service/groceries-service';
import { InputDialogServiceProvider } from '../../providers/input-dialog-service/input-dialog-service';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  title = "Grocery List";

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public toastCtrl: ToastController, public dataService: GroceriesServiceProvider,  public inputDialogService: InputDialogServiceProvider) {

  }

  loadItems(){
    return this.dataService.getItems();
  }

  removeItem(item, index) {
    const toast = this.toastCtrl.create({
      message: "Removing " + item.name + "...",
      duration: 3000
    });
    toast.present();

    this.dataService.removeItem(index)
  }


  addItem(){
    this.inputDialogService.showPrompt();
  }

  editItem(item, index){
    console.log("Edit Item - ", item, index)
    const toast = this.toastCtrl.create({
      duration: 3000
    });
    toast.present();
    this.inputDialogService.showPrompt(item, index);

  }


  }


