import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { canActivate, canMatch } from './components/auth/services/auth.guard';

const routes: Routes = [
  {path:'',redirectTo:'auth/login',pathMatch:'full'},
  // {path:'**',redirectTo:'auth/login',pathMatch:'full'},
  {path:'auth',loadChildren:() => import('./components/auth/auth.module').then(a => a.AuthModule)},
  {path:'home',loadChildren:() => import('./components/home/home.module').then(a => a.HomeModule),canMatch:[canMatch]},
  {path:'forms',loadChildren:() => import('./components/form-practice/form-practice.module').then(a => a.FormPracticeModule),canMatch:[canMatch]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
