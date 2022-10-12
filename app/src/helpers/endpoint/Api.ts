import { LocalStorageKeys } from "types/LocalStorageKeys";
import { Auth } from 'helpers/Auth';
import { LocalStorageHelper } from "helpers/LocalStorageHelper";
import {AuthService} from "../../services/AuthServices"

type args = [input: RequestInfo, init?: RequestInit | undefined];

function requestInterceptor(config: RequestInit | undefined) {
    if(config){
        const token = {
            Authorization: `Bearer ${LocalStorageHelper.get(LocalStorageKeys.TOKEN)}`,
        };
        
        config.headers = {...config.headers, ...token};
    }
}

function responseInterceptor(res: Response) {
    if (res.status === 401) Auth.logout();
}

export const Api = async (...args: args): Promise<Response> => {
    let [url, config] = args;
    requestInterceptor(config);
    const response = await fetch("https://gamestock-api.herokuapp.com/auth", config);
    responseInterceptor(response);
    return response;
}
