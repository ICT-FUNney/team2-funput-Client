import { GET_WORKS_SUCCESS, POST_WORKS_SUCCESS, POST_WORKS_DATA_SUCCESS } from "../../actions/Works/ActionType";

const initialState = {};


const WorksState = (state = initialState, action) => {
  switch (action.type) {
    case GET_WORKS_SUCCESS:
      return {
        ...action.works
      }
    case POST_WORKS_SUCCESS:
      return {
        ...action.works
      }
    case POST_WORKS_DATA_SUCCESS:
      return {
        ...action.worksData
      }
    default:
      return state;
  }
}

export default WorksState
