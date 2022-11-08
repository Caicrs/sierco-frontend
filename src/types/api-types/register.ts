import { User } from "./user";
export interface Register {
    Name: string;
    Password: string;
    confirmPassword: string;
    Email: string;
    Cpf: string;
    IsAdmin: boolean;
}

export interface RegisterResponse {
    User: User
}