import ExampleApi from "../../apis/ExampleApi";
import { call, put, takeLatest } from 'redux-saga/effects';
import { CREATE_USER } from "../../actions/Example/ExampleActionType";

function* createUserData() {
     yield call(ExampleApi.createUser);
    // if (response.status === 200 && response.data) {
    //     yield response.data;
    //   }
}

const createUserSaga = [
    takeLatest(CREATE_USER,createUserData)
];

export default createUserSaga;
