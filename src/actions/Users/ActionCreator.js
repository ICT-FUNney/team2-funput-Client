import { GET_USERS_REQUEST, GET_USERS_SUCCESS, GET_USERS_FAILED } from "./ActionType";

export const getUsersRequest = () => ({
    type: GET_USERS_REQUEST
})

export const getUsersSuccess = (users) => ({
    type: GET_USERS_SUCCESS,
    users
})

export const getUsersFailed = () => ({
    type: GET_USERS_FAILED
})
