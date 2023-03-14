import { getToken } from '../components/auth/state/auth.selector';
import { AppState } from '../store/app.state';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable, exhaustMap, reduce } from 'rxjs';

@Injectable()
export class AuthToktenInterceptor implements HttpInterceptor {

  constructor(private store:Store<AppState>){}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
    ): Observable<HttpEvent<any>> {
      return this.store.select(getToken).pipe(exhaustMap((token) => {

          if(!token){
            return next.handle(req);
          }

          let modifieddRed = req.clone({
            params:req.params.append('auth',token),
          });

            return next.handle(modifieddRed);
         })

      );
  }
}
