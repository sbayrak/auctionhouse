import {
  GET_ADVERTS,
  GET_ADVERT,
  ACCEPT_BID,
  DELETE_ADVERT,
  CREATE_ADVERT,
  ADVERT_ERROR,
  ADD_BID,
  GET_MY_ADVERTS,
  CLEAR_ADVERT,
  ADD_COMMENT,
  DELETE_COMMENT,
} from '../actions/types';
import axios from 'axios';
import { setAlert } from './alert';

// GET ALL ADVERTS
export const getAdverts = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ADVERT,
  });

  try {
    const res = await axios.get('/api/adverts');
    dispatch({
      type: GET_ADVERTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ADVERT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// GET ADVERT BY ID
export const getAdvertById = (advertId) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/adverts/advert/${advertId}`);
    dispatch({
      type: GET_ADVERT,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ADVERT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// PLACE A BID (SingleAdvert.js)
export const placeBid = (advertId, bid) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const res = await axios.put(`/api/adverts/advert/${advertId}`, bid, config);

    dispatch({
      type: ADD_BID,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ADVERT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const addComment = (advertId, text) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const res = await axios.post(
      `/api/adverts/comment/${advertId}`,
      text,
      config
    );
    dispatch({
      type: ADD_COMMENT,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ADVERT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
// DELETE COMMENT
export const deleteComment = (advertId, commentId) => async (dispatch) => {
  try {
    const res = await axios.delete(
      `/api/adverts/comment/${advertId}/${commentId}`
    );

    dispatch({
      type: DELETE_COMMENT,
      payload: commentId,
    });
  } catch (err) {
    dispatch({
      type: ADVERT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const addAdvert = ({ title, text, location }) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = JSON.stringify({
    title: title,
    text: text,
    location: location,
  });

  try {
    const res = await axios.post(`/api/adverts/create`, body, config);
    dispatch({
      type: CREATE_ADVERT,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ADVERT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const getMyAdverts = () => async (dispatch) => {
  try {
    const res = await axios.get(`/api/adverts/myadverts`);
    dispatch({
      type: GET_MY_ADVERTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ADVERT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
