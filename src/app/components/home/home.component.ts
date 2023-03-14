import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { isAuthenticated } from '../auth/state/auth.selector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isAuthenticated!:Observable<boolean>;

  constructor(private store:Store<AppState>,
    private router:Router
    ){}


  ngOnInit(): void {
    this.isAuthenticated = this.store.select(isAuthenticated)
  }

}
