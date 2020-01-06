import { all } from 'redux-saga/effects';
import usersSaga from './Users/index';
import worksSaga from './Works/index';
import loginUserSaga from './LoginUser';
import funnySaga from './Funny';

export default function* rootSaga() {
    yield all([...usersSaga, ...worksSaga, ...loginUserSaga, ...funnySaga]);
}
