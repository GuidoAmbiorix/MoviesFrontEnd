import { RegisterResponse } from './../../../interfaces/register-response';
import { createAction, props } from "@ngrx/store";
import { LoginResponse } from "src/app/interfaces/login-response";


export const loginStart = createAction("[auth page] login start", props<{username:string;password:string}>());

export const loginSuccess = createAction("[auth page] login success",props<{response:LoginResponse}>());

export const registerStart = createAction('[auth page] register start',props<{username:string;email:string;password:string}>());

export const registerSuccess = createAction('[auth page] register success',props<{response:RegisterResponse}>());

export const logoutStart = createAction('[auth page] logout');
