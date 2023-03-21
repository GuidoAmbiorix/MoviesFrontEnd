import { CookieService } from 'ngx-cookie-service';
import { GetAllMoviesStart, GetAllCategoriesStart } from './../state/movies.actions';
import { MoviesState } from './../state/movies.state';
import { GetMovies } from './../interfaces/get-movies';
import { Observable, combineLatest, map, tap } from 'rxjs';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetListMovies, getListCategories } from '../state/movies.selector';
import { getToken } from '../../auth/state/auth.selector';
import { getLoading } from 'src/app/shared/state/shared.selector';
import { setLoadingSpinner } from 'src/app/shared/state/shared.actions';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent {

  Showloading!:Observable<boolean>;

  constructor(private store:Store<MoviesState>){}

  ngOnInit(): void {
  this.store.dispatch(setLoadingSpinner({status:true}));
  this.store.dispatch(GetAllMoviesStart());
  this.Showloading = this.store.select(getLoading).pipe(tap(data => console.log(data)));
  }


  MoviesList$ = this.store.select(GetListMovies);

  displayedColumns: string[] = ['id','description', 'categoryName'];
  dataSource:any =  this.MoviesList$;

}
