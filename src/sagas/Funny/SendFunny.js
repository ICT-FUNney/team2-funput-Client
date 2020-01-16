import { call, put } from '@redux-saga/core/effects';
import { SendFunny } from "../../apis/Funny/SendFunny";
import { sendFunnySuccess, sendFunnyFailed, getFunnyRequest } from "../../actions/Funny/ActionCreator";
import { updateToken } from "../../actions/LoginUser/ActionCreator";

export function* sendFunnySaga(action) {
  const response = yield call(SendFunny, action.data, action.token);
  if (response.status === 202) {
    const token = response.headers.authorization;
    yield put(sendFunnySuccess());
    yield put(updateToken(token));
    const data = {
      id: action.data.source_id,
      password:''
    }
    yield put(getFunnyRequest(data, token));
  } else {
    yield put(sendFunnyFailed());
  }
}
