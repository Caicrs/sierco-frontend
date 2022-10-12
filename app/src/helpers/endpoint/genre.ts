import api from "api/gamestock";

export const genre = {
    createGenre: () => `${api}/generos`,
    listGenre: () => `${api}/generos`,
    userGenre: (id: string) => `${api}/generos/${id}`,
};