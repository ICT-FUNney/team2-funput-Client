import {getContent} from "../../apis/Content/GetContent";
import { call, put } from 'redux-saga/effects';
import { getContentSuccess, getContentFailed } from "../../actions/Content/ActionCreator";
export function* getContentSaga(contentPath) {
  console.log("saga:::IN");
  const response = yield call(getContent, contentPath);
  console.log("sagaout");
  if (response.status === 200 && response.data) {
    console.log("sagasuccessin");
    yield put(getContentSuccess(response.data));
  } else if (response.status === 400) {
    console.log("sagafaildini");
    yield put(getContentFailed());
  } else {
    console.log("sagafaildini");
    yield put(getContentFailed());
  }
}
