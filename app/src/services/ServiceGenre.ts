import Api from "../api/gamestock";

export interface GenrerType {
  id: string;
  Name:string
}

export const Genrers = {
  AllGenres: async () => {
    try {
      const res = await Api.get("/generos", { method: "GET" });
      return res;
    } catch (error: any) {
      console.log('Error: '+ error);
    }
  },

  GetGenrerById: async (id: string) => {
    try {
      const res = await Api.get(`/generos/${id}`);
      return res;
    } catch (error: any) {
      console.log(error);
    }
  },

  CreateGenrer: async (genrer: GenrerType) => {
    try {
      const res = await Api.post("/generos", genrer);
      return res;
    } catch (error: any) {
      console.log(error);
    }
  },

  EditGenrer: async (id: string, genrer: GenrerType) => {
    try {
      const res = await Api.patch(`/generos/${id}`, genrer);
      return res;
    } catch (error: any) {
      console.log(error);
    }
  },

  DeleteGenrer: async (id: string) => {
    try {
      const res = await Api.delete(`/generos/${id}`);
      return res;
    } catch (error: any) {
      console.log(error);
    }
  },
};
