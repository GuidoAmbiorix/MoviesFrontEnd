import { AuthState } from './../components/auth/state/auth.state';
import { AUTH_STATE_NAME } from './../components/auth/state/auth.selector';
import { AuthReducer } from '../components/auth/state/auth.reducer';


export interface AppState{
  [AUTH_STATE_NAME]:AuthState
}

export const appReducer = {
  [AUTH_STATE_NAME]:AuthReducer
}
