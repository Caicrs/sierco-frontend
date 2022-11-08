import { LocalStorageKeys } from "types/LocalStorageKeys";

export const LocalStorageHelper = {
  get: <T>(key:LocalStorageKeys):T | null => {
    const item = localStorage.getItem(key)
    return item !== null ? JSON.parse(item) : item
  } ,
  set: <T>(key:LocalStorageKeys,value: T):void => {
    const item = JSON.stringify(value)
    localStorage.setItem(key,item)
  },
  remove: (key:LocalStorageKeys) => localStorage.removeItem(key),
  clear:() => localStorage.clear(),
};
