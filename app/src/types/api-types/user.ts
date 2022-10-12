export interface User {
    Name: string;
    Password: string;
    confirmPassword: string;
    Email: string;
    Cpf: string;
    IsAdmin: boolean;
  }

  export interface UserProfiles{
    id:string;
    Profiles: string[];
  }

  export interface miniUser{
    id:string;
    Name:string;
  }

  export interface Admin {
    IsAdmin: boolean;
  }

  export interface UserUpdate {
    user: User;
    id: string;
  }
  
  export interface UserResponse {
    id: string;
    Password: string;
    Email: string;
    IsAdmin: boolean;
    updatedAt?: string;
    createdAt?: string;
  }