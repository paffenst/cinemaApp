import { BuyComponent } from './buy/buy.component';
import { MovieComponent } from './movie/movie.component';
import { DayComponent } from './day/day.component';
import { CinemaComponent } from './cinema/cinema.component';
import { ScreeningsComponent } from './screenings/screenings.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/allMovies', pathMatch: 'full'},
  {path: 'allMovies', component: DashboardComponent},
  {path: 'allScreenings', component: ScreeningsComponent},
  {path: 'cinema/:id', component: CinemaComponent},
  {path: 'day/:year/:month/:day', component: DayComponent},
  {path: 'movie/:title', component: MovieComponent},
  {path: 'buy/:id', component: BuyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
