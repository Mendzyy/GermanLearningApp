import {ErrorHandler, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {MyApp} from './app.component';
import {HttpModule} from '@angular/http';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {VocabularyPage} from "../pages/vocabulary/vocabulary";
import {GrammarPage} from "../pages/grammar/grammar";
import {VerbsPage} from "../pages/verbs/verbs";
import {TabsPage} from "../pages/tabs/tabs";
import {AnimalsPage} from "../pages/animals/animals";
import {PronounPage} from "../pages/pronoun/pronoun";
import {FoodPage} from "../pages/food/food";
import {FamilyPage} from "../pages/family/family";
import {HumanBodyPartsPage} from "../pages/human-body-parts/human-body-parts";
import {NaturePage} from "../pages/nature/nature";
import {NumbersPage} from "../pages/numbers/numbers";
import {ModalVerbPage} from "../pages/modal-verb/modal-verb";
import {DatePage} from "../pages/date/date";
import {ContactPage} from "../pages/contact/contact";
import {ArticlePage} from "../pages/article/article";
import {SeperableVerbPage} from "../pages/seperable-verb/seperable-verb";
import {VerbsinPage} from "../pages/verbsin/verbsin";
import {ClothesPage} from "../pages/clothes/clothes";
import {TimePage} from "../pages/time/time";

@NgModule({
  declarations: [
    MyApp,
    VerbsPage,
    GrammarPage,
    VocabularyPage,
    TabsPage,
    AnimalsPage,
    PronounPage,
    FoodPage,
    FamilyPage,
    HumanBodyPartsPage,
    NaturePage,
    NumbersPage,
    ModalVerbPage,
    DatePage,
    ContactPage,
    ArticlePage,
    SeperableVerbPage,
    VerbsinPage,
    ClothesPage,
    TimePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    VerbsPage,
    GrammarPage,
    VocabularyPage,
    TabsPage,
    AnimalsPage,
    PronounPage,
    FoodPage,
    FamilyPage,
    HumanBodyPartsPage,
    NaturePage,
    NumbersPage,
    ModalVerbPage,
    DatePage,
    ContactPage,
    ArticlePage,
    SeperableVerbPage,
    VerbsinPage,
    ClothesPage,
    TimePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
