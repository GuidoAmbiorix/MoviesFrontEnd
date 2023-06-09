import { AuthEffects } from './state/auth.effects';
import { EffectsModule } from '@ngrx/effects';
import { MaterialModule } from './../../shared/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Routes, RouterModule } from '@angular/router';

const routes:Routes = [
  {path:'',children:[
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent}
  ]}
  ];

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([AuthEffects]),
    ReactiveFormsModule,
    MaterialModule,
  ]
})
export class AuthModule { }
