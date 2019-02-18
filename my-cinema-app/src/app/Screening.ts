import { Cinema } from './Cinema';
import { Movie } from './Movie';


export class Screening {
  id: number;
  movie: Movie;
  cinema: Cinema;
  date: Date;
}
