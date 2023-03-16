import { RegisterRequest } from './../../../interfaces/register-request';
import { registerStart } from './../state/auth.actions';
import { AppState } from '../../../shared/store/app.state';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{

  hide = true;

  constructor(private store:Store<AppState>){}

  ngOnInit(): void {}

registerForm = new FormGroup({
  username:new FormControl('',[Validators.required]),
  email:new FormControl('',[Validators.required]),
  password:new FormControl('',[Validators.required])

});

onLoginSubmit(){
 const username:any = this.registerForm!.value!['username'];
 const email:any = this.registerForm!.value!['email'];
 const password:any = this.registerForm!.value!['password'];

 this.store.dispatch(registerStart({username,email,password}));
}

showErrors(formName:string):any{
  const formControlName = this.registerForm.get(formName);
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
