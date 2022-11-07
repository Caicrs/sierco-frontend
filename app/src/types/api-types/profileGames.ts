export interface ProfileGames {
    Profile: string;
    Games: string;
  }
  
export interface ProfileGamesUpdate {
    gamesGeneros: ProfileGames;
    id: string;
  }
  
  export interface ProfileGamesResponse {
    ProfileId: string;
    GameId: string;
    updatedAt?: string;
    createdAt?: string;
  }