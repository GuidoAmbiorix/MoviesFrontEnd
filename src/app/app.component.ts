import { sharedState } from './shared/state/shared.state';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { getLoading } from './shared/state/shared.selector';
import { Store } from '@ngrx/store';
import { AppState } from './shared/store/app.state';
import { Router } from '@angular/router';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'MoviesFrontEnd';
  Showloading!:Observable<boolean>;
  color: ThemePalette = 'warn';
  mode: ProgressSpinnerMode = 'indeterminate';
  value = 50;

  constructor(private store:Store<sharedState>,
    private router:Router
    ){}

  ngOnInit(): void {
    this.Showloading = this.store.select(getLoading);
  }

}
