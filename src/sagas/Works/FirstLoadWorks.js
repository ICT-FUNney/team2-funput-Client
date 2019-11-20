import {firstLoadWorks} from "../../apis/Works/GetWorks";
import { call, put } from 'redux-saga/effects';
import { getWorksSuccess, getWorksFailed } from "../../actions/Works/ActionCreator";
export function* getWorksSaga() {
  const response = yield call(getWorks);

  if (response.status === 200 && response.data) {
    yield put(loadWorksSuccess(response.data));
  } else if (response.status === 400) {
    yield put(getWorksFailed());
  } else {
    yield put(getWorksFailed());
  }
}
