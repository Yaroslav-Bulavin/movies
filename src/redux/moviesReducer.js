import { USER_LOGIN, IS_OPEN } from "./types";

const initialState = {
  open: false,
  login: {
    isLoggedIn: false,
    userID: "",
    name: "",
    email: "",
    picture: "",
  },
};

export const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return { ...state, login: { ...state.login, ...action.payload } };
    case IS_OPEN:
      return { ...state, open: action.payload };
    default:
      return state;
  }
};
