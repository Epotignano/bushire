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
          <div className="ui column">
            <img className="ui medium image" src="../assets/bus.jpg" />
          </div>
          <div className="ui column">
            <img className="ui medium image" src="../assets/mini_bus.png" />
          </div>
          <div className="ui column">
            <img className="ui medium image" src="../assets/mini_van.png" />
          </div>
          <div className="ui column">
            <img className="ui medium image" src="../assets/sedan.jpg" />
          </div>
          <div className="ui column">
            <img className="ui medium image" src="../assets/size_van.jpg" />
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
