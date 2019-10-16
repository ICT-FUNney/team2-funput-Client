import { ADD_NUMBER, DECREASE_NUMBER, ADD_WORDS } from "../actions/Example/ExampleActionType";

const initialState = {
    number: 0,
    words: [],
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
        case ADD_WORDS:
          console.log('test'+action.words);
          console.log(state.words.length);
          for(var i = 0;i<state.words.length ; i++){
            console.log(state.words[i]);
          }
          return {
            ...state,
            words: [...state.words, action.words]
          }
        default:
            return state;
    }
}

export default ExampleState
