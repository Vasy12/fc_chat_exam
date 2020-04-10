import * as ACTION_TYPES from '../actions/actionTypes.js';
import _ from 'lodash';

const initialState = {
  chats: {},
  currentChatId: null,
};

function chatsReducer (state = initialState, action) {

  switch (action.type) {
    case ACTION_TYPES.LOAD_CHATS_SUCCESS: {
      const {chats} = action;
      return {
        ...state,
        chats,
      };
    }
    case ACTION_TYPES.NEW_CHAT_ACTION:
      const {chat} = action;
      const newState = {
        ...state,
      };
      newState.chats[chat._id] = chat;
      return newState;
    case ACTION_TYPES.SELECT_CHAT_ACTION: {
      const {chatId} = action;

      return {
        ...state,
        currentChatId: chatId,
      };
    }
    case ACTION_TYPES.SELECTED_CHAT_LOAD_DATA_SUCCESS: {

      const {chat} = action;
      const newState = {
        ...state,
      };

      newState.chats[chat._id] = chat;
      newState.users[chat.owner._id] = chat.owner;

      chat.messages.forEach(
        msg => msg.author = chat.users.find(item => item._id === msg.author));

      return newState;
    }
    /*    case ACTION_TYPES.SELECT_CHAT_ACTION: {
     return {
     ...state,
     currentChat: state.chats[action.chatId],
     };
     }
     case ACTION_TYPES.LOAD_CHAT_MESSAGES_SUCCESS: {
     const {chatId, messages} = action;
     const newState = _.clone(state);
     newState.chats[chatId].messages = messages;
     return newState;
     }
     case ACTION_TYPES.LOAD_CHAT_USERS_REQUEST: {
     return {};
     }
     case ACTION_TYPES.LOAD_CHAT_USERS_SUCCESS: {

     const users = {
     ...state.users,
     ...action.users.reduce((newUsers, user) => {
     newUsers[user._id] = user;
     return newUsers;
     }, {}),
     };
     return {
     ...state,
     users,
     };
     }
     case ACTION_TYPES.LOAD_CHAT_USERS_ERROR:
     case ACTION_TYPES.LOAD_CHAT_MESSAGES_ERROR:
     return {
     ...state,
     error: action.error,
     };*/
    default:
      return state;
  }

}

export default chatsReducer;