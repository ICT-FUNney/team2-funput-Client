import { GET_WORKS_SUCCESS } from "../../actions/Works/ActionType";

const initialState = {
  works: {}
};

const WorksState = (state = initialState, action) => {
    switch (action.type) {
        case GET_WORKS_SUCCESS:
          return {
            ...state,...action.works
          }
        default:
          return state;
    }
}

export default WorksState
