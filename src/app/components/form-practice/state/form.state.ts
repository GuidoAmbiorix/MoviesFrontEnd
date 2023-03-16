import { FormsPractice } from './../../../interfaces/forms-practice';


export interface FormState{
  formsPractice:null | FormsPractice
}


export const initialState:FormState = {
  formsPractice:null
}
