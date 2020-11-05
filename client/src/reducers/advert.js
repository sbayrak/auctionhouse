import {
  GET_ADVERTS,
  GET_ADVERT,
  ACCEPT_BID,
  DELETE_ADVERT,
  CREATE_ADVERT,
  ADVERT_ERROR,
  CLEAR_ADVERT,
  ADD_BID,
} from '../actions/types';

const initialState = {
  advert: {},
  adverts: {},
  comments: [],
  error: {},
  loading: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_ADVERTS:
      return {
        ...state,
        adverts: payload,
        loading: false,
      };
    default:
      return state;
  }
}