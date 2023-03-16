import { isAuthenticated } from './../state/auth.selector';
import { Observable } from 'rxjs';
import { loginStart } from './../state/auth.actions';
import { AppState } from '../../../shared/store/app.state';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { setLoadingSpinner } from 'src/app/shared/state/shared.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide = true;


constructor(private store:Store<AppState>,
  private router:Router
  ){}


ngOnInit(): void {
}

loginForm = new FormGroup({
  username:new FormControl('',[Validators.required]),
  password:new FormControl('',[Validators.required])
});

onLoginSubmit(){
 const username:any = this.loginForm!.value!['username'];
 const password:any = this.loginForm!.value!['password'];
 this.store.dispatch(setLoadingSpinner({status:true}));
 this.store.dispatch(loginStart({username,password}));
}

showErrors(formName:string):any{
  const formControlName = this.loginForm.get(formName);
  if(!formControlName!.valid){
    if(formControlName!.errors!['required']){
      return formName + ' is required'
    }
    // if(formControlName!.errors!['minlength']){
    //  return formName +' should be of minimun '+ formControlName!.errors!['minlength'].requiredLength + ' characters length';
    // }
  }
}

}
