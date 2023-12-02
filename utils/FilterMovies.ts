import {Result} from '../services/service';

export const getSixMovies = (movies: Result[]) => {
  return movies.filter((movie: Result, index: number) => index < 6);
};
