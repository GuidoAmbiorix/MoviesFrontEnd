import { sharedState } from './../state/shared.state';
import { SHARED_STATE_NAME } from './../state/shared.selector';
import { FormState } from '../../components/form-practice/state/form.state';
import { FORM_STATE_NAME } from '../../components/form-practice/state/form.selector';
import { AuthState } from '../../components/auth/state/auth.state';
import { AUTH_STATE_NAME } from '../../components/auth/state/auth.selector';
import { AuthReducer } from '../../components/auth/state/auth.reducer';
import { formReducer } from '../../components/form-practice/state/form.reducer';
import { sharedReducer } from '../state/shared.reducer';


export interface AppState{
  [SHARED_STATE_NAME]:sharedState;
  [AUTH_STATE_NAME]:AuthState;
  [FORM_STATE_NAME]:FormState;
}

export const appReducer = {
  [SHARED_STATE_NAME]:sharedReducer,
  [AUTH_STATE_NAME]:AuthReducer,
  [FORM_STATE_NAME]:formReducer,
}
