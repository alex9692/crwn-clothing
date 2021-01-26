import * as userActionTypes from "./user.actionTypes";

export const EMAIL_SIGN_IN_START = (emailAndPassword) => ({
  type: userActionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword,
});

export const GOOGLE_SIGN_IN_START = () => ({
  type: userActionTypes.GOOGLE_SIGN_IN_START,
});

export const SIGN_IN_SUCCESS = (user) => ({
  type: userActionTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const SIGN_IN_FAILURE = (error) => ({
  type: userActionTypes.SIGN_IN_FAILURE,
  payload: error,
});

export const CHECK_USER_SESSION_START = () => ({
  type: userActionTypes.CHECK_USER_SESSION_START,
});

export const CHECK_USER_SESSION_END = () => ({
  type: userActionTypes.CHECK_USER_SESSION_END,
});

export const SIGN_OUT_START = () => ({
  type: userActionTypes.SIGN_OUT_START,
});

export const SIGN_OUT_SUCCESS = () => ({
  type: userActionTypes.SIGN_OUT_SUCCESS,
});

export const SIGN_OUT_FAILURE = () => ({
  type: userActionTypes.SIGN_OUT_FAILURE,
});

export const SIGN_UP_START = (data) => ({
  type: userActionTypes.SIGN_UP_START,
  payload: data,
});

export const SIGN_UP_SUCCESS = ({ user, addtionalData }) => ({
  type: userActionTypes.SIGN_UP_SUCCESS,
  payload: { user, addtionalData },
});

export const SIGN_UP_FAILURE = () => ({
  type: userActionTypes.SIGN_UP_FAILURE,
});
