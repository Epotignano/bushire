import React, {PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Dropdown, Text, Icon, Menu, Item } from "react-semantify";
import { Link } from "react-router";

//var uid = localStorage.getItem(UidRef);

class NavBarFooter extends React.Component {
  render() {
    const { router } = this.context;

    return (
        <div className="ui center aligned grid">
          <div className="red row">
          <div className="four wide mobile one wide computer column">
              <Link className="item" to="/">Home</Link>
          </div>
          <div className="eight wide mobile two wide computer column">
              <Link className="item" to="/">Term and Conditions</Link>
          </div>
          <div className="four wide mobile one wide computer column">
              <Link className="item" to="/">Privacy Policy</Link>
          </div>
          <div className="three wide mobile one wide computer  column">
              <Link className="item" to="/">Footermenu</Link>
          </div>
          <div className="three wide mobile one wide computer  column">
              <Link className="item" to="/">Footer menu</Link>
          </div>
          <div className="three wide mobile one wide computer  column">
              <Link className="item" to="/">Footmenu</Link>
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
