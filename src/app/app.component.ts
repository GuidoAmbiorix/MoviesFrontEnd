import { sharedState } from './shared/state/shared.state';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { getLoading } from './shared/state/shared.selector';
import { Store } from '@ngrx/store';
import { AppState } from './shared/store/app.state';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'MoviesFrontEnd';
  Showloading!:Observable<boolean>;

  SpinnerStyles = {
    'display': 'flex',
  'justify-content': 'center',
  'align-items': 'center',
  'height': '100%',
  'widht':'100%'
    };

  constructor(private store:Store<sharedState>,
    private router:Router
    ){}

  ngOnInit(): void {
    this.Showloading = this.store.select(getLoading);
  }

}
