import {games} from "./games"
import {user}from "./user"
import {genre} from "./genre"
import {profile} from "./profile"
import {homepage} from "./homepage"
import {gamesGenres} from "./gamesGenres"
import {profileGames} from "./profileGames"
import { auth } from "./auth"


export const endpoint = {
    ...auth,
    ...games,
    ...user,
    ...genre,
    ...profile,
    ...homepage,
    ...gamesGenres,
    ...profileGames
};