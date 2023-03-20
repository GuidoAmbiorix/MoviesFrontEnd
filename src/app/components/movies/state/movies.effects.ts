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
import { catchError, map, mergeMap, of, combineLatest, tap } from 'rxjs';
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
      mergeMap(action =>{
        return combineLatest(([this.moviesServices.GetAllMovies(),this.CategoryService.GetAllCategories()]))
        .pipe(
          map(([movies,categories]) =>{
          movies.map(movie => ({
            ...movie,
            CategoryName: categories.find(c => movie.idCategory === c.id)?.description
          }))
          return GetAllMoviesSuccess({MoviesList:movies})
          }),tap(data => console.log(data))

        )
        // return this.moviesServices.GetAllMovies().pipe(
        //   map(data =>{
        //     // this.store.dispatch(setLoadingSpinner({status:false}));
        //     return GetAllMoviesSuccess({MoviesList:data})
        //   }),
        //   catchError((error) =>{
        //     // this.store.dispatch(setLoadingSpinner({status:false}));
        //     Swal.fire({
        //       icon: 'error',
        //       title: 'Oops...',
        //       text: 'Error loading loading table',
        //     })
        //     return of();
        //   })
        // )
      })
    )
    })

    getAllCategories$ = createEffect(():any =>{
      return this.action$.pipe(
        ofType(GetAllMoviesStart),
        mergeMap(action =>{
          return this.CategoryService.GetAllCategories().pipe(
            map(data =>{
              // this.store.dispatch(setLoadingSpinner({status:false}));
             return GetAllCategoriesSuccess({categoriesList:data})
            }),
            catchError((error) =>{
              // this.store.dispatch(setLoadingSpinner({status:false}));
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



