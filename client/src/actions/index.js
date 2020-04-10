import * as ACTION_TYPES from './actionTypes.js';
/*
 * Auth action creators
 * */
export const loginUserAction = values => ( {
  type: ACTION_TYPES.LOGIN_REQUEST,
  values,

} );
export const signUpUserAction = values => ( {
  type: ACTION_TYPES.SIGN_UP_REQUEST,
  values,
} );

export const refreshAuthAction = () => ( {
  type: ACTION_TYPES.REFRESH_AUTH,
} );

export const authSuccessAction = user => ( {
  type: ACTION_TYPES.AUTH_SUCCESS,
  user,
} );

export const authErrorAction = error => ( {
  type: ACTION_TYPES.AUTH_ERROR,
  error,
} );
/*
 * chat action creators
 * */
export const selectChatAction = chatId => ( {
  type: ACTION_TYPES.SELECT_CHAT_ACTION,
  chatId,
} );



export const newMessageAction = (chatId, msg) => ( {
  type: ACTION_TYPES.NEW_CHAT_MESSAGE_ACTION,
  message: msg,
  chatId,
} );

export const sendMessageAction = (data, authorId, chatId) => ( {
  type: ACTION_TYPES.SEND_MESSAGE_ACTION,
  data,
  authorId,
  chatId,
} );


export const createChatAction = (userId, data) => ( {
  type: ACTION_TYPES.CREATE_CHAT_ACTION,
  data,
  userId,
} );

export const newChatAction = chat => ( {
  type: ACTION_TYPES.NEW_CHAT_ACTION,
  chat,
} );

export const loadAllChats = () => ( {
  type: ACTION_TYPES.LOAD_CHATS_REQUEST,
} );

export const loadAllChatsSuccess = data => ( {
  type: ACTION_TYPES.LOAD_CHATS_SUCCESS,
  chats: data,
} );