import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  selector: 'page-animals',
  templateUrl: 'animals.html'
})

export class AnimalsPage {

  animalsArray: any[];
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
    this.initializeArray();
    this.sortArray()
  }

  initializeArray() {
    this.animalsArray = [{
      e: "Animal",
      d: "das Tier"
    }, {
      e: "Bear",
      d: "der Bär"
    }, {
      e: "Squirrel",
      d: "das Eichhörnchen"
    }, {
      e: "Fox",
      d: "der Fuchs"
    }, {
      e: "Hare",
      d: "die Hase "
    }, {
      e: "Dog",
      d: "der Hund"
    }, {
      e: "Calf",
      d: "das Kalb"
    }, {
      e: "Rabbit",
      d: "das Kaninchen"
    }, {
      e: "Cat",
      d: "die Katze"
    }, {
      e: "Kitten",
      d: "das Kätzchen"
    }, {
      e: "Cow",
      d: "die Kuh"
    }, {
      e: "Lion",
      d: "der Löwe"
    }, {
      e: "Mouse",
      d: "die Maus"
    }, {
      e: "Horse",
      d: "das Pferd"
    }, {
      e: "Rat",
      d: "die Ratte"
    }, {
      e: "Turtel",
      d: "die Schildkröte"
    }, {
      e: "Snake",
      d: "die Schlange"
    }, {
      e: "Bull",
      d: "der Stier"
    }, {
      e: "Wolf",
      d: "der Wolf"
    }, {
      e: "Worm",
      d: "der Wurm"
    }, {
      e: "Bird",
      d: "der Vögel"
    }, {
      e: "Rooster",
      d: "der Henne"
    }, {
      e: "Hen",
      d: "die Henne"
    }, {
      e: "Eagle",
      d: "der Adler"
    }, {
      e: "Chick",
      d: "das Küken"
    }, {
      e: "Ant",
      d: "die Ameise"
    }, {
      e: "Bee",
      d: "die Biene"
    }, {
      e: "Fly",
      d: "die Fliege"
    }, {
      e: "Grasshopper",
      d: "die Heuschrecke"
    }, {
      e: "Moth",
      d: "die Motte"
    }, {
      e: "Mosquito",
      d: "die Mücke"
    }, {
      e: "Butterfly",
      d: "der Schmetterling"
    }]
  }

  sortArray() {
    this.animalsArray = this.animalsArray.sort(function (l, n) {
      return l.e > n.e ? 1 : l.e < n.e ? -1 : 0
    })
  }

}
