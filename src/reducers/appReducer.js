// @flow
import { SEND_REQUEST } from '../actions/types';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {

    case SEND_REQUEST: {
      return Object.assign({}, state, action.payload);
    }

    default: {
      return state;
    }
  }
};

