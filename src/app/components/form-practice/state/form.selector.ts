import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FormState } from './form.state';



export const FORM_STATE_NAME = 'form';

const GetFormValues = createFeatureSelector<FormState>(FORM_STATE_NAME);

export const GetFormSelector = createSelector(GetFormValues,(state)=>{
  return state.formsPractice
})
