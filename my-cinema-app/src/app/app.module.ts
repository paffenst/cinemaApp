import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ScreeningsComponent } from './screenings/screenings.component';
import { CinemaComponent } from './cinema/cinema.component';
import { DayComponent } from './day/day.component';
import { MovieComponent } from './movie/movie.component';
import { BuyComponent } from './buy/buy.component';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
