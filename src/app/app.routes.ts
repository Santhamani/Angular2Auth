
import {RouterModule , Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OnlineCoursesComponent } from './online-courses/online-courses.component';
import { TalktoastrologerComponent } from './talktoastrologer/talktoastrologer.component';
import { LoginComponent } from './login/login.component';

import { DevoteeshopComponent } from './devoteeshop/devoteeshop.component';
    import { RudhrakshasComponent } from './rudhrakshas/rudhrakshas.component';
    import { ShaligramComponent } from './shaligram/shaligram.component';
    import { GemstonesComponent } from './gemstones/gemstones.component';
    import { BooksComponent } from './books/books.component';
    import { DairyComponent } from './dairy/dairy.component';
    import { YantrasComponent } from './yantras/yantras.component';
    import { VasthuComponent } from './vasthu/vasthu.component';


import { PoojaComponent } from './pooja/pooja.component';
import { PiligrimageComponent } from './piligrimage/piligrimage.component';
import { AstroComponent } from './astro/astro.component';
import { HoroscopeComponent } from './horoscope/horoscope.component';
import { AstrologyComponent } from './astrology/astrology.component';
import { NumerologyComponent } from './numerology/numerology.component';
import { PalmistryComponent } from './palmistry/palmistry.component';
import { VasthuserviceComponent } from './vasthuservice/vasthuservice.component';
import { ReikiComponent } from './reiki/reiki.component';


export const routes: Routes = [

    { path: '', component : HomeComponent},
    { path: 'onlinecourses', component : OnlineCoursesComponent},
    { path: 'talktoastrologers', component : TalktoastrologerComponent},
    { path: 'login', component : LoginComponent},

    
    { path: 'devoteeshop', component : DevoteeshopComponent},
        { path: 'rudhrakshas', component : RudhrakshasComponent},
        { path: 'shaligram', component : ShaligramComponent},
        { path: 'gemstones', component : GemstonesComponent},
        { path: 'books', component : BooksComponent},
        { path: 'dairy', component : DairyComponent},
        { path: 'yantras', component : YantrasComponent},
        { path: 'vasthu', component : VasthuComponent},


        { path: 'poojaservices', component : PoojaComponent},
    { path: 'piligrimages', component : PiligrimageComponent},
    { path: 'astroservices', component : AstroComponent},
          
    { path: 'horoscope/horoscope', component : HoroscopeComponent},
    { path: 'astrology', component : AstrologyComponent},
    { path: 'numerology', component : NumerologyComponent},
    { path: 'palmistry', component : PalmistryComponent},
    
    
    
    { path: '', redirectTo : '/', pathMatch : 'full'},
];

export const routing = RouterModule.forRoot(routes);

