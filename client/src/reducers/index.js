import {combineReducers} from 'redux';
import authReducer from './authReducer.js';
import chatsReducer from './chatReducer.js';
import currentChatReducer from './currentChatReducer.js';

export default combineReducers({
                                 auth: authReducer,
                                 chats: chatsReducer,
                                 currentChat: currentChatReducer,
                               });