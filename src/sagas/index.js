import { all } from 'redux-saga/effects'
import exampleSaga from './ExampleData/GetExampleData'
import textSaga from './TextWords/GetTextWords'

export default function* rootSaga() {
    yield all([...exampleSaga, ...textSaga]);
}
