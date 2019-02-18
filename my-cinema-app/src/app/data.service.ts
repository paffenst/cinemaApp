import { Cinema } from './Cinema';
import { Movie } from './Movie';
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }
  createDb() {

    const screenings = [
      { id: 1, Movie: { title: 'PO1' }, Cinema: { id: 1, seats: [10][15] }, Date: '01.02.2019,20:30 Uhr' },
      { id: 5, Movie: { title: 'PO11' }, Cinema: { id: 5, seats: [10][15] }, Date: '11.09.2017,18:00 Uhr' },
      { id: 2, Movie: { title: 'PO2' }, Cinema: { id: 2, seats: [10][15] }, Date: '25.03.2017,18:00 Uhr' },
      { id: 3, Movie: { title: 'PO3' }, Cinema: { id: 3, seats: [10][15] }, Date: '05.01.2017,18:00 Uhr' },
      { id: 4, Movie: { title: 'PO4' }, Cinema: { id: 4, seats: [10][15] }, Date: '25.12.2017,18:00 Uhr' }
    ];

    return { screenings };

  }
}
