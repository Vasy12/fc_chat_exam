const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userRef = {
  type: Schema.Types.ObjectId,
  ref: 'User',
};

const messageSchema = new Schema({
                                   author: {
                                     ...userRef,
                                     required: true,
                                   },
                                   body: {
                                     type: Schema.Types.String,
                                     default: '',
                                   },
                                   files: [Schema.Types.String],
                                   createdAt: Schema.Types.Date,
                                   updatedAt: Schema.Types.Date,
                                 }, {
                                   timestamp: true,
                                 });

const chatSchema = new Schema({
                                name: {
                                  type: Schema.Types.String,
                                  required: true,
                                  match: /^\w{6,16}$/,
                                },
                                owner: {
                                  ...userRef,
                                  required: true,
                                },
                                users: [userRef],

                                messages: {
                                  type: [messageSchema],
                                  default: [],
                                },
                                createdAt: Schema.Types.Date,
                                updatedAt: Schema.Types.Date,
                              }, {
                                timestamp: true,
                              });

const Chat = mongoose.model('Chat', chatSchema);
module.exports = Chat;
