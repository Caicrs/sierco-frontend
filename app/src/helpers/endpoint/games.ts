import api from "api/gamestock";

export const games = {
    createGames: () => `${api}/games`,
    listGames: () => `${api}/games`,
    userGames: (id: string) => `${api}/games/${id}`,
};