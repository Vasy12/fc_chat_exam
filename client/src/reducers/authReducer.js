import * as ACTION_TYPES from '../actions/actionTypes.js';

const initialState = {
  user: null,
  error: null,
  isFetching: false,
};

function authReducer (state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.SIGN_UP_REQUEST:
    case ACTION_TYPES.LOGIN_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case ACTION_TYPES.AUTH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        user: action.user,
      };
    case ACTION_TYPES.AUTH_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export default authReducer;
