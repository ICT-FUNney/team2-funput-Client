import {postWorksData} from "../../apis/Works/PostWorksData";
import { call, put } from 'redux-saga/effects';
import { postWorksDataSuccess, postWorksDataFailed } from "../../actions/Works/ActionCreator";
import { sendFunnyRequest } from '../../actions/Funny/ActionCreator';

export function* postWorksDataSaga(worksData, loginUser) {
  const work_title = worksData.worksData[0];
  const file_url = worksData.worksData[1];
  const description = worksData.worksData[2];
  console.log(worksData.worksData);
  const response = yield call(postWorksData,{work_title,file_url,description});
  if (response.status === 201 && response.data) {
    console.log(response.data);
    yield put(postWorksDataSuccess(response.data));
    // console.log(loginUser.id);
    console.log(worksData.loginUser);
    const data = {
        source_id: worksData.loginUser.id,
        send_id: "test",
        balance: 1
      }
    const token = worksData.loginUser.token;
    yield put(sendFunnyRequest(data, token));
  } else if (response.status === 400) {
    yield put(postWorksDataFailed());
  } else {
    yield put(postWorksDataFailed());
  }
}
