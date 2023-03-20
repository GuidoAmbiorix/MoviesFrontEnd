import { GetMovies, GetCategory } from './../interfaces/get-movies';

export interface MoviesState{
  movies: GetMovies | GetMovies[] | null,
  category:GetCategory | GetCategory[] | null
};


export const initialState:MoviesState = {
movies: null,
category:null
}
