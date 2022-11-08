import api from "../api/gamestock";
import { ProfileGames } from "types/api-types/profileGames";

export const AllProfileGames = {
    ProfileGamesAll: async () => {
      try {
        const res = await api.get("/profile-games", { method: "GET" });
        console.log(res)
        return res;
      } catch (error: any) {
        console.log(error);
      }
    },
  
    ProfileGamesById: async (id: string) => {
      try {
        const res = await api.get(`/profile-games/${id}`);
        return res;
      } catch (error: any) {
        console.log(error);
      }
    },
  
    CreateProfileGames: async (profileGames: ProfileGames) => {
      try {
        const res = await api.post("/profile-games", profileGames);
        return res;
      } catch (error: any) {
        console.log(error);
      }
    },
  
    EditProfileGames: async (id: string, profileGames: ProfileGames) => {
      try {
        const res = await api.patch(`/profile-games/${id}`, profileGames);
        return res;
      } catch (error: any) {
        console.log(error);
      }
    },
  
    DeleteProfileGames: async (id: string) => {
      try {
        const res = await api.delete(`/profile-games/${id}`);
        return res;
      } catch (error: any) {
        console.log(error);
      }
    },
  
  };