export interface Profile {
    Title: string;
    ImageUrl: string;
    UserId:string;
  }

  export interface ProfilesByUser {
    Title: string;
    ImageUrl: string;
    UserId:string;
  }
  
  export interface ProfileUpdate {
    profile: Profile;
    id: string;
  }
  
  export interface ProfileResponse {
    Title: string;
    ImageUrl: string;
    UserId:string;
    updatedAt?: string;
    createdAt?: string;
  }
  