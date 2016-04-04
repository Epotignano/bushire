/**
 * Created by epotignano on 19/02/16.
 */

import React, {PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Dropdown, Text, Icon, Menu, Item } from "react-semantify";
import { Link } from "react-router";
import UserAvatar  from './userAvatar';
import Firebase from 'firebase';
import { FireRef, UidRef } from '../constants/Commons';
import { logoutUser } from "../actions/AuthActions";

var uid = localStorage.getItem(UidRef);
function generateRightMenu(isAuthenticated, router, store) {
  if(isAuthenticated) {
    return(
    <a className="ui dropdown item"><UserAvatar className="item"/>
      <i className="dropdown icon"></i>
      <div className="menu">
        <div className="item" onClick={ router.push('app/' + uid + '/audition/creation')}>New audition</div>
        <div className="ui divider"></div>
        <div className="item" onClick={e => {
          e.preventDefault();
          store.dispatch(logoutUser());
        }}>Logout</div>
      </div>
    </a>
    )
  }

  return(
      <Link className="item" to="/access/login">ログイン</Link>
  )
}

class Header extends React.Component {
  componentDidMount() {
    $('.ui.dropdown.item').dropdown();
  }

  componentDidUpdate() {
    $('.ui.dropdown.item').dropdown('refresh')
  }
  render() {
    const instance = new Firebase(FireRef);
    const { router, store } = this.context;
    return (
      <header>   
        <div className="ui two column centered stackable grid inverted menu navbar pink">
          <div className="column">
            Japan wide bus & Limo Charter services
          </div>
          <div className="hsearch ui column centered aligned category search "> 
            <div className="ui icon input">
                <input className="prompt" type="text" placeholder="Search..."/>
                <i className="search icon"></i>
            </div>
            <div className="results"></div>    
          </div>
        </div>
      </header> 
    )
  }
}

Header.contextTypes = {
  router: PropTypes.any,
  store: React.PropTypes.any
};

var mapStateProps = function(state) {
  const { auth, user } = state;

  return  {
    auth,user
  }
};

var mapDispatchToProps = function(dispatch){
  console.log(dispatch);
  return {
    logout: function(){ dispatch(logoutUser()); }
  }
};

export default connect(mapStateProps, mapDispatchToProps)(Header);
