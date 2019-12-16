import { GET_FUNNY_REQUEST, GET_FUNNY_SUCCESS, GET_FUNNY_FAILED, SEND_FUNNY_REQUEST, SEND_FUNNY_SUCCESS, SEND_FUNNY_FAILED } from "./ActionType";

export const getFunnyRequest = (data, token) => ({
  type: GET_FUNNY_REQUEST,
  data,
  token
});

export const getFunnySuccess = (data) => ({
  type: GET_FUNNY_SUCCESS,
  data
});

export const getFunnyFailed = () => ({
  type: GET_FUNNY_FAILED,
});

export const sendFunnyRequest = (data, token) => ({
  type: SEND_FUNNY_REQUEST,
  data,
  token
});

export const sendFunnySuccess = () => ({
  type: SEND_FUNNY_SUCCESS
});

export const sendFunnyFailed = () => ({
  type: SEND_FUNNY_FAILED
});
