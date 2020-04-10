import React, {lazy, Suspense, useEffect} from 'react';
import {connect} from 'react-redux';
import {loadAllChats, refreshAuthAction} from '../actions';
import {ACCESS_TOKEN_KEY} from '../constants';
import {HOME_PATH, LOGIN_PATH, SIGN_UP_PATH} from '../constants/paths.js';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const HomePage = lazy(() => import('../pages/HomePage'));
const AuthPage = lazy(() => import('../pages/AuthPage.js'));

function App (props) {

  useEffect(() => {
    if ( !props.user && localStorage.getItem(ACCESS_TOKEN_KEY)) {
      props.refreshAuth();
    }
  }, []);

  useEffect(() => {
    if (props.user) {
      props.loadAllChats();
    }
  }, [props.user]);

  if ( !props.user && localStorage.getItem(ACCESS_TOKEN_KEY)) {
    return <h1>Подтягиваем пользователя</h1>;
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PrivateRoute exact
                    path={HOME_PATH}
                    component={HomePage}/>
      <PublicRoute path={[SIGN_UP_PATH, LOGIN_PATH]}
                   component={AuthPage}/>
    </Suspense>
  );
}

const mapStateToProps = state => state.auth;
const mapDispatchToProps = dispatch => ( {
  refreshAuth: () => dispatch(refreshAuthAction()),
  loadAllChats: () => dispatch(loadAllChats()),
} );
export default connect(mapStateToProps, mapDispatchToProps)(App);
