import { CookieService } from 'ngx-cookie-service';
import { logoutStart } from './../auth/state/auth.actions';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/shared/store/app.state';
import { isAuthenticated } from '../auth/state/auth.selector';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit{
  isAuthenticated!:Observable<boolean>;

  constructor(private store:Store<AppState>,
    private router:Router,
    private CookieService:CookieService
    ){}


  ngOnInit(): void {
    this.isAuthenticated = this.store.select(isAuthenticated);
  }

  onLogout(){
    this.store.dispatch(logoutStart());
    this.CookieService.delete("token")
  }

}
