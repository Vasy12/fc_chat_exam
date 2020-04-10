import * as ACTION_TYPES from '../actions/actionTypes.js';

const initialState = {
  isFetching: false,
  error: null,
};

export default function currentChatReducer (state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.SELECT_CHAT_ACTION:
      return {
        ...state,
        isFetching: true,
      };
    case ACTION_TYPES.SELECTED_CHAT_LOAD_DATA_SUCCESS:
      return {
        isFetching: false,
      };
    default:
      return state;
  }

}
