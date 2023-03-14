import { loginSuccess, registerSuccess, logoutStart } from './auth.actions';
import { initialState } from './auth.state';
import { createReducer, on } from "@ngrx/store";

const _authReducer = createReducer(initialState,
  on(loginSuccess,(state,action) =>{
   return {
    ...state,
    response:action.response
   }
  }),
  on(registerSuccess,(state,action) => {
    return {
      ...state,
      registerSucess:action.response
    }
  }),
  on(logoutStart,(state,action) =>{
    return {
      ...state,
      response: state.response
    }
  })

  )


  export function AuthReducer(state:any,action:any){
    return _authReducer(state,action);
  }
