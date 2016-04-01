import { combineReducers } from 'redux';
import auth from './Auth';
import user from './User';
import about from './About';
import service from './Service';
import vehicle from './Vehicle';
const rootReducer = combineReducers({
  auth,
  user,
  about,
  service,
  vehicle
});

export default rootReducer;

