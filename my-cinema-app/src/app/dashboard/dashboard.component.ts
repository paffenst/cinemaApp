import { ScreeningService } from './../screening.service';
import { Component, OnInit } from '@angular/core';
import { Screening } from '../Screening';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  screenings: Screening[];

  constructor(private screeningService: ScreeningService) { }

  ngOnInit() {
    this.getScreenings();
    console.log('Test Screening ' +  this.screenings);
  }

  getScreenings(): void {
    this.screeningService.getScreenings()
      .subscribe(screenings => this.screenings = screenings);
  }
}
