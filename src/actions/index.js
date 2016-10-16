import { SEND_REQUEST, CONFIRM_REQUEST, VALID_CODE } from './types';

// API calls
const API = 'http://localhost:3090';
const auth = `${API}/auth`;
const confirm = `${API}/confirm`;

export const authRequest = (username, password, phone, amount) => {
  return dispatch => {
    fetch(
      auth, {
        method: 'post',
        body: JSON.stringify(
          {
            username,
            password,
            phone,
            amount
          }
        )
      }
    ).then(
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
    ).catch(
      ex => {
        console.log('Request error' + ex);
      }
    );
  }
};

export const confirmTransaction = (token, phone, amount) => {
  return dispatch => {
    fetch(
      confirm, {
        method: 'post',
        body: JSON.stringify(
          {
            token,
            phone,
            amount
          }
        )
      }
    ).then(
      res => {
        return res.json();
      }
    ).then(
      json => {
        dispatch(
          {
            type: CONFIRM_REQUEST,
            payload: json,
          }
        );
      }
    ).catch(
      ex => {
        console.log('Request error' + ex);
      }
    );
  }
};

export const validCode = (phone, amount) => {
  console.log('action ran');
  return {
    type: VALID_CODE,
    payload: { phone, amount }
  }
};