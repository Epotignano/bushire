import React, {PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Dropdown, Text, Icon, Menu, Item } from "react-semantify";
import { Link } from "react-router";
import BannerImage from "../assets/header.png";

//var uid = localStorage.getItem(UidRef);

class Banner extends React.Component {
  render() {
    //const instance = new Firebase(FireRef);
    const { router } = this.context;

    return (
      <div className="ui grid">
        <div className="ui fourteen wide column centered tablet computer only">
          <div className="ui fluid image">
            <img src={BannerImage} style={{'height':'680px'}} />
          </div>
        </div>
      </div>
    );
  }
}

Banner.contextTypes = {
  router: PropTypes.any
};

var mapStateProps = function(state) {
  const { auth, user } = state;

  return  {
    auth,user
  };
};

export default connect(mapStateProps)(Banner);
