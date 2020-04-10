import React from 'react';
import {connect} from 'react-redux';
import ChatItem from '../ChatItem';

const ChatList = ({chats, ...rest}) => {

  return (
    <ul>
      {
        chats.map(chat => <ChatItem key={chat._id} {...chat}/>)
      }
    </ul>
  );
};

const mapStateToProps = state => {
  const {chats: {chats}} = state;
  return {
    chats: Object.values(chats),
  };
};

export default connect(mapStateToProps)(ChatList);