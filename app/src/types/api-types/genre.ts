

export interface Genre {
    Name: string;
  }
  
  export interface GenreUpdate {
    Genre: Genre;
    id: string;
  }
  
  export interface GenreResponse {
    Name: string;
    updatedAt?: string;
    createdAt?: string;
  }
  