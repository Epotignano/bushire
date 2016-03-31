/**
 * Created by epotignano on 26/02/16.
 */

import { 
    LOGIN_ATTEMP,
    LOGIN_FAILURE,
    LOGIN_SUCCESS,
    REGISTER_ATTEMP,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    LOGOUT,
    RESET_PASSWORD_ATTEMP,
    RESET_PASSWORD_SUCCESS,
    RESET_PASSWORD_FAILURE
} from "../constants/ActionTypes";

function auth(state = {
  isFetching: false,
  isAuthenticated: localStorage.getItem('mcw_uid') ? true : false,
  isAttempPasswordReset:false,
  textResetPassword:''
}, action) {
  switch (action.type) {
    case LOGIN_ATTEMP:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false,
        user: action.creds
      });
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: true,
        errorMessage: ''
      });
    case LOGIN_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        errorMessage: LOGIN_FAILURE,
        errorFireBase: action.code 
      });
    case REGISTER_ATTEMP:
        return Object.assign({}, state, {
            isFetching: true,
            provider: action.provider
        });
    case REGISTER_FAILURE:
        return Object.assign({}, state, {
            isFetching: false,
            registerError: action.error
        });
    case REGISTER_SUCCESS:
        return Object.assign({}, state, {
            isFetching: false,
            registerSuccess: true
        });
    case LOGOUT:
        return Object.assign({}, state, {
            isFetching: false,
            isAuthenticated: false
        });
    case RESET_PASSWORD_ATTEMP:
        return Object.assign({}, state, {
            isAttempPasswordReset: true
        });
    case RESET_PASSWORD_SUCCESS:
        return Object.assign({}, state, {
            isPasswordReset: true,
            message: action.message,
            textResetPassword:''
        });
    case RESET_PASSWORD_FAILURE:
        return Object.assign({}, state, {
            isPasswordReset: false,
            errorMessage: LOGIN_FAILURE,
            errorFireBase: action.error,
            textResetPassword:''
        });
    default:
      return state
  }
}

export default auth;
