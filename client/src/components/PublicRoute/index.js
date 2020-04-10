import React from 'react';
import PropTypes from 'prop-types';
import {Redirect, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {HOME_PATH} from '../../constants/paths.js';

const PublicRoute = ({user, to, ...rest}) => {
  if (user) {
    return <Redirect to={to}/>;
  }
  return <Route {...rest}/>;

};

PublicRoute.propTypes = {
  to: PropTypes.string.isRequired,
};
PublicRoute.defaultProps = {
  to: HOME_PATH,
};

const mapStateToProps = state => state.auth;
export default connect(mapStateToProps)(PublicRoute);
