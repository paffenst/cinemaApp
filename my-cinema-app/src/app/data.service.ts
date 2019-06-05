import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})

export class DataService implements InMemoryDbService {

  createDb() {
    console.log('Testttt');
    const screenings = [
      { id: 0, name: 'PO1' },
      { id: 1, name: 'PO11' },
      { id: 2, name: 'Aquaman' },
      { id: 3, name: 'P' },
      { id: 4, name: 'PrevengeO4'}
    ];
    return { screenings };
  }
}
