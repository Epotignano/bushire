/**
 * Created by epotignano on 19/02/16.
 */

import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router";
import Firebase from 'firebase';
import { FireRef, UidRef } from '../constants/Commons';
import LogoImg from '../assets/logo.png';
import Rama from '../assets/rama.png';
import ButtonMenuLines from '../assets/lines.png';

var uid = localStorage.getItem(UidRef);

class NavBar extends React.Component {
  componentDidMount() {
    $('.main.menu').visibility({
        type: 'fixed'
      });
      //$('.overlay').visibility({
      //  type: 'fixed',
      //  offset: 100
      //});

      // show dropdown on hover
      $('.main.menu  .ui.dropdown').dropdown({
        on: 'hover'
      });
      $('.right.menu.open').on("click",function(e){
        e.preventDefault();
      $('.ui.vertical.menu').toggle();
      });

      $('.ui.dropdown').dropdown();
  }
  render() {
    const instance = new Firebase(FireRef);
    const { router } = this.context;

    return (
      <div className="ui grid ">
        <div className="computer tablet only row ">
          <nav className="ui borderless main menu rama navbarImages">
            <div className="item" id="rama">
            </div>
            <div className="item">
              <img  className="ui image small" src={LogoImg}/>
            </div>
            <div className="item" >
            <div className="ui grid ">
            <div className='right aligned five column row'>
              <div className=" column "> </div>
              <div className=" column "> </div>
              <div className=" column "> </div>
              <div className="column ">
                <button type="button" className="ui rounded button green">LINE</button>
                <button type="button" className="ui button teal"> <Link  className="quotelink" to="/contact" >QUOTE</Link></button>
              </div>
              <div className=" column "> </div>
            </div>
            <div className="row">
              <a href="#" className="item bigText">Airport Transfers</a>
               <a href="#" className="item bigText">Fleet</a>
              <Link to="/optionalservices" className="item bigText">Optional services & Hill</Link>
              <Link to="/about" className="item bigText">About us</Link>
              <a href="#" className="item bigText">FAQ</a>
              </div>
            </div>
            </div>
            <div className="item right" id="ramaRight">
            </div>
          </nav>
        </div>
        <div className="mobile only row">
          <div className="ui navbar menu">
            <div className="right menu open">
              <a href="#" className="menu item responsive">
                <img className="ui image mini" src={ButtonMenuLines}/>
              </a>
            </div>
          </div>
          <div className="ui vertical navbar menu">
            <a href="" className="active item">Home</a>
            <a href="" className="item">Airport Transfers</a>
            <a href="" className="item">Charters & Hill</a>
            <a href="" className="item">Fleet</a>
            <a href="" className="item">Optional services & Hill</a>
            <Link to="/about" className="item">About us</Link>
            <a href="#" className="item">FAQ</a>
          </div>
        </div>
      </div>
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
