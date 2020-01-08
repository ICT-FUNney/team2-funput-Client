import { GET_CONTENT_SUCCESS } from "../../actions/Content/ActionType";

const initialState = {};


const ContentState = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTENT_SUCCESS:
      return {
        ...action.content
      }
    default:
      return state;
  }
}

export default ContentState
