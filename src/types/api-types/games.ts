

export interface Game {
    Title: string;
    CoverImageUrl: string;
    Description: string;
    Year: number;
    ImdbScore: number;
    TrailerYouTubeUrl: string;
    GameplayYouTubeUrl: string;
  }
  
  export interface GameUpdate {
    game: Game;
    id: string;
  }
  
  export interface GameResponse {
    Title: string;
    CoverImageUrl: string;
    Description: string;
    Year: number;
    ImdbScore: number;
    TrailerYouTubeUrl: string;
    GameplayYouTubeUrl: string;
    updatedAt?: string;
    createdAt?: string;
  }
  