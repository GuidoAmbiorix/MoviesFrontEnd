import { GetMovies } from './../interfaces/get-movies';

export interface MoviesState{
  movies: GetMovies | null
};


export const initialState:MoviesState = {
movies: null,
}
