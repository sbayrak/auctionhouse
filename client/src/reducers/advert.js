import {
  GET_ADVERTS,
  GET_ADVERT,
  ACCEPT_BID,
  DELETE_ADVERT,
  CREATE_ADVERT,
  ADVERT_ERROR,
  CLEAR_ADVERT,
  ADD_BID,
  GET_MY_ADVERTS,
  ADD_COMMENT,
  DELETE_COMMENT,
  CLEAR_NEW,
} from '../actions/types';

const initialState = {
  advert: {},
  adverts: null,
  comments: [],
  my_adverts: null,
  new_advert: null,
  error: null,
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
    case GET_ADVERT:
      return {
        ...state,
        advert: payload,
        loading: false,
        new_advert: null,
      };
    case GET_MY_ADVERTS:
      return {
        ...state,
        my_adverts: payload,
        loading: false,
      };
    case CLEAR_ADVERT:
      return {
        ...state,
        advert: null,
        adverts: null,
        error: null,
        loading: false,
      };
    case CLEAR_NEW:
      return {
        ...state,
        new_advert: null,
        loading: false,
      };
    case ADD_BID:
      return {
        ...state,
        advert: { ...state.advert, bids: payload },
        loading: false,
      };
    case ADD_COMMENT:
      return {
        ...state,
        advert: { ...state.advert, comments: payload },
        loading: false,
      };
    case ACCEPT_BID:
      return {
        ...state,
        my_adverts: payload,
        loading: false,
      };
    case DELETE_COMMENT:
      return {
        ...state,
        advert: {
          ...state.advert,
          comments: state.advert.comments.filter(
            (comment) => comment._id !== payload
          ),
        },
        loading: false,
      };
    case DELETE_ADVERT:
      return {
        ...state,
        my_adverts: payload,
        loading: false,
      };

    case CREATE_ADVERT:
      return {
        ...state,
        adverts: [...state.adverts, payload],
        new_advert: payload,
        loading: false,
      };
    // case DELETE_ADVERT:
    //   return {
    //     ...state,
    //     adverts: state.adverts.filter((advert) => advert._id !== payload),
    //     loading: false,
    //   };
    case ADVERT_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
