import { combineReducers } from "redux";
import ExampleState from "./ExampleState";
import UsersState from "./Users/UsersState";
import WorksState from "./Works/WorksState";

const rootReducer = combineReducers({
    example: ExampleState,
    users: UsersState,
    works: WorksState
});

export default rootReducer;
