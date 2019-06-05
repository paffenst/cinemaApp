import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ScreeningsComponent } from './screenings/screenings.component';
import { CinemaComponent } from './cinema/cinema.component';
import { DayComponent } from './day/day.component';
import { MovieComponent } from './movie/movie.component';
import { BuyComponent } from './buy/buy.component';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './data.service';

import { ScreeningService } from './screening.service';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ScreeningsComponent,
    CinemaComponent,
    DayComponent,
    MovieComponent,
    BuyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(DataService, { dataEncapsulation: false })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
