const chatRouter = require('express').Router();

chatRouter.post('/chat/:chatId/join');

module.exports = chatRouter;