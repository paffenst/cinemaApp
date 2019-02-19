import { Cinema } from './Cinema';
import { Movie } from './Movie';


export interface Screening {
  id: number;
  movie: Movie;
  cinema: Cinema;
  date: Date;
}
