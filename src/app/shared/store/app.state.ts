import { MoviesState } from './../../components/movies/state/movies.state';
import { MOVIES_STATE_NAME } from './../../components/movies/state/movies.selector';
import { sharedState } from './../state/shared.state';
import { SHARED_STATE_NAME } from './../state/shared.selector';
import { FormState } from '../../components/form-practice/state/form.state';
import { FORM_STATE_NAME } from '../../components/form-practice/state/form.selector';
import { AuthState } from '../../components/auth/state/auth.state';
import { AUTH_STATE_NAME } from '../../components/auth/state/auth.selector';
import { AuthReducer } from '../../components/auth/state/auth.reducer';
import { formReducer } from '../../components/form-practice/state/form.reducer';
import { sharedReducer } from '../state/shared.reducer';
import { MoviesReducer } from 'src/app/components/movies/state/movies.reducer';


export interface AppState{
  [SHARED_STATE_NAME]:sharedState;
  [AUTH_STATE_NAME]:AuthState;
  [FORM_STATE_NAME]:FormState;
  [MOVIES_STATE_NAME]:MoviesState
}

export const appReducer = {
  [SHARED_STATE_NAME]:sharedReducer,
  [AUTH_STATE_NAME]:AuthReducer,
  [FORM_STATE_NAME]:formReducer,
  [MOVIES_STATE_NAME]:MoviesReducer
}
