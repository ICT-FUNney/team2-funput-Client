import {getContent} from "../../apis/Content/GetContent";
import { call, put } from 'redux-saga/effects';
import { getContentSuccess, getContentFailed } from "../../actions/Content/ActionCreator";
export function* getContentSaga(contentPath) {
  const response = yield call(getContent, contentPath);
  if (response.status === 200 && response.data) {
    yield put(getContentSuccess(response.data));
  } else if (response.status === 400) {
    yield put(getContentFailed());
  } else {
    yield put(getContentFailed());
  }
}
