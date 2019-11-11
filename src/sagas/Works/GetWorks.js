import {getWorks} from "../../apis/Works/GetWorks";
import { call, put, takeLatest } from 'redux-saga/effects';
import { getWorksSuccess, getWorksFailed } from "../../actions/Works/ActionCreator";
import { GET_WORKS_REQUEST } from "../../actions/Works/ActionType";

export function* getWorksSaga() {
  const response = yield call(getWorks);

  if (response.status === 200 && response.data) {
    yield put(getWorksSuccess(response.data));
  } else if (response.status === 400) {
    yield put(getWorksFailed());
  } else {
    yield put(getWorksFailed());
  }
}
