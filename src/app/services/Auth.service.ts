import { LoginResponse } from './../interfaces/login-response';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  URL = "https://localhost:7202/api/Authentication/login";

  constructor(private http:HttpClient) { }

    login(userName:string, password:string):Observable<LoginResponse>{
      return this.http.post<LoginResponse>(`https://localhost:7202/api/Authentication/login`,{userName,password,returnSecureToken:true});
    }

    // getErrorMessage(message:string){
    //   switch(message){
    //     case 'EMAIL_NOT_FOUND': return 'Email Not Found';
    //     case 'INVALID_PASSWORD': return 'Invalid Password';
    //     case 'EMAIL_EXISTS': return 'Email already exists';
    //     default: return 'Unknown error occurred. Please try again';
    //   }
    // }

}

