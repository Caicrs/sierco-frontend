import { Game } from "types/api-types/games";

export interface Homepage {
    Profiles: [string];
    games: Game;
  }
  
  
  export interface HomepageResponse {
    Name: string;
    updatedAt?: string;
    createdAt?: string;
  }
  