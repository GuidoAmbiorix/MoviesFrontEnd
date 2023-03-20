import { MoviesEffects } from './state/movies.effects';
import { MaterialModule } from './../../shared/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { AuthToktenInterceptor } from '../auth/services/authToken.interceptor';

const routes:Routes = [
  {path:'',component:MoviesListComponent}

  ];


@NgModule({
  declarations: [
    MoviesListComponent,
    AddMovieComponent,
    EditMovieComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([MoviesEffects]),
  ],
  providers: [{provide:HTTP_INTERCEPTORS, useClass:AuthToktenInterceptor, multi:true}],
})
export class MoviesModule { }
