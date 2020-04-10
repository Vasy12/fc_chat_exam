import {newChatAction} from '../../actions';
import store from '../../store';
import * as EVENT_TYPES from './eventTypes.js';
import chatIO from './index.js';

export const sendMessage = (data, userId, chatId) => chatIO.emit(
  EVENT_TYPES.NEW_MESSAGE_EVENT, data, userId, chatId);

export const createChat = (data, userId) => chatIO.emit(EVENT_TYPES.CREATE_CHAT_EVENT, userId, data);

chatIO.on(EVENT_TYPES.NEW_CHAT_EVENT, chat => {
  store.dispatch(newChatAction(chat));
});










