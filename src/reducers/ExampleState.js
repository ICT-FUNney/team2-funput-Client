import { ADD_NUMBER, DECREASE_NUMBER, GET_EXAMPLE_SUCCESS, GET_TEXT_SUCCESS,GET_TEXT_ADD } from "../actions/Example/ExampleActionType";

const initialState = {
    number: 0,
    exampleData: {
        hoge: '',
        fuga: '',
        piyo: ''
    },
    testText:[],
    text:''
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
          console.log("act redu exa");
          console.log(action.data);
            return {
                ...state,
                exampleData: action.data
            }
        case GET_TEXT_SUCCESS:
        console.log("act redu text");
        console.log(...action.data);
            return {
                ...state,
                testText: [...state.testText,...action.data]
            }
        case GET_TEXT_ADD:
          return {
            ...state,
            testText: [...state.testText,action.text]
          }
        default:
            return state;
    }
}

export default ExampleState
