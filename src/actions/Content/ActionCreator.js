import { GET_CONTENT_REQUEST, GET_CONTENT_SUCCESS, GET_CONTENT_FAILED } from "./ActionType";


export const getContentRequest = (contentPath) => (console.log(contentPath),{
    type: GET_CONTENT_REQUEST,
    contentPath
})

export const getContentSuccess = (content) => (
  console.log("dispatch:getContentSuccess"),
  {
    type: GET_CONTENT_SUCCESS,
    content
})

export const getContentFailed = () => ({
    type: GET_CONTENT_FAILED
})
