import { GET_CONTENT_REQUEST, GET_CONTENT_SUCCESS, GET_CONTENT_FAILED, POST_CONTENT, RESET_CONTENT, SET_URL_CONTENT } from "./ActionType";


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

export const postContent = (file) => ({
    type: POST_CONTENT,
    file
})

export const setUrlContent = (url) => ({
    type: SET_URL_CONTENT,
    url
})

export const resetContent = () => ({
    type: RESET_CONTENT
})
