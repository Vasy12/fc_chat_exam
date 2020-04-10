import React from 'react';
import {connect} from 'react-redux';
import {sendMessageAction} from '../../actions';
import MessageForm from '../MessageForm';
import MessagesList from '../MessagesList';

const Chat = props => {

  const {currentChat} = props;

  const handleMessageSubmit = values => {

  };

  return (
    <div>
      {
        currentChat
          ?
          <>
            <div>{currentChat.name}</div>
            <MessagesList messages={currentChat.messages}/>
            <MessageForm onSubmit={}/>
          </>
          :
          <div>Select chat</div>
      }

    </div>
  );
};

const mapStateToProps = state => {

  const {
    chats: {currentChat},
  } = state;

  return {
    currentChat,
  };

};

const mapDispatchToProps = dispatch => ( {
  sendMessage: (data, authorId, chatId) => dispatch(
    sendMessageAction(data, authorId, chatId)),
} );

export default connect(mapStateToProps)(Chat);