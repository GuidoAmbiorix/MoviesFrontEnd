import { GetMovies, GetCategoryById } from './../interfaces/get-movies';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

   URL:string = "https://localhost:7202/api/Movies/GetAllMovies"
   URLCategories:string = "https://localhost:7202/api/Movies/GetCategoryById"

  constructor(private http:HttpClient) { }

  GetAllMovies():Observable<GetMovies[]>{
    return this.http.get<GetMovies[]>(this.URL);
  }

  GetCategoriesById(id:number):Observable<GetCategoryById>{
    return this.http.get<GetCategoryById>(`https://localhost:7202/api/Category/GetCategoryById?id=${id}`);
  }


}
