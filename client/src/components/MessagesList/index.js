import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import MessageItem, {messagePropType} from '../MessageItem';

const MessagesList = props => {
  const {currentChat} = props;

  return (
    <ul>
      {
        currentChat.messages.map(
          msg => <MessageItem key={msg.createdAt} {...msg}/>)
      }
    </ul>
  );
};

MessagesList.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape(messagePropType)),
};

export default MessagesList;