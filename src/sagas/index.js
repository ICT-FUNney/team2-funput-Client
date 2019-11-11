import { all } from 'redux-saga/effects';
import exampleSaga from './Example/Example';
import usersSaga from './Users/index';
import worksSaga from './Works/index';

export default function* rootSaga() {
    yield all([...exampleSaga,...usersSaga,...worksSaga]);
}
