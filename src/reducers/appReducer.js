// @flow
import { SEND_REQUEST, CONFIRM_REQUEST, VALID_CODE } from '../actions/types';

const initialState = {};

export default (state = initialState, action) => {
  console.log('action', action.type);
  switch (action.type) {
    case SEND_REQUEST: {
      return Object.assign({}, state, action.payload);
    }

    case CONFIRM_REQUEST: {
      return Object.assign({}, state, action.payload);
    }

    case VALID_CODE: {
      console.log('reducer payload', action.payload);
      return Object.assign({}, state, action.payload);
    }

    default: {
      return state;
    }
  }
};

