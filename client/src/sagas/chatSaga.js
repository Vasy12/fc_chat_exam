import {put, all, call} from 'redux-saga/effects';
import {loadAllChatsSuccess} from '../actions';
import {
  getChat,
  getChatMembers,
  getChatMessages,
  getChats, getUsers,
} from '../api/http/chatController.js';
import {createChat} from '../api/ws/chatController.js';
import * as ACTION_TYPES from './../actions/actionTypes.js';

export function * selectChatSaga ({chatId}) {

  try {
    const {data} = yield getChat(chatId);

    yield put({
                type: ACTION_TYPES.SELECTED_CHAT_LOAD_DATA_SUCCESS,
                chat: data,
              });

  } catch (e) {
    console.dir(e);
  }
}

export function * sendMessageSaga (action) {

}

export function * createChatSaga (action) {
  try {
    yield createChat(action.data, action.userId);
  } catch (e) {
    console.dir(e);
  }
}

export function * loadAllChatsSaga (action) {
  try {
    const {data} = yield getChats();
    yield put(loadAllChatsSuccess(data));
  } catch (e) {
    console.dir(e);
  }
}
