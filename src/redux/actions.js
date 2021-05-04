import {IS_OPEN, USER_LOGIN} from "./types";

export const actionLoggedIn = (login) => {
    return {
        type: USER_LOGIN,
        payload: login
    }
}
export const actionIsOpen = (open) => {
    return {
        type: IS_OPEN,
        payload: open
    }
}