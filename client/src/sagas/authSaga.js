import {put} from 'redux-saga/effects';
import {authErrorAction, authSuccessAction} from '../actions';
import {
  loginUser,
  signUpUser,
  refreshAuth,
} from '../api/http/authController.js';

export function * loginSaga ({values}) {
  try {
    const {data} = yield loginUser(values);
    yield put(authSuccessAction(data));
  } catch (e) {
    yield put(authErrorAction(e.response));
  }
}

export function * signUpSaga ({values}) {
  try {
    const {data} = yield signUpUser(values);
    yield put(authSuccessAction(data));
  } catch (e) {
    yield put(authErrorAction(e.response));
  }
}

export function * refreshAuthSaga (action) {
  try {
    const {data} = yield refreshAuth();
    yield put(authSuccessAction(data));

  } catch (e) {
    yield put(authErrorAction(e.response));
  }
}

