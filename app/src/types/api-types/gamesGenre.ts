export interface GameGenre {
    GenreId: string;
    GameId: string;
  }
  
  export interface GameGenreUpdate {
    gameGenero: GameGenre;
    id: string;
  }
  
  export interface GameGenreResponse {
    GenreId: string;
    GameId: string;
    updatedAt?: string;
    createdAt?: string;
  }
  