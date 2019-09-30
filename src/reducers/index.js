import { combineReducers } from "redux";
import ExampleState from "./ExampleState";

const rootReducer = combineReducers({
    example: ExampleState
});

export default rootReducer;