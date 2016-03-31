/**
 * Created by epotignano on 25/02/16.
 */
import { FireRef, UidRef } from '../constants/Commons';
import Firebase from 'firebase';
import { getUser } from '../actions/UserActions';
import { getAbout } from '../actions/AboutActions';

import {
    LOGIN_ATTEMP,
    LOGIN_FAILURE,
    LOGIN_SUCCESS,
    REGISTER_ATTEMP,
    LOGIN_ATTEMP_FACEBOOK,
   REGISTER_SUCCESS,
   REGISTER_FAILURE,
   LOGOUT,
   RESET_PASSWORD_ATTEMP,
   RESET_PASSWORD_SUCCESS,
   RESET_PASSWORD_FAILURE
} from "../constants/ActionTypes";

function LoginAttempt (credentials) {
  return {
    type: LOGIN_ATTEMP,
    isFetching: true,
    isAuthenticated: false,
    credentials
  }
}

function LoginAttempFacebook() {
  return {
    type: LOGIN_ATTEMP_FACEBOOK,
    isFetching: true,
    isAuthenticated: false
  }
}

function loginSuccess(user, loginType) {
  return {
    type: LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    loginType,
    token: user.token
  }
}

function loginError(error) {
  return {
    type: LOGIN_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    code: error.code
  }
}

function RegisterAttemp() {
 return {
    type: REGISTER_ATTEMP,
    isFetching: true,
    isAuthenticated: false
  }
}

function RegisterFailure(error) {
 return {
    type: REGISTER_FAILURE,
    isFetching: true,
    code: error.code
  }
}

function RegisterSuccess(user) {
 return {
    type: REGISTER_SUCCESS,
    isFetching: false,
    user
  }
}

export function loginUser(credentials) {
  return dispatch => {
    let _fireRef = new Firebase(FireRef);
    dispatch(LoginAttempt(credentials));
    _fireRef.authWithPassword({email: credentials.username, password: credentials.password }, (err, authData)  => {
      if(err){
        dispatch(loginError(err));
        //return Promise.reject(err)
      } else{
        localStorage.setItem(UidRef, authData.uid);
        dispatch(loginSuccess(authData));
        getUser();
        dispatch(getAbout());
      }
    });
  }
}

export function registerUser(userData) {
  return dispatch => {
    var _modifiedEmail = userData.email.replace(/\./g, '');
    var _optins = new Firebase(FireRef + 'optins/' + _modifiedEmail);

    var _userData = {
      email: userData.email,
      password : Math.random().toString(36).slice(-8)
    };

    _optins.set(_userData, (error)=> {
      if(error) {
        dispatch(RegisterFailure(error));
        //return Promise.reject(_userData)
      }
      else {
        // Dispatch the success action
        dispatch(RegisterSuccess(_userData));
        dispatch(loginUser({username: _userData.email, password: _userData.password}));
      }
    });
  }
}

export function logoutUser() {
  return dispatch => {
      let _fireRef = new Firebase(FireRef);
      dispatch({type:LOGOUT}); // don't really need to do this, but nice to get immediate feedback
      localStorage.removeItem(UidRef);
      _fireRef.unauth();
    }
}

export function resetPassword(email) {
  return dispatch => {
      let _fireRef = new Firebase(FireRef);
      console.log("en reset password " + email);
      dispatch({type:RESET_PASSWORD_ATTEMP});
      _fireRef.resetPassword({email: email}, function(error) {
      if (error) {
        switch (error.code) {
          case "INVALID_USER":
            dispatch({type:RESET_PASSWORD_FAILURE, error: "The specified user account does not exist."});
            break;
          default:
            dispatch({type:RESET_PASSWORD_FAILURE, error: "Error resetting password:" + error});
        }
      } else {
        console.log("Password reset email sent successfully!");
        dispatch({type:RESET_PASSWORD_SUCCESS, message: 'Send email correctly'});
      }
    });
    }
}