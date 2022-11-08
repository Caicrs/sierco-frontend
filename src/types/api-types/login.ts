import { User } from "./user";

export interface Login {
  Email: string;
  Password: string;
}

export interface LoginResponse {
  token: string;
  user: User;
}