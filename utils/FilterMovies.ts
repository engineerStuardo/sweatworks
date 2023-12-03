import {MovieDetail, Result, Trailer, TrailerResult} from '../services/service';

export const getSixMovies = (movies: Result[]) => {
  return movies.filter((movie: Result, index: number) => index < 6);
};

export const getFirstTrailerKey = (trailers: Trailer) => {
  return trailers.results.filter(
    (item: TrailerResult) => item.type.toLowerCase() === 'trailer',
  )[0].key;
};

export const isAddedToWatchList = (
  movie: MovieDetail,
  watchList: MovieDetail[],
) => {
  return !!watchList.filter(item => item.id === +movie.id).length;
};
