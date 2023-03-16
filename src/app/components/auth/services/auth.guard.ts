import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivateFn, CanActivateChildFn, CanDeactivateFn, CanMatchFn, Route, UrlSegment } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { AppState } from '../../../shared/store/app.state';
import { isAuthenticated } from '../state/auth.selector';


export const canActivate: CanActivateFn = (
  route:ActivatedRouteSnapshot,
  state:RouterStateSnapshot
) =>{

  const store = inject(Store);
  const router = inject(Router);

return store.select(isAuthenticated).pipe(
  map((authenticate) => {
    if(!authenticate){
      return router.createUrlTree(['auth']);
    }
    return true;
  })
)
}

export const canMatch: CanMatchFn = (
  route:Route,
  segments:UrlSegment[]
) =>{

  const store = inject(Store);
  const router = inject(Router);

return store.select(isAuthenticated).pipe(
  map((authenticate) => {
    if(!authenticate){
      return router.createUrlTree(['auth']);
    }
    return true;
  })
)
}




