import { all } from 'redux-saga/effects';
import usersSaga from './Users/index';
import worksSaga from './Works/index';

export default function* rootSaga() {
    yield all([...usersSaga, ...worksSaga]);
}
