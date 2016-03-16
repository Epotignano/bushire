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

var uid = localStorage.getItem(UidRef);

class NavBar extends React.Component {
  render() {
    const instance = new Firebase(FireRef);
    const { router } = this.context;

    return (
      <nav className="ui menu">
              <Link className="item" to="/">Airport Transfers</Link>
              <Link className="item" to="/">Charters & Hill</Link>
              <Link className="item" to="/">Fleet</Link>
              <Link className="item" to="/">Optional services</Link>
      </nav>
    )
  }
}

NavBar.contextTypes = {
  router: PropTypes.any
};

var mapStateProps = function(state) {
  const { auth, user } = state;

  return  {
    auth,user
  }
};

export default connect(mapStateProps)(NavBar);
