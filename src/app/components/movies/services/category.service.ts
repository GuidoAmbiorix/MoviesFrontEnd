import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetCategory } from '../interfaces/get-movies';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  URLCategories:string = "https://localhost:7202/api/Movies/GetCategoryById"

 constructor(private http:HttpClient) { }

 GetAllCategories():Observable<GetCategory[]>{
  return this.http.get<GetCategory[]>(`https://localhost:7202/api/Category/GetAllCategories`);

 }

 GetCategoriesById(id:number):Observable<GetCategory>{
   return this.http.get<GetCategory>(`https://localhost:7202/api/Category/GetCategoryById?id=${id}`);
 }
}
