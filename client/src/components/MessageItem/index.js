import React from 'react';
import PropTypes from 'prop-types';
import UserIcon from '../UserIcon';

export const messagePropType = {
  author: PropTypes.shape({}),
  body: PropTypes.string,
  createdAt: PropTypes.string.isRequired,
  files: PropTypes.arrayOf(PropTypes.string),
};

const MessageItem = props => {
  const {author, body, createdAt, files} = props;
  return (
    <li>
      <UserIcon user={author}/>
      <div>
        {
          author.login
        }
      </div>
      <div>
        {body}
      </div>
      <div>
        {
          createdAt
        }
      </div>
    </li>
  );
};

MessageItem.propTypes = messagePropType;

MessageItem.defaultProps = {
  body: '',
};

export default MessageItem;