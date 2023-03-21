import { CookieService } from 'ngx-cookie-service';
import { getToken } from '../state/auth.selector';
import { AppState } from '../../../shared/store/app.state';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable, exhaustMap, reduce } from 'rxjs';

@Injectable()
export class AuthToktenInterceptor implements HttpInterceptor {

  private cookie_Name = '';
  constructor(private store:Store<AppState>,private CookieService:CookieService){}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
    ): Observable<HttpEvent<any>> {

      return this.store.select(getToken).pipe(exhaustMap((token) => {

          if(!token){
            return next.handle(req);
          }

          let modifieddRed = req.clone({
            setHeaders:{
              Authorization: `Bearer ${token}`
            }
          });

            return next.handle(modifieddRed);
         })

      );
   }
}
