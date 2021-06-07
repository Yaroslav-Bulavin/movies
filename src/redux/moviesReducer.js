import {USER_LOGIN, IS_OPEN, POPULAR_MOVIES, INCREMENT} from "./types";

const initialState = {
  open: false,
  login: {
    isLoggedIn: false,
    userID: "",
    name: "",
    email: "",
    picture: "",
  },
  populars: [],
  count: 0,
};

export const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return { ...state, login: { ...state.login, ...action.payload } };
    case IS_OPEN:
      return { ...state, open: action.payload };
    case POPULAR_MOVIES:
      console.log(action.payload)
      return { ...state, populars: [...action.payload] };
    case INCREMENT:
      return { ...state, count: state.count + 1};
    default:
      return state;
  }
};
