import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ArticlePage} from '../article/article';

@Component({
  selector: 'page-grammar',
  templateUrl: 'grammar.html'
})
export class GrammarPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }

  goToArticle(params) {
    if (!params) params = {};
    this.navCtrl.push(ArticlePage);
  }
}
