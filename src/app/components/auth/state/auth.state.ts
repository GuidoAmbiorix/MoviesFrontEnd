import { RegisterResponse } from './../../../interfaces/register-response';
import { LoginResponse } from './../../../interfaces/login-response';
import { User } from "src/app/interfaces/User";


export interface AuthState{
  user:User | null,
  response:LoginResponse | null,
  registerSucess:RegisterResponse | null
}


export const initialState:AuthState = {
  user:null,
  response:null,
  registerSucess:null
};
