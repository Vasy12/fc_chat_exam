import http from './index.js';

export const getChats = () => http.get('/chats');
/*export const getChatMembers = (chatId) => http.get(`/chats/${chatId}/members`);
 export const getChatMessages = chatId => http.get(`/chats/${chatId}/messages`);*/
export const joinToChat = chatId => http.post(`/chats/${chatId}/join`);
export const sendMessage = (chatId, authorId, data) => http.post(
  `/chats/${chatId}/messages`, data);
export const getMessage = (chatId, messageId) => http.get(
  `/chats/${chatId}/messages/${messageId}`);
export const getUser = userId => http.get(`/users/${userId}`);

export const getChat = chatId => http.get(`/chats/${chatId}`);

