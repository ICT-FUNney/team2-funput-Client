import { GET_WORKS_REQUEST, GET_WORKS_SUCCESS, GET_WORKS_FAILED, POST_WORKS_REQUEST, POST_WORKS_SUCCESS, POST_WORKS_FAILED } from "./ActionType";

export const getWorksRequest = () => ({
    type: GET_WORKS_REQUEST
})

export const getWorksSuccess = (works) => ({
    type: GET_WORKS_SUCCESS,
    works
})

export const getWorksFailed = () => ({
    type: GET_WORKS_FAILED
})



export const postWorksRequest = () => ({
    type: POST_WORKS_REQUEST
})

export const postWorksSuccess = (works) => ({
    type: POST_WORKS_SUCCESS,
    works
})

export const postWorksFailed = () => ({
    type: POST_WORKS_FAILED
})
