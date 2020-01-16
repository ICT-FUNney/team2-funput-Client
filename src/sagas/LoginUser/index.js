import { takeLatest } from "redux-saga/effects";
import { SIGN_IN_REQUEST, SIGN_UP_REQUEST } from "../../actions/LoginUser/ActionType";
import { signInSaga } from "./SignIn";
import { signUpSaga } from "./SignUp";

const loginUserSaga = [
  takeLatest(SIGN_IN_REQUEST, signInSaga),
  takeLatest(SIGN_UP_REQUEST, signUpSaga)
]

export default loginUserSaga;