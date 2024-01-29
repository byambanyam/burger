import axios from "axios";
import * as actions from "./signUpActions";

export const loginUser = (email, password) => {
  return function (dispatch) {
    dispatch(loginUserStart());
    const data = {
      email,
      password,
      returnSecureToken: true,
    };
    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBwvcmbng8Hd1wVy-XSwbaXXq-LcnQRBDE",
        data
      )
      .then((result) => {
        // localStorge ruu hadgalnaa
        const token = result.data.idToken;
        const userId = result.data.localId;
        const logoutTime = result.data.expiresIn;
        const expiredate = new Date(new Date().getTime() + logoutTime * 1000);
        const refreshToken = result.data.refreshToken;
        console.log(logoutTime, " => ", expiredate);

        localStorage.setItem("token", token);
        localStorage.setItem("userId", userId);
        localStorage.setItem("expiredate", expiredate);
        localStorage.setItem("refreshToken", refreshToken);
        dispatch(loginUserSuccess(token, userId));
        // dispatch(actions.autologoutAfter(expiredate * 1000));
        dispatch(actions.autologoutAfter(expiredate * 1000));
      })
      .catch((err) => {
        dispatch(loginUserError(err));
      });
  };
};
export const loginUserStart = () => {
  return { type: "LOGIN_USER_START" };
};
export const loginUserSuccess = (token, userId) => {
  return { type: "LOGIN_USER_SUCCESS", token, userId };
};
export const loginUserError = (err) => {
  return { type: "LOGIN_USER_ERROR", err };
};
