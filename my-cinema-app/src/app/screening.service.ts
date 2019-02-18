import { Screening } from './Screening';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })

export class ScreeningService {

  screeningsUrl = 'api/allScreenings';

  constructor(private http: HttpClient) {

  }

  getScreening(id: number): Observable<Screening> {

    return;
  }

  /*
    getScreenings(): Observable<Screening[]> {
      return this.http.get<Screening[]>(this.screeningsUrl).pipe(map(screenings) ==> screenings.map(s ==> {
          s.date = new Date(s.date);
          return s;
        }));
        return false;
    }
    */
}
