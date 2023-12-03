import {create} from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createJSONStorage, persist} from 'zustand/middleware';
import {MovieDetail, Result} from '../services/service';

type MovieType = 'popular' | 'nowPlaying' | 'upcoming' | 'topRated';

interface Movies {
  popular: Result[];
  nowPlaying: Result[];
  upcoming: Result[];
  topRated: Result[];
  movieId: number;
  movieDetail: MovieDetail;
  watchList: MovieDetail[];
  setMovies: (movies: Result[], type: MovieType) => void;
  setMovieDetail: (movie: MovieDetail) => void;
  setMovieId: (id: number) => void;
  setWatchList: (movie: MovieDetail) => void;
  removeFromWatchList: (movie: MovieDetail) => void;
}

export const movieDetailInitialData: MovieDetail = {
  adult: false,
  backdrop_path: '',
  belongs_to_collection: '',
  budget: 0,
  genres: [{id: 0, name: ''}],
  homepage: '',
  id: -0,
  imdb_id: '',
  original_language: '',
  original_title: '',
  overview: '',
  popularity: 0,
  poster_path: '',
  production_companies: [{id: 0, logo_path: '', name: '', origin_country: ''}],
  production_countries: [{iso_3166_1: '', name: ''}],
  release_date: '',
  revenue: 0,
  runtime: 0,
  spoken_languages: [{english_name: '', iso_639_1: '', name: ''}],
  status: '',
  tagline: '',
  title: '',
  video: false,
  vote_average: 0,
  vote_count: 0,
};

const useMovies = create(
  persist<Movies>(
    (set, get) => ({
      popular: [],
      nowPlaying: [],
      upcoming: [],
      topRated: [],
      movieDetail: movieDetailInitialData,
      movieId: 0,
      watchList: [],
      setMovies: (movies, type) => {
        switch (type) {
          case 'popular':
            set({popular: movies});
            break;
          case 'nowPlaying':
            set({nowPlaying: movies});
            break;
          case 'upcoming':
            set({upcoming: movies});
            break;
          default:
            set({topRated: movies});
            break;
        }
      },
      setMovieDetail: movie => {
        set({movieDetail: movie});
      },
      setMovieId: movieId => {
        set({movieId});
      },
      setWatchList: movieDetail => {
        set({watchList: [...get().watchList, movieDetail]});
      },
      removeFromWatchList: movieDetail => {
        set({
          watchList: get().watchList.filter(item => item.id !== movieDetail.id),
        });
      },
    }),
    {
      name: 'movies-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);

export default useMovies;
