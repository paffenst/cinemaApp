import { Screening } from './Screening';

import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable({ providedIn: 'root' })

export class ScreeningService {

  private screeningsUrl = 'api/allScreenings';

  constructor(private http: HttpClient) { }

  getScreeningForCinema(id: number): Observable<Screening> {
    return;
  }

  getScreeningForDate(year: number, month: number, day: number): Observable<Screening> {

    return;
  }

  getScreeningWithTitle(title: string): Observable<Screening> {
    return;
  }

  getScreening(id: number): Observable<Screening> {
    const url = '${this.screeningsUrl}/${id}';
    return this.http.get<Screening>(url).pipe(
        catchError(this.handleError<Screening>('getScreening id=${id}'))
      );
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
   private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
  private log(screening: string) {
    this.add(`ScreeeningService: ${screening}`);
  }
  private add(s: string) {
  }

}
