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
        <div className="ui inverted centered menu grid red">
          <div className="menu">
            <Link className="item" to="/">Link 1</Link>
            <Link className="item" to="/">Link 2</Link>
            <Link className="item" to="/">Link 3</Link>
            <Link className="item" to="/">Link 4</Link>
            <Link className="item" to="/">Link 5</Link>
            <Link className="item" to="/">Link 6</Link>
            <Link className="item" to="/">Link 7</Link>
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
