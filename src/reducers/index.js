import { combineReducers } from "redux";
import UsersState from "./Users/UsersState";
import WorksState from "./Works/WorksState";
import ContentState from "./Content/ContentState";
import loginUserState from './LoginUser/loginUserState';
import funnyState from './Funny/FunnyState'

const rootReducer = combineReducers({
    loginUser: loginUserState,
    users: UsersState,
    works: WorksState,
    contnet:ContentState,
    funny: funnyState
});

export default rootReducer;
