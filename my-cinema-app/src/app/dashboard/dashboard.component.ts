import { ScreeningService } from './../screening.service';
import { Component, OnInit } from '@angular/core';
import { Screening } from '../screening';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  screenings: Screening[] = []; constructor(private screeningService: ScreeningService) { }

  ngOnInit() {
    this.screeningService.getScreenings().subscribe((data: any[]) => {
      console.log('TEEE' + data);
      this.screenings = data;
    });
   // this.getScreenings();
  }
  getScreenings(): void {
    this.screeningService.getScreenings()
      .subscribe(screenings => this.screenings = screenings);
  }
}
