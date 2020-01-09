import { GET_CONTENT_REQUEST, GET_CONTENT_SUCCESS, GET_CONTENT_FAILED } from "./ActionType";


export const getContentRequest = (contentPath) =>({
    type: GET_CONTENT_REQUEST,
    contentPath
})

export const getContentSuccess = (content) => ({
    type: GET_CONTENT_SUCCESS,
    content
})

export const getContentFailed = () => ({
    type: GET_CONTENT_FAILED
})
