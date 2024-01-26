const initialState = {
  saving: false,
  LogginIn: false,
  fireBaseError: null,
  token: null,
  userId: null,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGNUP_USER_START":
      return {
        ...state,
        saving: true,
      };
    case "SIGNUP_USER_ERROR":
      return {
        ...state,
        saving: false,
        fireBaseError: action.err.response.data.error.message,
      };
    case "SIGNUP_USER_SUCCESS":
      return {
        ...state,
        saving: false,
        token: action.token,
        userId: action.userId,
      };
    case "LOGIN_USER_START":
      return {
        ...state,
        LogginIn: true,
      };
    case "LOGIN_USER_ERROR":
      return {
        ...state,
        LogginIn: false,
        fireBaseError: action.err.response.data.error.message,
      };
    case "LOGIN_USER_SUCCESS":
      return {
        ...state,
        LogginIn: false,
        token: action.token,
        userId: action.userId,
      };
    case "LOGOUT":
      return {
        ...state,

        token: null,
        userId: null,
        fireBaseError: null,
      };

    default:
      return state;
  }
};
export default reducer;
