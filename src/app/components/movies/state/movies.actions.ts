import { FiltersMovie } from './../interfaces/FiltersMovie';
import { GetMovies, GetCategory } from './../interfaces/get-movies';
import { props } from '@ngrx/store';
import { createAction } from '@ngrx/store';

export const GetAllMoviesStart = createAction('[movies page] get all movies start ');
export const GetAllMoviesSuccess = createAction('[movies page] get all movies  success',props<{MoviesList: GetMovies[]}>());

export const GetAllCategoriesStart = createAction('[movies page] get all categories start ');
export const GetAllCategoriesSuccess = createAction('[movies page] get all categories success',props<{categoriesList: GetCategory[]}>());

export const FiltersMoviesStart = createAction('[movie page] filter start', props<{filters:FiltersMovie}>());
export const FiltersMoviesSuccess = createAction('[movie page] filter success', props<{ListMovies:GetMovies[]}>())

