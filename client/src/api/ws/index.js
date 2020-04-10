import io from 'socket.io-client';
import * as EVENT_TYPES from './eventTypes.js';
import {} from './../../actions';
import store from './../../store';

const chatIO = io.connect('ws://localhost:3000/chat');
chatIO.on(EVENT_TYPES.NEW_MESSAGE_EVENT, msg => {
  store.dispatch();
});
export default chatIO;
