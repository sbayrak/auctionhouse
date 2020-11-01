import axios from 'axios';
import { setAlert } from './alert';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_PROFILE,
  AUTH_ERROR,
} from './types';
import setAuthToken from '../utils/setAuthToken';

// Load User
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get('/api/auth');
    dispatch({
      type: USER_LOADED,

      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// Register User
export const register = ({
  company,
  companyfullname,
  taxnum,
  taxname,
  email,
  password,
  type,
  website,
  location,
}) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({
    company,
    companyfullname,
    taxnum,
    taxname,
    email,
    password,
    type,
    website,
    location,
  });
  try {
    const res = await axios.post('/api/users', body, config);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

// Login User
export const login = ({ email, password }) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({
    email,
    password,
  });
  try {
    const res = await axios.post('/api/auth', body, config);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

export const logout = () => async (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
  dispatch({
    type: CLEAR_PROFILE,
  });
};
