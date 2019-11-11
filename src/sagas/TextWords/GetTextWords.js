import ExampleApi from "../../apis/ExampleApi";
import { call, put, takeLatest } from 'redux-saga/effects';
import { getTextSuccess, getTextFailed } from "../../actions/Example/ExampleActionCreator";
import { GET_TEXT_REQUEST } from "../../actions/Example/ExampleActionType";

function* getTextSaga() {
    const response = yield call(ExampleApi.getTextWords);

    console.log(response);

    if (response.status === 200 && response.data) {
        yield put(getTextSuccess(response.data));
      } else if (response.status === 400) {
        yield put(getTextFailed());
      } else {
        yield put(getTextFailed());
      }
}

const textSaga = [
  takeLatest(GET_TEXT_REQUEST, getTextSaga)
];

export default textSaga;
