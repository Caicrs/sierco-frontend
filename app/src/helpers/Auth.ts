import { LocalStorageKeys } from "types/LocalStorageKeys";
import { LocalStorageHelper } from "./LocalStorageHelper";
import { RoutePath } from "types/routes";

export const Auth = {
    token: (): any => {
        const token = LocalStorageHelper.get(LocalStorageKeys.TOKEN)
        return token
    },
    isAdmin: (): any => {
        const role = LocalStorageHelper.get(LocalStorageKeys.USER)
        return role
    },
    isAuth: (): boolean => {
        const token = LocalStorageHelper.get(LocalStorageKeys.TOKEN)
        const user = LocalStorageHelper.get(LocalStorageKeys.USER)
        return token !== null && user !== null
    },
    logout: (): void => {
        LocalStorageHelper.clear()
        window.location.replace(RoutePath.HOME)
    }
}
