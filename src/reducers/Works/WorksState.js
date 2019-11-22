import { GET_WORKS_SUCCESS, POST_WORKS_SUCCESS, POST_WORKS_DATA_SUCCESS} from "../../actions/Works/ActionType";

const initialState = {
  works: {}
};


const WorksState = (state = initialState, action) => {
    switch (action.type) {
        case GET_WORKS_SUCCESS:
          return {
            works:{...action.works}
          }
        case POST_WORKS_SUCCESS:
          return {
            works:{...action.works}
          }
        case POST_WORKS_DATA_SUCCESS:
        console.log(action.worksData);
          return {
            works:{...action.works}
          }
        default:
          return state;
    }
}

export default WorksState
