import React from 'react';
import {connect} from 'react-redux';
import UserIcon from '../UserIcon';
import styles from './Header.module.scss';

const Header = props => {
  return (
    <header className={styles.container}>
      {
        <UserIcon user={props.user} size={'60px'}/>
      }
    </header>
  );
};

const mapStateToProps = state => {

  const {auth: {user}} = state;
  return {
    user,
  };
};

export default connect(mapStateToProps)(Header);
