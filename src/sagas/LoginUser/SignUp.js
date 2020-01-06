import { call, put } from '@redux-saga/core/effects';
import { signUp } from '../../apis/LoginUser/SignUp'
import { signUpSuccess } from '../../actions/LoginUser/ActionCreator';
import { getFunnyRequest } from '../../actions/Funny/ActionCreator';

export function* signUpSaga(action) {
  const response = yield call(signUp, action.data);
  if (response.status === 202) {
    const token = response.headers.authorization;
    yield put(signUpSuccess(action.data, token));
    yield put(getFunnyRequest(action.data, token))
  }
}