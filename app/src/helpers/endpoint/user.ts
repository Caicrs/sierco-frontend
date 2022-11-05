import api from "api/gamestock";

export const user = {
    createUser: () => `${api}/user`,
    listUsers: () => `${api}/user`,
    userById: (id: string) => `${api}/user/${id}`,
};