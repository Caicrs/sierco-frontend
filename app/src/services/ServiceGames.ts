import api from "../api/gamestock";

export interface miniListGames {
  id: string;
  Title: string;
}

export interface useGame {
  id?: string;
  Title: string;
  CoverImageUrl: string;
  Description: string;
  Year: number;
  ImdbScore: number;
  TrailerYoutubeUrl: string;
  GameplayYoutubeUrl: string;
}

export const AllGames = {
  GamesAll: async () => {
    try {
      const res = await api.get("/games", { method: "GET" });
      return res;
    } catch (error: any) {
      console.log(error);
    }
  },

  GameById: async (id: any) => {
    try {
      const res = await api.get(`/games/${id}`);
      return res;
    } catch (error: any) {
      console.log(error);
    }
  },

  CreateGame: async (game: useGame) => {
    try {
      const res = await api.post("/games", game);
      return res;
    } catch (error: any) {
      console.log(error);
    }
  },

  EditGame: async (id: string, game: useGame) => {
    try {
      const res = await api.patch(`/games/${id}`, game);
      return res;
    } catch (error: any) {
      console.log(error);
    }
  },

  DeleteGame: async (id: string) => {
    try {
      const res = await api.delete(`/games/${id}`);
      return res;
    } catch (error: any) {
      console.log(error);
    }
  },
};
