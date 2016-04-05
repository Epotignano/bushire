/**
 * Created by epotignano on 19/02/16.
 */

import React, {PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Dropdown, Text, Icon, Menu, Item } from "react-semantify";
import { Link } from "react-router";
import UserAvatar  from '../userAvatar';
import Firebase from 'firebase';
import { FireRef, UidRef } from '../../constants/Commons';
import { logoutUser } from "../../actions/AuthActions";

var uid = localStorage.getItem(UidRef);
function generateRightMenu( router, store) {
    return(
      <div className="ui secondary menu">
        <a className="item" onClick={router.push.bind(null,'access/about')}>About Us</a>
        <a className="item" onClick={router.push.bind(null,'access/services')}>Services</a>
        <a className="item" onClick={router.push.bind(null,'access/vehicles')}>Vehicles</a>
        <div className="right menu">
          <a className="item" onClick={e => {
              e.preventDefault();
              store.dispatch(logoutUser());
              router.push('access/login');
              }}>Logout
          </a>
        </div>
      </div>
    );
}

class MenuAdmin extends React.Component {
  componentDidMount() {
    $('.ui.dropdown.item').dropdown();
  }

  componentDidUpdate() {
    $('.ui.dropdown.item').dropdown('refresh');
  }
  render() {
    //const instance = new Firebase(FireRef);
    const {router, store} = this.context;
    return (
      <header>   
        <div className="ui two column centered stackable grid inverted menu navbar">
          <div className="column">
            {generateRightMenu(router, store)}
          </div>
        </div>
      </header> 
    )
  }
}

MenuAdmin.contextTypes = {
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
  return {
    logout: function(){ dispatch(logoutUser()); }
  }
};

export default connect(mapStateProps, mapDispatchToProps)(MenuAdmin);
