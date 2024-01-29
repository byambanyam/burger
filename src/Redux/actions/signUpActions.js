import axios from "axios";
import { loginUserSuccess } from "./loginActions";
export const signUpUser = (email, password) => {
  return function (dispatch) {
    dispatch(signUpUserStart());
    const data = {
      email,
      password,
      returnSecureToken: true,
    };
    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBwvcmbng8Hd1wVy-XSwbaXXq-LcnQRBDE",
        data
      )
      .then((result) => {
        const token = result.data.idToken;
        const userId = result.data.localId;
        localStorage.setItem("token", token);
        localStorage.setItem("userId", userId);
        dispatch(signUpUserSuccess(token, userId));
      })
      .catch((err) => {
        dispatch(signUpUserError(err));
      });
  };
};
export const signUpUserStart = () => {
  return { type: "SIGNUP_USER_START" };
};
export const signUpUserSuccess = (token, userId) => {
  return { type: "SIGNUP_USER_SUCCESS", token, userId };
};
export const signUpUserError = (err) => {
  return { type: "SIGNUP_USER_ERROR", err };
};
export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userId");
  localStorage.removeItem("expireDate");
  localStorage.removeItem("refreshToken");
  return {
    type: "LOGOUT",
  };
};
export const autologoutAfter = (ms) => {
  return function (dispatch) {
    // token shinechelh code bicheh
    // axios
    //   .post(
    //     "https://securetoken.googleapis.com/v1/token?key=AIzaSyBwvcmbng8Hd1wVy-XSwbaXXq-LcnQRBDE",
    //     {
    //       grand_type: "refresh_token",
    //       refresh_token: localStorage.getItem("redresh_token"),
    //     }
    //   )
    //   .then((result) => {
    //     const token = result.data.id_token;
    //     const userId = result.data.user_id;
    //     dispatch(loginUserSuccess(token, userId));
    //   })
    //   .catch((err) => {
    //     dispatch(signUpUserError(err));
    //   });
    //securetoken.googleapis.com/v1/token?key=[API_KEY]

    //automat logout
    setTimeout(() => {
      dispatch(logout());
    }, ms);
  };
};
