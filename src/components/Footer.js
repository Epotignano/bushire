import React, {PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Dropdown, Text, Icon, Menu, Item } from "react-semantify";
import { Link } from "react-router";

//var uid = localStorage.getItem(UidRef);

class Footer extends React.Component {
  render() {
    const { router } = this.context;

    return (
      <div className="ui center aligned four column grid">
      <div className="row gray">
    <div className="two wide column">
      <h3 className="ui red header">Get to Know US</h3>
    </div>
    <div className="two wide column">
      <h3 className="ui red header">Need help</h3>
    </div>
    <div className="three wide column">
      <h3 className="ui red header">Bussines and Partners</h3>
    </div>
    <div className="two wide column">
      <h3 className="ui red header">My Shuttle</h3>
    </div>
    </div>
</div>
    );
  }
}

Footer.contextTypes = {
  router: PropTypes.any
};

var mapStateProps = function(state) {
  const { auth, user } = state;

  return  {
    auth,user
  };
};

export default connect(mapStateProps)(Footer);
