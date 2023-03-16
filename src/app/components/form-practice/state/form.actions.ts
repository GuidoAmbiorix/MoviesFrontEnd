import { FormsPractice } from 'src/app/interfaces/forms-practice';
import { FormState } from './form.state';
import { createAction, props } from '@ngrx/store';

export const formValueChanges  = createAction('[form] value change',props<{response: FormsPractice}>())
