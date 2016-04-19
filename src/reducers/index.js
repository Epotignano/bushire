import { combineReducers } from 'redux';
import auth from './Auth';
import user from './User';
import about from './About';
import service from './Service';
import vehicle from './Vehicle';
import days from './Days';
const rootReducer = combineReducers({
  auth,
  user,
  about,
  service,
  vehicle,
  days
});

export default rootReducer;

