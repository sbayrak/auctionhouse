import {
  GET_ADVERTS,
  GET_ADVERT,
  ACCEPT_BID,
  DELETE_ADVERT,
  CREATE_ADVERT,
  ADVERT_ERROR,
  ADD_BID,
  CLEAR_ADVERT,
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
