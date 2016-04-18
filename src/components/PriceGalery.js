import React, {PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Dropdown, Text, Icon, Menu, Item } from "react-semantify";
import { Link } from "react-router";
import ImageBus from "../assets/bus.jpg";
import ImageMiniBus from "../assets/mini_bus.png";
import ImageMiniVan from "../assets/mini_van.png";
import ImageSedan from "../assets/sedan.jpg";
import ImageSizeVan from "../assets/size_van.jpg";

//var uid = localStorage.getItem(UidRef);

class PriceGalery extends React.Component {
  render() {
    //const instance = new Firebase(FireRef);
    const { router } = this.context;

    return (
      <div className="ui equal width three column center aligned doubling grid container">
          <div className="ui column">
            <img className="ui medium image" src={ImageBus} />
          </div>
          <div className="ui column">
            <img className="ui medium image" src={ImageMiniBus} />
          </div>
          <div className="ui column">
            <img className="ui medium image" src={ImageMiniVan} />
          </div>
          <div className="ui column">
            <img className="ui medium image" src={ImageSedan} />
          </div>
          <div className="ui column">
            <img className="ui medium image" src={ImageSizeVan} />
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
