import { takeLatest } from 'redux-saga/effects';
import { getWorksSaga } from './GetWorks';
import { postWorksSaga } from './PostWorks';
import { postWorksDataSaga } from './PostWorksData';
import { GET_WORKS_REQUEST, POST_WORKS_REQUEST, POST_WORKS_DATA_REQUEST } from "../../actions/Works/ActionType";

const worksSaga = [
  takeLatest(GET_WORKS_REQUEST, getWorksSaga),
  takeLatest(POST_WORKS_REQUEST, postWorksSaga),
  takeLatest(POST_WORKS_DATA_REQUEST, postWorksDataSaga),
];

export default worksSaga;
