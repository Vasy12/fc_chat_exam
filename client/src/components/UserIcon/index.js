import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import ColorHash from 'color-hash';
import styles from './UserIcon.module.scss';

const colorHash = new ColorHash();

const UserIcon = (props) => {
  const {user, size} = props;

  const [isError, setIsError] = useState(null);

  const handleError = e => {
    setIsError(true);
  };

  const containerStyle = {
    width: size,
    height: size,
    backgroundColor: colorHash.hex(user.login),
  };

  return (
    <div style={containerStyle} className={styles.container}>
      {
        isError ?
          null
          :
          <img src={user.profilePicture} alt={user.login}
               onError={handleError}/>

      }
    </div>
  );
};

UserIcon.propTypes = {
  size: PropTypes.string,
};

UserIcon.defaultProps = {
  size: '100px',
};

export default UserIcon;