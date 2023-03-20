import { MoviesState } from './movies.state';
import { GetMovies } from './../interfaces/get-movies';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const MOVIES_STATE_NAME = "movies";

const getMovieState = createFeatureSelector<MoviesState>(MOVIES_STATE_NAME);

export const GetListMovies = createSelector(getMovieState,(state) =>{
return state.movies as GetMovies[]
});
