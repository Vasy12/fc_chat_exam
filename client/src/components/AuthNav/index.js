import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './AuthNav.module.scss';

const AuthNavLink = props => ( <NavLink {...props} className={styles.link}
                                        activeClassName={styles.activeLink}/> );

const AuthNav = () => {

  return (
    <nav>
      <ul>
        <li>
          <AuthNavLink to={'/login'}>Login</AuthNavLink>
        </li>
        <li>
          <AuthNavLink to={'/sign_up'}>Sign Up</AuthNavLink>
        </li>
      </ul>
    </nav>
  );
};

export default AuthNav;