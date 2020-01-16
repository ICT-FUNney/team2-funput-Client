import { call, put } from '@redux-saga/core/effects';
import { signIn } from '../../apis/LoginUser/SignIn';
import { signInSuccess, signInFailed } from '../../actions/LoginUser/ActionCreator'
import { getFunnyRequest } from '../../actions/Funny/ActionCreator';


export function* signInSaga(action) {
  const response = yield call(signIn, action.data);
  if (response.status === 202) {
    console.log(response)
    const token = response.headers.authorization;
    yield put(signInSuccess(action.data, token));
    yield put(getFunnyRequest(action.data, token));
  } else {
    yield put(signInFailed());
  }
}
