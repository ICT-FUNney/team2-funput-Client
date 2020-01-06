import { SIGN_IN_REQUEST, SIGN_IN_SUCCESS, SIGN_IN_FAILED, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILED, UPDATE_TOKEN, SNACKBAR_OPEN, SNACKBAR_CLOSE, SIGN_OUT } from "./ActionType"

export const signInRequest = (data) => ({
  type: SIGN_IN_REQUEST,
  data
});

export const signInSuccess = (data, token) => ({
  type: SIGN_IN_SUCCESS,
  data,
  token
});

export const signInFailed = () => ({
  type: SIGN_IN_FAILED
})

export const signUpRequest = (data) => ({
  type: SIGN_UP_REQUEST,
  data
});

export const signUpSuccess = (data, token) => ({
  type: SIGN_UP_SUCCESS,
  data,
  token
});

export const signUpFailed = () => ({
  type: SIGN_UP_FAILED
});

export const updateToken = (token) => ({
  type: UPDATE_TOKEN,
  token
});

export const snackbarOpen = () => ({
  type: SNACKBAR_OPEN,
});

export const snackbarClose = () => ({
  type: SNACKBAR_CLOSE,
});

export const signOut = () => ({
  type: SIGN_OUT,
});
