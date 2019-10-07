import { ADD_NUMBER, DECREASE_NUMBER, GET_EXAMPLE_SUCCESS } from "../actions/Example/ExampleActionType";

const initialState = {
    number: 0,
    exampleData: {
        hoge: '',
        fuga: '',
        piyo: ''
    }
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
        case GET_EXAMPLE_SUCCESS:
            return {
                ...state,
                exampleData: action.data
            }
        default:
            return state;
    }
}

export default ExampleState