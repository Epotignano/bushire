/**
 * Created by epotignano on 19/02/16.
 */

import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router";
import Firebase from 'firebase';
import { FireRef, UidRef } from '../constants/Commons';

var uid = localStorage.getItem(UidRef);

class NavBar extends React.Component {
  componentDidMount() {
    $('.main.menu').visibility({
        type: 'fixed'
      });
      $('.overlay').visibility({
        type: 'fixed',
        offset: 100
      });

      // show dropdown on hover
      $('.main.menu  .ui.dropdown').dropdown({
        on: 'hover'
      });
  }
  render() {
    const instance = new Firebase(FireRef);
    const { router } = this.context;

    return (

      <nav className="ui borderless main menu">
        <div class="item">
          <img  className="ui image small" src="../assets/logo.png"/>
        </div>
        <div className="ui text container">

          <a href="#" className="item">Airport Transfers</a>
          <a href="#" className="item">Charters & Hill</a>
          <a href="#" className="item">Fleet</a>
          <a href="#" className="item">Optional services & Hill</a>
          <Link to="/about" className="item">About us</Link>
          <a href="#" className="item">FAQ</a>
        </div>
      </nav>
    )
  }
}

NavBar.contextTypes = {
  router: PropTypes.any
};

var mapStateProps = function(state) {
  const { auth, user } = state;

  return {
    auth,user
  }
};

export default connect(mapStateProps)(NavBar);
