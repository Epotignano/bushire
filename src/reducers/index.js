import { combineReducers } from 'redux';
import auth from './Auth';
import user from './User';
import about from './About';
const rootReducer = combineReducers({
  auth,
  user,
  about
});

export default rootReducer;

