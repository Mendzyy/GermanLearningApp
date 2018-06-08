import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

@Component({
  selector: 'page-verbsin',
  templateUrl: 'verbsin.html'
})
export class VerbsinPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(this.navParams.get('name'));
  }

}
