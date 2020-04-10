import React from 'react';
import {connect} from 'react-redux';
import {selectChatAction} from '../../actions';

const ChatItem = props => {
  return (
    <li onClick={() => props.selectChat(props._id)}>
      {
        props.name
      }
      id: {props._id}
    </li>
  );
};

const mapStateToProps = state => ( {} );

const mapDispatchToProps = dispatch => ( {
  selectChat: chatId => dispatch(selectChatAction(chatId)),
} );

export default connect(mapStateToProps, mapDispatchToProps)(ChatItem);