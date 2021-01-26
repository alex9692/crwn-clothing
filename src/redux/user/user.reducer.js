import * as userActionTypes from "./user.actionTypes";

const INITIAL_STATE = {
  user: null,
  error: null,
  isLoading: true,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.GOOGLE_SIGN_IN_START:
    case userActionTypes.EMAIL_SIGN_IN_START:
    case userActionTypes.SIGN_OUT_START:
    case userActionTypes.SIGN_UP_START:
      return {
        ...state,
        error: null,
      };
    case userActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isLoading: false,
      };
    case userActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        user: null,
      };
    case userActionTypes.SIGN_IN_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case userActionTypes.SIGN_OUT_FAILURE:
    case userActionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case userActionTypes.CHECK_USER_SESSION_END: {
      return {
        ...state,
        isLoading: false,
      };
    }
    default:
      return state;
  }
};

export default userReducer;
