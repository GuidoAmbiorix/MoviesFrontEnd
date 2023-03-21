import { getListCategories } from './movies.selector';
import { GetMovies } from './../interfaces/get-movies';
import { CategoryService } from './../services/category.service';
import { setLoadingSpinner } from './../../../shared/state/shared.actions';
import { ofType } from '@ngrx/effects';
import { createEffect } from '@ngrx/effects';
import { MoviesService } from './../services/movies.service';
import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { Router } from '@angular/router';
import { AppState } from 'src/app/shared/store/app.state';
import { Store } from '@ngrx/store';
import { GetAllCategoriesSuccess, GetAllMoviesStart, GetAllMoviesSuccess } from './movies.actions';
import { catchError, map, mergeMap, of, combineLatest, tap, switchMap, forkJoin, delay } from 'rxjs';
import Swal from 'sweetalert2';


@Injectable()
export class MoviesEffects{
  constructor(
    private action$:Actions,
    private moviesServices:MoviesService,
    private CategoryService:CategoryService,
    private router:Router,
    private store:Store<AppState>
  ){}

  GetListMovies$ = createEffect(():any =>{
    return this.action$.pipe(
      ofType(GetAllMoviesStart),
      delay(2000),
      mergeMap(action =>{
          return this.moviesServices.GetMoviesWithCategories().pipe(
          map(movies =>{
            this.store.dispatch(setLoadingSpinner({status:false}));
          return GetAllMoviesSuccess({MoviesList:movies})
          }),
          catchError((error) =>{
            this.store.dispatch(setLoadingSpinner({status:false}));
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Error loading loading table',
            })
            return of();
          })
        )
      })
    )
    })

    GetListCategories$ = createEffect(():any =>{
      return this.action$.pipe(
        ofType(GetAllMoviesStart),
        mergeMap(action =>{
            return this.CategoryService.GetAllCategories().pipe(
            map(categories =>{
            return GetAllCategoriesSuccess({categoriesList:categories})
            }),tap(data => console.log(data)),
            catchError((error) =>{
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Error loading loading table',
              })
              return of();
            })
          )
        })
      )
      })

}



