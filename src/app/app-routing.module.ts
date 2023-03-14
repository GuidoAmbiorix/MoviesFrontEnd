import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {path:'auth',loadChildren:() => import('./components/auth/auth.module').then(a => a.AuthModule)},
  {path:'home',loadChildren:() => import('./components/home/home.module').then(a => a.HomeModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
