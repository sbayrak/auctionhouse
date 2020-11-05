import { combineReducers } from 'redux';
import auth from './auth';
import alert from './alert';
import profile from './profile';
import advert from './advert';

export default combineReducers({
  alert,
  auth,
  advert,
  profile,
});
