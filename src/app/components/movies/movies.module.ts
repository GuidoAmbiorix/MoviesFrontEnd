import { MaterialModule } from './../../shared/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    MoviesListComponent,
    AddMovieComponent,
    EditMovieComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule
  ]
})
export class MoviesModule { }
