import api from "api/gamestock";

export const profileGames = {
    createProfileGames: () => `${api}/profile-games`,
    listProfileGames: () => `${api}/profile-games`,
    userProfileGames: (id: string) => `${api}/profile-games/${id}`,
};




