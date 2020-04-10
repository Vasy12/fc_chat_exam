import React from 'react';
import {connect} from 'react-redux';
import {createChatAction} from '../../actions';
import ChatForm from '../ChatForm';
import ChatList from '../ChatsList';

const Sidebar = (props) => {

  const handleChatSubmit = values => {
    props.createChat(props.user._id, values);
  };

  return (
    <aside>
      <ChatList/>
      <ChatForm onSubmit={handleChatSubmit}/>
    </aside>
  );
};

const mapStateToProps = state => state.auth;

const mapDispatchToProps = dispatch => ( {
  createChat: (userId, data) => dispatch(createChatAction(userId, data)),
} );

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);