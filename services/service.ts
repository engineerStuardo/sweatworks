import axios from 'axios';
import env from 'react-native-config';

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

export const getPopularMovies = async () => {
  try {
    const {data} = await axiosInstance.get('/popular?language=en-US&page=1');
    console.log('====================================');
    console.log(JSON.stringify(data, null, 4));
    console.log('====================================');
    return data.results as Result[];
  } catch (error) {
    console.log(JSON.stringify(error, null, 4));
  }
};
