import { call, put } from '@redux-saga/core/effects';
import { SendFunny } from "../../apis/Funny/SendFunny";
import { sendFunnySuccess, sendFunnyFailed } from "../../actions/Funny/ActionCreator";
import { updateToken } from "../../actions/LoginUser/ActionCreator";

export function* sendFunnySaga(action) {
  const response = yield call(SendFunny, action.data, action.token);
  if (response.status === 200) {
    const token = response.header.authorization;
    yield put(sendFunnySuccess());
    yield put(updateToken(token));
  } else {
    yield put(sendFunnyFailed());
  }
}