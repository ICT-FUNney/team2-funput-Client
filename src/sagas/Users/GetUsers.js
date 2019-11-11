import {getUsers} from "../../apis/Users/GetUsers";
import { call, put, takeLatest } from 'redux-saga/effects';
import { getUsersSuccess, getUsersFailed } from "../../actions/Users/ActionCreator";
import { GET_USERS_REQUEST } from "../../actions/Users/ActionType";

export function* getUsersSaga() {
  const response = yield call(getUsers);

  if (response.status === 200 && response.data) {
    yield put(getUsersSuccess(response.data));
  } else if (response.status === 400) {
    yield put(getUsersFailed());
  } else {
    yield put(getUsersFailed());
  }
}
