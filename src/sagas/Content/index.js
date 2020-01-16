import { takeLatest } from 'redux-saga/effects';
import { getContentSaga } from './GetContent';
import { GET_CONTENT_REQUEST } from "../../actions/Content/ActionType";

const contentSaga = [
  takeLatest(GET_CONTENT_REQUEST, getContentSaga)
];

export default contentSaga;
