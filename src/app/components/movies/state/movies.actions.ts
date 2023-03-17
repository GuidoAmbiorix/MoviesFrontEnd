import { GetMovies } from './../interfaces/get-movies';
import { props } from '@ngrx/store';
import { createAction } from '@ngrx/store';

export const GetAllMoviesStart = createAction('[movies page] get all movies start ');
export const GetAllMoviesSuccess = createAction('[movies page] get all movies start success',props<{MoviesList: GetMovies[]}>());
