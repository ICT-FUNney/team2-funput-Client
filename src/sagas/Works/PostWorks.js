import {postWorks} from "../../apis/Works/PostWorks";
import { call, put } from 'redux-saga/effects';
import { postWorksSuccess, postWorksFailed } from "../../actions/Works/ActionCreator";
export function* postWorksSaga() {
  const response = yield call(postWorks);

  if (response.status === 200 && response.data) {
    yield put(postWorksSuccess(response.data));
  } else if (response.status === 400) {
    yield put(postWorksFailed());
  } else {
    yield put(postWorksFailed());
  }
}
