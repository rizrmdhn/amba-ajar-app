import api from "../../utils/api";
import myToast from "../../components/Toast";

const ActionType = {
  SET_AUTH_USER: "SET_AUTH_USER",
  UNSET_AUTH_USER: "UNSET_AUTH_USER",
};

function setAuthUserActionCreator(authUser) {
  return {
    type: ActionType.SET_AUTH_USER,
    payload: {
      authUser,
    },
  };
}

function unsetAuthUserActionCreator() {
  return {
    type: ActionType.UNSET_AUTH_USER,
  };
}

function asyncSetAuthUser({ email, password }) {
  return async (dispatch) => {
    try {
      const token = await api.login({ email, password });
      console.log("🚀 ~ file: action.js:28 ~ return ~ token:", token);
      api.putAccessToken(token);
      const users = await api.getOwnProfile();

      dispatch(setAuthUserActionCreator(users));

      myToast.fire({
        icon: "success",
        title: "Login success",
      });
    } catch (error) {
      myToast.fire({
        icon: "error",
        title: error.message,
      });
    }
  };
}

function asyncUnsetAuthUser() {
  return (dispatch) => {
    dispatch(unsetAuthUserActionCreator());
    api.putAccessToken("");
  };
}

export {
  ActionType,
  setAuthUserActionCreator,
  unsetAuthUserActionCreator,
  asyncSetAuthUser,
  asyncUnsetAuthUser,
};
