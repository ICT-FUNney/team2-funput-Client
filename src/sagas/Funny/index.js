import { takeLatest } from "redux-saga/effects";
import { GET_FUNNY_REQUEST, SEND_FUNNY_REQUEST } from "../../actions/Funny/ActionType";
import { getFunnySaga } from "./GetFunny";
import { sendFunnySaga } from "./SendFunny";

const funnySaga = [
  takeLatest(GET_FUNNY_REQUEST, getFunnySaga),
  takeLatest(SEND_FUNNY_REQUEST, sendFunnySaga)
]

export default funnySaga;