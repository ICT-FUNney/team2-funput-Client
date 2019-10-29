// import ExampleApi from "../../apis/ExampleApi";
// import { call, put, takeLatest } from 'redux-saga/effects';
// import { postTextWords } from "../../actions/Example/ExampleActionCreator";
// import { POST_TEXT_ADD } from "../../actions/Example/ExampleActionType";
//
// function* postText(text) {
//     const response = yield call(ExampleApi.postTextWords(text));
//
//     console.log(response);
//
//     if (response.status === 200) {
//         yield put(postTextWords(response.data));
//       }
// }
//
// const postTextSaga = [
//     takeLatest(POST_TEXT_ADD, postText)
// ];
//
// export default postTextSaga;
