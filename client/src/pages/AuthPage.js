import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {loginUserAction, signUpUserAction} from '../actions';
import AuthNav from '../components/AuthNav';
import LoginForm from '../components/forms/LoginForm';
import SignUpForm from '../components/forms/SignUpForm';
import {SIGN_UP_PATH} from '../constants/paths.js';

const AuthPage = props => {

  const {loginUser, signUpUser} = props;

  const handleLoginSubmit = values => {
    loginUser(values);
  };
  const handleSignUpSubmit = values => {
    const formData = new FormData();
    Object.keys(values).forEach(key => {
      console.log(values[key]);
      formData.append(key, values[key]);
    });
    signUpUser(formData);
  };

  const {
    location: {
      pathname,
    },
  } = props;

  return (

    <>
      <AuthNav/>
      {
        pathname === SIGN_UP_PATH ?
          <SignUpForm onSubmit={handleSignUpSubmit}/>
          :
          <LoginForm onSubmit={handleLoginSubmit}/>
      }
    </>
  );
};

const mapStateToProps = state => state.auth;
const mapDispatchToProps = dispatch => ( {
  loginUser: data => dispatch(loginUserAction(data)),
  signUpUser: data => dispatch(signUpUserAction(data)),
} );

export default connect(mapStateToProps, mapDispatchToProps)(AuthPage);