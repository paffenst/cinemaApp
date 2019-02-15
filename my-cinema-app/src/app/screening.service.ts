import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})

export class ScreeningService {

  screeningsUrl = 'api/allScreenings';


  constructor(private http: HttpClient) { }
}
