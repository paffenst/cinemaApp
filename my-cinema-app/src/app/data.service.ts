import { Screening } from './Screening';
import { Cinema } from './Cinema';
import { Movie } from './Movie';
import { InMemoryDbService } from 'angular-in-memory-web-api';


export class DataService implements InMemoryDbService {

  createDb() {
    let screenings = [
      { id: 1, Movie: { title: 'PO1' }, Cinema: { id: 1, seats: [10][15] }, Date: '01.02.2019,20:30 Uhr' },
      { id: 0, Movie: { title: 'PO11' }, Cinema: { id: 5, seats: [10][15] }, Date: '11.09.2017,18:00 Uhr' },
      { id: 2, Movie: { title: 'PO2' }, Cinema: { id: 2, seats: [10][15] }, Date: '25.03.2017,18:00 Uhr' },
      { id: 3, Movie: { title: 'PO3' }, Cinema: { id: 3, seats: [10][15] }, Date: '05.01.2017,18:00 Uhr' },
      { id: 4, Movie: { title: 'PO4' }, Cinema: { id: 4, seats: [10][15] }, Date: '25.12.2017,18:00 Uhr' }
    ];

    let cinema1 = [
      { id: 0, movie: 'Mission Impossible', Date: '12.11.2014,19:00 Uhr' },
      { id: 1, movie: 'Revenge', Date: '14.06.2015,18:30 Uhr' },
      { id: 2, movie: 'Black Panther', Date: '15.02.2015,18:00 Uhr' },
      { id: 3, movie: 'Mission Impossible', Date: '03.02.2017,18:00 Uhr' },
      { id: 4, movie: 'Wonder Woman', Date: '03.02.2017,18:00 Uhr' }
    ];
    let cinema2 = [
      { id: 0, movie: 'Wonder Woman', Date: '12.11.2014,20:00 Uhr' },
      { id: 1, movie: 'Black Panther', Date: '14.06.2014,18:45 Uhr' },
      { id: 2, movie: 'Revenge', Date: '14.09.2015,16:00 Uhr' },
      { id: 3, movie: 'The Ritual', Date: '03.10.2017,18:00 Uhr' },
      { id: 4, movie: 'Revenge', Date: '14.06.2015,18:00 Uhr' }
    ];

    return { screenings, cinema1, cinema2 };
  }
}
