import { GET_USERS_SUCCESS } from "../../actions/Users/ActionType";

const initialState = {
  users: {}
};

const UsersState = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS_SUCCESS:
            return {
              ...state,...action.users
            }
        default:
            return state;
    }
}

export default UsersState
