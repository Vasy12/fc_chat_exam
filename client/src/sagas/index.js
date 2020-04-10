import {takeLatest, takeEvery} from 'redux-saga/effects';
import * as ACTION_TYPES from '../actions/actionTypes.js';
import {loginSaga, refreshAuthSaga, signUpSaga} from './authSaga.js';
import {
  createChatSaga,
  loadAllChatsSaga, loadUsersSaga,
  selectChatSaga,
  sendMessageSaga,
} from './chatSaga.js';

export default function * () {
  yield takeLatest(ACTION_TYPES.LOGIN_REQUEST, loginSaga);
  yield takeLatest(ACTION_TYPES.SIGN_UP_REQUEST, signUpSaga);
  yield takeLatest(ACTION_TYPES.REFRESH_AUTH, refreshAuthSaga);

  yield takeEvery(ACTION_TYPES.SELECT_CHAT_ACTION, selectChatSaga);

  yield takeEvery(ACTION_TYPES.SEND_MESSAGE_ACTION, sendMessageSaga);
  yield takeEvery(ACTION_TYPES.CREATE_CHAT_ACTION, createChatSaga);
  yield takeLatest(ACTION_TYPES.LOAD_CHATS_REQUEST, loadAllChatsSaga);
}