import React, {PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Dropdown, Text, Icon, Menu, Item } from "react-semantify";
import { Link } from "react-router";

//var uid = localStorage.getItem(UidRef);

class PriceGalery extends React.Component {
  render() {
    //const instance = new Firebase(FireRef);
    const { router } = this.context;

    return (
      <div className="ui equal width three column center aligned doubling grid container">
          <div className="column">
            <img className="ui medium image" src="../assets/image.png" />
          </div>
          <div className="column">
            <img className="ui medium image" src="../assets/image.png" />
          </div>
          <div className="column">
            <img className="ui medium image" src="../assets/image.png" />
          </div>
          <div className="column">
            <img className="ui medium image" src="../assets/image.png" />
          </div>
          <div className="column">
            <img className="ui medium image" src="../assets/image.png" />
          </div>
          <div className="column">
            <img className="ui medium image" src="../assets/image.png" />
          </div>
      </div>
    );
  }
}

PriceGalery.contextTypes = {
  router: PropTypes.any
};

var mapStateProps = function(state) {
  const { auth, user } = state;

  return  {
    auth,user
  };
};

export default connect(mapStateProps)(PriceGalery);
