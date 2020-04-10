require('dotenv').config();
const path = require('path');
const {Server} = require('http');
const express = require('express');
const socketIO = require('socket.io');
const cors = require('cors');
const app = express();
const server = new Server(app);
const io = socketIO(server);
const router = require('./router');
const PORT = process.env.PORT || 3000;
const handleError = require('./middleware/handleError.js');
const EVENT_TYPES = require('./constants/eventTypes.js');
const {User, Chat} = require('./models');
app.use(cors());
app.use(express.json());
/*
 * static files
 * */
app.use(express.static(path.join(__dirname, '../uploads')));
/*
 * http routing
 * */
app.use('/api', router);
/*
 * error handler
 * */
app.use(handleError);

/*
 * WebSocket
 * */
const chatIO = io.of('/chat').on('connection', function (socket) {
  socket.on('message', msg => {

  });
  socket.on(EVENT_TYPES.CREATE_CHAT_EVENT, async (userId, data) => {

    const chat = await Chat.create({
                                     ...data,
                                     owner: userId,
                                   });

    if (chat) {
      chatIO.emit(EVENT_TYPES.NEW_CHAT_EVENT, chat);
    }

  });
  socket.on('disconnect', reason => {

  });
});
/*
 * start server
 * */
server.listen(PORT, () =>
  console.log(`Example app listening on port ${PORT}!`),
);






