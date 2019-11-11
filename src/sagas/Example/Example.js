import ExampleApi from "../../apis/ExampleApi";
import { call, put, takeLatest } from 'redux-saga/effects';
import { getExampleSuccess, getExampleFailed } from "../../actions/Example/ActionCreator";
import { GET_EXAMPLE_REQUEST } from "../../actions/Example/ActionType";

function* getExampleSaga() {
  const response = yield call(ExampleApi.getExample);

  if (response.status === 200 && response.data) {
    yield put(getExampleSuccess(response.data));
  } else if (response.status === 400) {
    yield put(getExampleFailed());
  } else {
    yield put(getExampleFailed());
  }
}

const exampleSaga = [
  takeLatest(GET_EXAMPLE_REQUEST, getExampleSaga)
];

export default exampleSaga;