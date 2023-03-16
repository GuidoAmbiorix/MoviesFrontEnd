import { setLoadingSpinner } from './../../../shared/state/shared.actions';
import { Router } from '@angular/router';
import { loginStart, loginSuccess, registerStart, registerSuccess, logoutStart } from './auth.actions';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { exhaustMap, map, of, tap } from 'rxjs';
import { AuthService } from "src/app/components/auth/services/Auth.service";
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/shared/store/app.state';

@Injectable()
export class AuthEffects{
  constructor(
    private action$:Actions,
    private authService:AuthService,
    private router:Router,
    private store:Store<AppState>
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
    });

    Register$ = createEffect(():any =>{
      return this.action$.pipe(
        ofType(registerStart),
        exhaustMap(action => {
          return this.authService.Register(action.username,action.email,action.password).pipe(
            map(data =>{
              this.store.dispatch(setLoadingSpinner({status:false}));
              return registerSuccess({response:data});
            })
          )
        })
      )
    });

    loginRedirect$ = createEffect(() =>{
      return this.action$.pipe(
        ofType(loginSuccess),
        tap((action) =>{
          this.router.navigate(['home'])
        })
      )
    },{dispatch:false}
    );

    registerRedirect$ = createEffect(() => {
      return this.action$.pipe(
        ofType(registerSuccess),
        tap((action) =>{
          this.router.navigate(['auth']);
        })
      )
    },{dispatch:false}
    );

}
