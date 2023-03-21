import { getToken } from './../auth/state/auth.selector';
import { CookieService } from 'ngx-cookie-service';
import { getLoading } from './../../shared/state/shared.selector';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, exhaustMap, map, tap } from 'rxjs';
import { AppState } from 'src/app/shared/store/app.state';
import { isAuthenticated } from '../auth/state/auth.selector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isAuthenticated!:Observable<boolean>;

  constructor(private store:Store<AppState>,
    private router:Router,
    private CookieService:CookieService

    ){}


  ngOnInit(): void {
    this.isAuthenticated = this.store.select(isAuthenticated);
    this.store.select(getLoading).subscribe(data => console.log(data));
    // this.store.select(getToken).pipe(map(token =>{
    // // this.CookieService.set("token",token as string)
    // }),tap(data => console.log(data)))
  }

}
