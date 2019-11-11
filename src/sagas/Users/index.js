import { takeLatest } from 'redux-saga/effects';
import { getUsersSaga } from './GetUsers';
import { GET_USERS_REQUEST } from "../../actions/Users/ActionType";

const usersSaga = [
  takeLatest(GET_USERS_REQUEST, getUsersSaga)
];

export default usersSaga;
