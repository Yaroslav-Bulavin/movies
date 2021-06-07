import {IS_OPEN, USER_LOGIN, POPULAR_MOVIES, INCREMENT} from "./types";

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
export const actionShowPopular = (data) => {
    return {
        type: POPULAR_MOVIES,
        payload: data
    }
}

export const actionIncrement = () => {
    return {
        type: INCREMENT,
    }
}
