import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {VerbsPage} from '../verbs/verbs';
import {GrammarPage} from '../grammar/grammar';
import {VocabularyPage} from '../vocabulary/vocabulary';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = VerbsPage;
  tab2Root: any = GrammarPage;
  tab3Root: any = VocabularyPage;

  constructor(public navCtrl: NavController) {
  }

}
