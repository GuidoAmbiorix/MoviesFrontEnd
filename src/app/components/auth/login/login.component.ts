import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide = true;


constructor(){}


ngOnInit(): void {}

loginForm = new FormGroup({
  email:new FormControl('',[Validators.required]),
  password:new FormControl('',[Validators.required])
});

onLoginSubmit(){
 const email:any = this.loginForm!.value!['email'];
 const password:any = this.loginForm!.value!['password'];
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
