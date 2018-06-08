import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {NumbersPage} from '../numbers/numbers';
import {TimePage} from '../time/time';
import {DatePage} from '../date/date';
import {HumanBodyPartsPage} from '../human-body-parts/human-body-parts';
import {NaturePage} from '../nature/nature';
import {FamilyPage} from '../family/family';
import {AnimalsPage} from '../animals/animals';
import {FoodPage} from '../food/food';
import {ClothesPage} from '../clothes/clothes';

@Component({
  selector: 'page-vocabulary',
  templateUrl: 'vocabulary.html'
})
export class VocabularyPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }

  goToNumbers(params) {
    if (!params) params = {};
    this.navCtrl.push(NumbersPage);
  }

  goToTime(params) {
    if (!params) params = {};
    this.navCtrl.push(TimePage);
  }

  goToDate(params) {
    if (!params) params = {};
    this.navCtrl.push(DatePage);
  }

  goToHumanBodyParts(params) {
    if (!params) params = {};
    this.navCtrl.push(HumanBodyPartsPage);
  }

  goToNature(params) {
    if (!params) params = {};
    this.navCtrl.push(NaturePage);
  }

  goToFamily(params) {
    if (!params) params = {};
    this.navCtrl.push(FamilyPage);
  }

  goToAnimals(params) {
    if (!params) params = {};
    this.navCtrl.push(AnimalsPage);
  }

  goToFood(params) {
    if (!params) params = {};
    this.navCtrl.push(FoodPage);
  }

  goToClothes(params) {
    if (!params) params = {};
    this.navCtrl.push(ClothesPage);
  }
}
