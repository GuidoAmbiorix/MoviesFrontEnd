import { formValueChanges } from './form.actions';
import { createReducer, on } from '@ngrx/store';
import { initialState } from './form.state';

const _formReducer = createReducer(
  initialState,
  on(formValueChanges,(state,action) =>{
    return {
      ...state,
      formsPractice: action.response
    }
  })
)

export function formReducer(state:any,action:any){
  return _formReducer(state,action);
}
