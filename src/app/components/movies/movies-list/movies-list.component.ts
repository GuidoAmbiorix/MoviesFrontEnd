import { GetAllMoviesStart } from './../state/movies.actions';
import { MoviesState } from './../state/movies.state';
import { GetMovies } from './../interfaces/get-movies';
import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetListMovies } from '../state/movies.selector';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent {

  constructor(private store:Store<MoviesState>){}

  ngOnInit(): void {
  this.store.dispatch(GetAllMoviesStart())
  }

  MoviesList$ = this.store.select(GetListMovies);

  displayedColumns: string[] = ['description', 'categoryName'];
  dataSource:any =  this.MoviesList$;

}
