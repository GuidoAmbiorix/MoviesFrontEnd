import { GetAllMoviesSuccess, GetAllCategoriesStart, GetAllCategoriesSuccess } from './movies.actions';
import { createReducer, on } from '@ngrx/store';
import { initialState } from './movies.state';

const _MoviesReducer = createReducer(initialState,
  on(GetAllMoviesSuccess,(state,action) =>{
    return {
      ...state,
      movies:action.MoviesList
    }
  }),
  on(GetAllCategoriesSuccess,(state,action) =>{
    return {
      ...state,
      category:action.categoriesList
    }
  })
  )

export function MoviesReducer(state:any,action:any){
  return _MoviesReducer(state,action);
}
