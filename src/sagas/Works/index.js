import { takeLatest } from 'redux-saga/effects';
import { getWorksSaga } from './GetWorks';
import { GET_WORKS_REQUEST } from "../../actions/Works/ActionType";

const worksSaga = [
  takeLatest(GET_WORKS_REQUEST, getWorksSaga)
];

export default worksSaga;
