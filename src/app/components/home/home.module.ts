import { MaterialModule } from './../../shared/material/material.module';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes = [
  {path:'',component:HomeComponent}
  ];


@NgModule({
  declarations: [
    HomeComponent,

  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
  ]
})
export class HomeModule { }

