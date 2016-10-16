// @flow
import { SEND_REQUEST, CONFIRM_REQUEST } from '../actions/types';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {

    case SEND_REQUEST: {
      return Object.assign({}, state, action.payload);
    }

    case CONFIRM_REQUEST: {
      return Object.assign({}, state, action.payload);
    }

    default: {
      return state;
    }
  }
};

