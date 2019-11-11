import { all } from 'redux-saga/effects'
import exampleSaga from './ExampleData/GetExampleData'
import textSaga from './TextWords/GetTextWords'
import createUserSaga from './UserData/CreateUser'

export default function* rootSaga() {
    yield all([...exampleSaga, ...textSaga,...createUserSaga]);
}
