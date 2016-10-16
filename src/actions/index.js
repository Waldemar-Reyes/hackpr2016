import { SEND_REQUEST } from './types';

// API calls
const API = 'http://localhost:3090';
const auth = `${API}/auth`;

export const authRequest = (username, password, phone, amount) => {
  return dispatch => {
    fetch(auth).then(
      res => {
        return res.json();
      }
    ).then(
      json => {
        dispatch(
          {
            type: SEND_REQUEST,
            payload: json,
          }
        );
      }
    );
  }
};