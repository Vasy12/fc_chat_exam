import React from 'react';
import PropTypes from 'prop-types';
import {Redirect, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {SIGN_UP_PATH} from '../../constants/paths.js';

const PrivateRoute = ({user, to, ...rest}) => {
  if (user) {
    return <Route {...rest}/>;
  }
  return <Redirect to={to}/>;
};

PrivateRoute.propTypes = {
  to: PropTypes.oneOfType([
                            PropTypes.string,
                            PropTypes.shape({
                                              pathname: PropTypes.string,
                                              search: PropTypes.string,
                                              hash: PropTypes.string,
                                              state: PropTypes.object,
                                            }),
                          ]).isRequired,
  path: PropTypes.oneOfType([
                              PropTypes.string,
                              PropTypes.arrayOf(PropTypes.string),
                            ]),
};

PrivateRoute.defaultProps = {
  to: SIGN_UP_PATH,
};

const mapStateToProps = state => state.auth;
export default connect(mapStateToProps)(PrivateRoute);
