import React, {PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Dropdown, Text, Icon, Menu, Item } from "react-semantify";
import { Link } from "react-router";
import ImageRama from "../assets/rama.png";

//var uid = localStorage.getItem(UidRef);

class NavBarFooter extends React.Component {
  render() {
    const { router } = this.context;

    return (
      <div className="ui internally celled grid">
        <div className="pink row">
          <div className="three wide computer only column" id="rama">
            <img className="ui image small ramaFooterLeft" src={ImageRama} />
          </div>
          <div className="sixteen wide mobile ten wide computer only column">
            <div className="ui center aligned grid">
              <div className="five wide mobile two wide computer column">
                <Link className="item" to="/">Home</Link>
              </div>
              <div className="six wide mobile three wide computer column">
                <Link className="item" to="/">Term and Conditions</Link>
              </div>
              <div className="five wide mobile three wide computer column">
                <Link className="item" to="/">Privacy Policy</Link>
              </div>
              <div className="five wide mobile two wide computer column">
                <Link className="item" to="/">Footermenu</Link>
              </div>
              <div className="five wide mobile two wide computer column">
                <Link className="item" to="/">Footer menu</Link>
              </div>
              <div className="six wide mobile two wide computer column">
                <Link className="item" to="/">Footmenu</Link>
              </div>
            </div>
          </div>
          <div className="three wide computer only column" id="rama">
            <img className="ui image small ramaFooterRight" src={ImageRama} />
          </div>
        </div>
      </div>
    );
  }
}

NavBarFooter.contextTypes = {
  router: PropTypes.any
};

var mapStateProps = function(state) {
  const { auth, user } = state;

  return  {
    auth,user
  };
};

export default connect(mapStateProps)(NavBarFooter);
