import { takeLatest } from 'redux-saga/effects';
import { getWorksSaga } from './GetWorks';
import { postWorksSaga } from './PostWorks';
import { GET_WORKS_REQUEST, POST_WORKS_REQUEST } from "../../actions/Works/ActionType";

const worksSaga = [
  takeLatest(GET_WORKS_REQUEST, getWorksSaga),
  takeLatest(POST_WORKS_REQUEST, postWorksSaga)
];

export default worksSaga;
