import { LoginResponse } from './../../../interfaces/login-response';
import { User } from "src/app/interfaces/User";


export interface AuthState{
  user:User | null,
  response:LoginResponse | null
}


export const initialState:AuthState = {
  user:null,
  response:null
};
