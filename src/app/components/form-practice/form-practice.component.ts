import { AppState } from 'src/app/store/app.state';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { formValueChanges } from './state/form.actions';
import { FormsPractice } from 'src/app/interfaces/forms-practice';

@Component({
  selector: 'app-form-practice',
  templateUrl: './form-practice.component.html',
  styleUrls: ['./form-practice.component.scss']
})
export class FormPracticeComponent implements OnInit {

  hide = true;


constructor(private store:Store<AppState>){}


practiceForm = new FormGroup({
  cedula:new FormControl('',[Validators.required]),
  nombre:new FormControl('',[Validators.required]),
  apellido:new FormControl('',[Validators.required]),
  edad:new FormControl('',[Validators.required])
});


ngOnInit(): void {
  this.practiceForm.valueChanges.subscribe((data) => {
   this.store.dispatch(formValueChanges({response:data as any}))
  })
}

onLoginSubmit(){

}

showErrors(formName:string):any{
  const formControlName = this.practiceForm.get(formName);
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
