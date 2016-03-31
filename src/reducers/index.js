import { combineReducers } from 'redux';
import auth from './Auth';
import user from './User';
import about from './About';
import service from './Service';
const rootReducer = combineReducers({
  auth,
  user,
  about,
  service
});

export default rootReducer;

