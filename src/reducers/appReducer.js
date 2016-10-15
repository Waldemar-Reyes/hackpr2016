// @flow
import { Map } from 'immutable';

const initialState = Map(
  {
    test: 'Hello',
  }
);

export default (state = initialState, action) => {
  switch (action.type) {

    case 'type': {
      return state;
    }

    default: {
      return state;
    }
  }
};

