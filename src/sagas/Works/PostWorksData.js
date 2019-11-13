import {postWorksData} from "../../apis/Works/PostWorksData";
import { call, put } from 'redux-saga/effects';
import { postWorksDataSuccess, postWorksDataFailed } from "../../actions/Works/ActionCreator";
export function* postWorksDataSaga(worksData) {
  const work_title = worksData.worksData[0];
  const file_url = worksData.worksData[1];
  const description = worksData.worksData[2];
  const response = yield call(postWorksData,{work_title,file_url,description});
  if (response.status === 201 && response.data) {
    yield put(postWorksDataSuccess(response.data));
  } else if (response.status === 400) {
    yield put(postWorksDataFailed());
  } else {
    yield put(postWorksDataFailed());
  }
}
