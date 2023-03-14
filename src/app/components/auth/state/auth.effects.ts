import { Router } from '@angular/router';
import { loginStart, loginSuccess } from './auth.actions';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { exhaustMap, map } from 'rxjs';
import { AuthService } from "src/app/services/Auth.service";

@Injectable()
export class AuthEffects{
  constructor(
    private action$:Actions,
    private authService:AuthService,
    private router:Router
    ){}


    login$ = createEffect(():any =>{
      return this.action$.pipe(
        ofType(loginStart),
        exhaustMap(action =>{
          return this.authService.login(action.username,action.password).pipe(
            map(data =>{
              return loginSuccess({response:data});
            })
          )
        })
      )
    })

}
