import axios from 'axios';
import env from 'react-native-config';
import {getFirstTrailerKey, getSixMovies} from '../utils/FilterMovies';

const baseURL = env.TMDB_HOST;
const apiAccessToken = env.ACCESS_TOKEN;

const axiosInstance = axios.create({
  baseURL,
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${apiAccessToken}`,
  },
});

export interface Result {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface MovieResponse {
  results: Result[];
}

export interface MovieDetail {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: any;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface Genre {
  id: number;
  name: string;
}

export interface ProductionCompany {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface Trailer {
  id: number;
  results: TrailerResult[];
}

export interface TrailerResult {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
}

export const getPopularMovies = async () => {
  try {
    const {data} = await axiosInstance.get<MovieResponse>(
      '/movie/popular?language=en-US&page=1',
    );
    return data.results;
  } catch (error) {
    console.log(JSON.stringify(error, null, 4));
  }
};

export const getNowPlayingMovies = async () => {
  try {
    const {data} = await axiosInstance.get<MovieResponse>(
      '/movie/now_playing?language=en-US&page=1',
    );
    return getSixMovies(data.results);
  } catch (error) {
    console.log(JSON.stringify(error, null, 4));
  }
};

export const getUpcomingMovies = async () => {
  try {
    const {data} = await axiosInstance.get<MovieResponse>(
      '/movie/upcoming?language=en-US&page=1',
    );
    return getSixMovies(data.results);
  } catch (error) {
    console.log(JSON.stringify(error, null, 4));
  }
};

export const getTopRatedMovies = async () => {
  try {
    const {data} = await axiosInstance.get<MovieResponse>(
      '/movie/top_rated?language=en-US&page=1',
    );
    return getSixMovies(data.results);
  } catch (error) {
    console.log(JSON.stringify(error, null, 4));
  }
};

export const getMovieDetail = async (movieId: number) => {
  try {
    const {data} = await axiosInstance.get<MovieDetail>(
      `/movie/${movieId}?language=en-US`,
    );
    return data;
  } catch (error) {
    console.log(JSON.stringify(error, null, 4));
  }
};

export const getMovieTrailerKey = async (movieId: number) => {
  try {
    const {data} = await axiosInstance.get<Trailer>(
      `/movie/${movieId}/videos?language=en-US`,
    );
    return getFirstTrailerKey(data);
  } catch (error) {
    console.log(JSON.stringify(error, null, 4));
  }
};

export const getMoviesByTitle = async (
  title: string,
  callback?: (results: Result[]) => void,
) => {
  try {
    const {data} = await axiosInstance.get<MovieResponse>(
      `/search/movie?query=${title}&language=en-US&page=1`,
    );
    if (callback) {
      callback(data.results);
    }
  } catch (error) {
    console.log(JSON.stringify(error, null, 4));
  }
};
