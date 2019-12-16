import { call, put } from '@redux-saga/core/effects';
import { SendFunny } from "../../apis/Funny/SendFunny";
import { sendFunnySuccess, sendFunnyFailed } from "../../actions/Funny/ActionCreator";
import { updateToken } from "../../actions/LoginUser/ActionCreator";

export function* sendFunnySaga(action) {
  console.log("sendFunnySaga called");
  console.log(action.data, action.token);
  const response = yield call(SendFunny, action.data, action.token);
  if (response.status === 202) {
    console.log(response);
    const token = response.headers.authorization;
    yield put(sendFunnySuccess());
    yield put(updateToken(token));
  } else {
    yield put(sendFunnyFailed());
  }
}
