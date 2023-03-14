import { loginSuccess } from './auth.actions';
import { initialState } from './auth.state';
import { createReducer, on } from "@ngrx/store";

const _authReducer = createReducer(initialState,
  on(loginSuccess,(state,action) =>{
   return {
    ...state,
    response:action.response
   }
  }))


  export function AuthReducer(state:any,action:any){
    return _authReducer(state,action);
  }
