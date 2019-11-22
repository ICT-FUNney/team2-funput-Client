import { GET_WORKS_REQUEST, GET_WORKS_SUCCESS, GET_WORKS_FAILED, POST_WORKS_REQUEST, POST_WORKS_SUCCESS, POST_WORKS_FAILED, POST_WORKS_DATA_REQUEST, POST_WORKS_DATA_SUCCESS, POST_WORKS_DATA_FAILED } from "./ActionType";

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

export const postWorksDataRequest = (worksData) => ({
    type: POST_WORKS_DATA_REQUEST,
    worksData: worksData
})

export const postWorksDataSuccess = (worksData) => ({
    type: POST_WORKS_DATA_SUCCESS,
    worksData
})

export const postWorksDataFailed = () => ({
    type: POST_WORKS_DATA_FAILED
})
