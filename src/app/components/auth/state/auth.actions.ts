import { createAction, props } from "@ngrx/store";
import { LoginResponse } from "src/app/interfaces/login-response";

export const loginStart = createAction("[auth page] login start", props<{username:string;password:string}>());
export const loginSuccess = createAction("[auth page] login success",props<{response:LoginResponse}>())
