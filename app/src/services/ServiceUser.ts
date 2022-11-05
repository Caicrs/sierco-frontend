import api from "../api/gamestock";
import { User } from "types/api-types/user";

export const AllUsers = {
  UsersAll: async () => {
    try {
      const res = await api.get("/user", { method: "GET" });
      return res;
    } catch (error: any) {
      console.log(error);
    }
  },

  UserById: async (id: string) => {
    try {
      const res = await api.get(`/user/${id}`);
      return res;
    } catch (error: any) {
      console.log(error);
    }
  },

  CreateUser: async (user: User) => {
    try {
      const res = await api.post("/user", user);
      return res;
    } catch (error: any) {
      console.log(error);
    }
  },

  EditProfile: async (id: string, user: User) => {
    try {
      const res = await api.patch(`/user/${id}`, user);
      return res;
    } catch (error: any) {
      console.log(error);
    }
  },

  DeleteProfile: async (id: string) => {
    try {
      const res = await api.delete(`/user/${id}`);
      return res;
    } catch (error: any) {
      console.log(error);
    }
  },
};
