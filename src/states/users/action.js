import myToast from "../../components/Toast";
import api from "../../utils/api";

const ActionType = {
  RECIVE_USERS: "RECIVE_USERS",
};

function receiveUsersActionCreator(users) {
  return {
    type: ActionType.RECIVE_USERS,
    payload: { users },
  };
}

function asyncRegisterUser({ fullname, username, email, password }) {
  return async (dispatch) => {
    try {
      await api.register({ username, email, password, fullname });
    } catch (error) {
      myToast.fire({
        icon: "error",
        title: error.message,
      });
    }
  };
}

export { ActionType, receiveUsersActionCreator, asyncRegisterUser };
