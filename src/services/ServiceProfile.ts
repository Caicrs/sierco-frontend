import api from "../api/gamestock";
import { Profile } from "types/api-types/profile";

export interface useProfile {
    id: string,
    Title: string,
    ImageUrl: string,
}

export const AllProfile = {
  ProfileAll: async () => {
    try {
      const res = await api.get("/profile", { method: "GET" });
      return res;
    } catch (error: any) {
      console.log(error);
    }
  },

  ProfilesByUser: async (id: string) => {
    try {
      const res = await api.get(`/homepage/${id}`, { method: "GET" });
      return res;
    } catch (error: any) {
      console.log(error);
    }
  },

  ProfileById: async (id: string) => {
    try {
      const res = await api.get(`/profile/${id}`);
      return res;
    } catch (error: any) {
      console.log(error);
    }
  },

  CreateProfile: async (profile: Profile) => {
    try {
      const res = await api.post("/profile", profile);
      return res;
    } catch (error: any) {
      console.log(error);
    }
  },

  EditProfile: async (id: string, profile: Profile) => {
    try {
      const res = await api.patch(`/profile/${id}`, profile);
      return res;
    } catch (error: any) {
      console.log(error);
    }
  },

  DeleteProfile: async (id: string) => {
    try {
      const res = await api.delete(`/profile/${id}`);
      return res;
    } catch (error: any) {
      console.log(error);
    }
  },
};
