import api from "api/gamestock";

export const gamesGenres = {
    createGamesGeneros: () => `${api}/games-generos`,
    listGamesGeneros: () => `${api}/games-generos`,
    userGamesGeneros: (id: string) => `${api}/games-generos/${id}`,
};

