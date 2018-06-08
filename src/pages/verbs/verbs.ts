import {Component} from '@angular/core';
import {NavController, ToastController} from 'ionic-angular';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
import {VerbsinPage} from "../verbsin/verbsin";

@Component({
  selector: 'page-verbs',
  templateUrl: 'verbs.html'
})
export class VerbsPage {
  verbs: any[];
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController, public http: Http, public toast: ToastController) {
    this.initializeArray();
  };

  verbClick(verb) {
    this.navCtrl.push(VerbsinPage, verb)
  };

  searchVerb(ev: any) {
    if ("" !== ev.target.value.trim()) {
      if (ev.target.value) this.verbs = this.verbs.filter(item => {
        let verbToLowerCase = item.name.toLowerCase();

        if (verbToLowerCase.indexOf(ev.target.value.toLowerCase()) > -1) {
          return verbToLowerCase.indexOf(ev.target.value.toLowerCase()) > -1;
        }

      }); else if ("" == ev.target.value.trim()) {
        this.initializeArray();
      }
    } else if ("" == ev.target.value.trim()) {
      this.initializeArray();
    }

  };

  initializeArray() {
    this.http.get("/../assets/json/verb.json").map(res => res.json()).subscribe(data => {
      this.verbs = data.data;
    });
  }


}
