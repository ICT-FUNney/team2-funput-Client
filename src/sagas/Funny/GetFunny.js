import { call, put } from '@redux-saga/core/effects';
import { getFunnySuccess, getFunnyFailed } from "../../actions/Funny/ActionCreator";
import { updateToken } from "../../actions/LoginUser/ActionCreator";
import { getFunny } from '../../apis/Funny/GetFunny';

export function* getFunnySaga(action) {
  const response = yield call(getFunny, action.data.id, action.token);
  if (response.status === 202) {
    const token = response.headers.authorization;
    const data = response.data;
    yield put(getFunnySuccess(data));
    yield put(updateToken(token));
  } else {
    yield put(getFunnyFailed());
  }
}
