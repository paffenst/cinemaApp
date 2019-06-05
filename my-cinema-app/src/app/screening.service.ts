import { Screening } from './screening';

import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Injectable, Injector } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScreeningService {

  screeningsUrl = 'api/allScreenings';
  moviesUrl = 'api/allMovies';
  constructor(private http: HttpClient) { }

  /** GET screenings from the server */
  getScreenings(): Observable<Screening[]> {
    console.log('Testtt getScreenings');
    return this.http.get<Screening[]>(this.screeningsUrl);
   /*   .pipe(
        tap( screenings => this.log('screenings called')),
        catchError(this.handleError('getScreenings', []))
      );
*/
  }
   /* GET screnning by id */
   getScreening(id: number): Observable<Screening> {
    const url = '${this.screeningsUrl}/${id}';
    return this.http.get<Screening>(url).pipe(
        catchError(this.handleError<Screening>('getScreening id=${id}'))
      );
  }

  getScreeningForCinema(id: number): Observable<Screening[]> {
    return;
  }

  getScreeningForDate(year: number, month: number, day: number): Observable<Screening[]> {
    return;
  }

  getScreeningWithTitle(title: string): Observable<Screening[]> {
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
