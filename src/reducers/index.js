import { combineReducers } from "redux";
import UsersState from "./Users/UsersState";
import WorksState from "./Works/WorksState";

const rootReducer = combineReducers({
    users: UsersState,
    works: WorksState
});

export default rootReducer;
