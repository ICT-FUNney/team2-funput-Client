import { ADD_NUMBER, DECREASE_NUMBER } from "../actions/Example/ExampleActionType";

const initialState = {
    number: 0
};

const ExampleState = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NUMBER:
            return {
                ...state,
                number: state.number + 1
            }
        case DECREASE_NUMBER:
            return {
                ...state,
                number: state.number - 1
            }
        default:
            return state;
    }
}

export default ExampleState