import { GET_FUNNY_SUCCESS } from "../../actions/Funny/ActionType";

const initState = {
  funney: 0,
  unsettled: 0,
};

export default function funneyState(state = initState, action) {
  switch (action.type) {
    case GET_FUNNY_SUCCESS:
      console.log(action.data);
      return {
        ...state,
        funney: action.data.balance,
        unsettled: action.data.unsettled,
      };
    default:
      return state;
  }
}
