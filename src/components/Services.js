import React, {PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Dropdown, Text, Icon, Menu, Item } from "react-semantify";
import { Link } from "react-router";

//var uid = localStorage.getItem(UidRef);

class Services extends React.Component {
  render() {
    //const instance = new Firebase(FireRef);
    const { router } = this.context;

    return (
      <div className="ui grid">
        <div className="four wide column">
          <img className="ui tiny circular right floated image" src="../assets/image.png" />
        </div>
        <div className="twelve wide mobile four wide computer column">
          <div className="ui header red">header 1</div>
          <p>Lorem ipsum Pariatur aliqua ea irure culpa fugiat ad in mollit proident velit consectetur do</p>
        </div>
        <div className="four wide mobile two wide computer column">
          <img className="ui tiny circular right floated image" src="../assets/image.png" />
        </div>
        <div className="twelve wide mobile four wide computer column">
          <div className="ui header red">header 2</div>
          <p>Lorem ipsum Pariatur aliqua ea irure culpa fugiat ad in mollit proident velit consectetur do</p>
        </div>
        <div className="four wide column">
          <img className="ui tiny circular right floated image" src="../assets/image.png" />
        </div>
        <div className="twelve wide mobile four wide computer column">
          <div className="ui header red">header 3</div>
          <p>Lorem ipsum Pariatur aliqua ea irure culpa fugiat ad in mollit proident velit consectetur do</p>
        </div>
        <div className="four wide mobile two wide computer column">
          <img className="ui tiny circular right floated image" src="../assets/image.png" />
        </div>
        <div className="twelve wide mobile four wide computer column">
          <div className="ui header red">header 4</div>
          <p>Lorem ipsum Pariatur aliqua ea irure culpa fugiat ad in mollit proident velit consectetur do</p>
        </div>
      </div>
    );
  }
}

Services.contextTypes = {
  router: PropTypes.any
};

var mapStateProps = function(state) {
  const { auth, user } = state;

  return  {
    auth,user
  };
};

export default connect(mapStateProps)(Services);
