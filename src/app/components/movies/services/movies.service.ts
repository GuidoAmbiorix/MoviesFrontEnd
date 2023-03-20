import { CategoryService } from './category.service';
import { GetMovies } from './../interfaces/get-movies';
import { Observable, combineLatest, map, shareReplay } from 'rxjs';
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

}
