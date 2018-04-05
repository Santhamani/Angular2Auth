import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Angular2SocialLoginModule } from "angular2-social-auth";
// import {enableProdMode} from '@angular/core';


// import {GoogleSignInComponent} from 'angular-google-signin';

// import * as jQuery from 'jquery';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { routing } from './app.routes';

// import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { OnlineCoursesComponent } from './online-courses/online-courses.component';
import { TalktoastrologerComponent } from "./talktoastrologer/talktoastrologer.component";
import { DevoteeshopComponent } from './devoteeshop/devoteeshop.component';
import { PoojaComponent } from './pooja/pooja.component';
import { PiligrimageComponent } from './piligrimage/piligrimage.component';
import { AstroComponent } from './astro/astro.component';
import { HoroscopeComponent } from './horoscope/horoscope.component';
import { AstrologyComponent } from './astrology/astrology.component';
import { NumerologyComponent } from './numerology/numerology.component';
import { VasthuserviceComponent } from './vasthuservice/vasthuservice.component';
import { ReikiComponent } from './reiki/reiki.component';
import { PalmistryComponent } from './palmistry/palmistry.component';
import { RudhrakshasComponent } from './rudhrakshas/rudhrakshas.component';
import { ShaligramComponent } from './shaligram/shaligram.component';
import { GemstonesComponent } from './gemstones/gemstones.component';
import { BooksComponent } from './books/books.component';
import { DairyComponent } from './dairy/dairy.component';
import { YantrasComponent } from './yantras/yantras.component';
import { VasthuComponent } from './vasthu/vasthu.component';
import { LoginComponent } from './login/login.component';

let providers = {
  "google": {
    "clientId": "780402958326-bdou1sntks7js9agf0bvhbegcdi0lp3u.apps.googleusercontent.com"
  },
  "facebook": {
    "clientId": "1691423407587900",
    "apiVersion": "v2.4" //like v2.4 
  }
};

@NgModule({
  declarations: [
    AppComponent, HomeComponent, OnlineCoursesComponent, DevoteeshopComponent,
     PoojaComponent, PiligrimageComponent, AstroComponent, HoroscopeComponent, AstrologyComponent,
      NumerologyComponent,VasthuserviceComponent, ReikiComponent, PalmistryComponent,TalktoastrologerComponent,
      RudhrakshasComponent,GemstonesComponent,ShaligramComponent,BooksComponent,DairyComponent,
      YantrasComponent,VasthuComponent, LoginComponent
      
  ],
  imports: [
    BrowserModule, routing, Angular2FontawesomeModule,Angular2SocialLoginModule
  ],

 
  providers: [],
  
  bootstrap: [AppComponent]
  
})
export class AppModule { }

Angular2SocialLoginModule.loadProvidersScripts(providers);
