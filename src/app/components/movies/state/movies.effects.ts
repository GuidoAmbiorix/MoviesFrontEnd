import { setLoadingSpinner } from './../../../shared/state/shared.actions';
import { ofType } from '@ngrx/effects';
import { createEffect } from '@ngrx/effects';
import { MoviesService } from './../services/movies.service';
import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { Router } from '@angular/router';
import { AppState } from 'src/app/shared/store/app.state';
import { Store } from '@ngrx/store';
import { GetAllMoviesStart, GetAllMoviesSuccess } from './movies.actions';
import { catchError, map, mergeMap, of } from 'rxjs';
import Swal from 'sweetalert2';


@Injectable()
export class MoviesEffects{
  constructor(
    private action$:Actions,
    private moviesServices:MoviesService,
    private router:Router,
    private store:Store<AppState>
  ){}

  GetListMovies$ = createEffect(():any =>{
    return this.action$.pipe(
      ofType(GetAllMoviesStart),
      mergeMap(action =>{
        return this.moviesServices.GetAllMovies().pipe(
          map(data =>{
            data.map(x => {this.moviesServices.GetCategoriesById(x.idCategory).subscribe(data => x.CategoryName == data.description)});
            // this.store.dispatch(setLoadingSpinner({status:false}));
            return GetAllMoviesSuccess({MoviesList:data})
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



