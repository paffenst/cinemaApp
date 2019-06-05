import { Screening } from './../screening';
import { Component, OnInit } from '@angular/core';
import { ScreeningService } from '../screening.service';

@Component({
  selector: 'app-screenings',
  templateUrl: './screenings.component.html',
  styleUrls: ['./screenings.component.css']
})
export class ScreeningsComponent implements OnInit {

  screenings: Screening[] = [];

  constructor(private screeningService: ScreeningService) { }

  ngOnInit() {
    this.getScreenings();
    console.log('Test Screening 1' +  this.screenings);
  }

  getScreenings(): void {
    this.screeningService.getScreenings()
      .subscribe(screenings => this.screenings = screenings);
  }
}
