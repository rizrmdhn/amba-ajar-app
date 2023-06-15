import { configureStore } from "@reduxjs/toolkit";
import authUserReducer from "./authUser/reducer";
import isPreloadReducer from "./isPreload/reducer";
import usersReducer from "./users/reducer";

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    isPreload: isPreloadReducer,
    users: usersReducer,
  },
});

export default store;
