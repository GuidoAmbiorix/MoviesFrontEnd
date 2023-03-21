import { CategoryService } from './category.service';
import { GetMovies } from './../interfaces/get-movies';
import { Observable, combineLatest, map, shareReplay, tap, mergeMap, forkJoin } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

   URL:string = "https://localhost:7202/api/Movies/GetAllMovies"
   URLCategories:string = "https://localhost:7202/api/Movies/GetCategoryById"

  constructor(
     private http:HttpClient,
     private categoryService:CategoryService
     ) { }

  GetAllMovies():Observable<GetMovies[]>{
    return this.http.get<GetMovies[]>(this.URL);
  }

  GetMoviesWithCategories():Observable<GetMovies[]>{
    return combineLatest([this.GetAllMovies(),this.categoryService.GetAllCategories()]).pipe(
      map(([movies,categories]) =>{
        return movies.map(movie =>({
          ...movie,
          categoryName: categories.find(c => c.id === movie.idCategory)?.description
        } as GetMovies)
        )
      }),shareReplay(1)
    )
  }

}
