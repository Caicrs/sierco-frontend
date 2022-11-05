import api from "../api/gamestock";
import { GameGenre } from "types/api-types/gamesGenre";


export const AllGameGenre = {
  GameGenreAll: async () => {
    try {
      const res = await api.get("/games-generos", { method: "GET" });
      console.log(res)
      return res;
    } catch (error: any) {
      console.log(error);
    }
  },

  GameGenreById: async (id: string) => {
    try {
      const res = await api.get(`/games-generos/${id}`);
      return res;
    } catch (error: any) {
      console.log(error);
    }
  },

  CreateGameGenre: async (gameGenre: GameGenre) => {
    try {
      const res = await api.post("/games-generos", gameGenre);
      return res;
    } catch (error: any) {
      console.log(error);
    }
  },

  EditGameGenre: async (id: string, gameGenre: GameGenre) => {
    try {
      const res = await api.patch(`/games-generos/${id}`, gameGenre);
      return res;
    } catch (error: any) {
      console.log(error);
    }
  },

  DeleteGameGenre: async (id: string) => {
    try {
      const res = await api.delete(`/games-generos/${id}`);
      return res;
    } catch (error: any) {
      console.log(error);
    }
  },

};
