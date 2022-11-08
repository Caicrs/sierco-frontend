import api from "api/gamestock";

export const profile = {
    createProfile: () => `${api}/profile`,
    listProfile: () => `${api}/profile`,
    userProfile: (id: string) => `${api}/profile/${id}`,
};