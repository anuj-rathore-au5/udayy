import { createStore } from "redux";

const initailState = {
  users: [
    {
      userName: "guest",
      password: "guest",
    },
    {
      userName: "anuj",
      password: "anuj",
    },
  ],
  iframeOne: "https://airlearn.ai",
  iframeTwo: "https://www.extramarks.com/",
  isLoggedIn: false,
};

const rootReducer = (state = initailState, action) => {
  const stateCopy = { ...state };
  switch (action.type) {
    case "ADD_IFRAME_ONE_VALUE":
      stateCopy.iframeOne = action.payload;

      return stateCopy;

    case "ADD_IFRAME_TWO_VALUE":
      stateCopy.iframeTwo = action.payload;
      return stateCopy;

    case "USER_LOGGED_IN":
      stateCopy.isLoggedIn = action.payload;

    default:
      return stateCopy;
  }
};

const store = createStore(rootReducer);

export default store;
