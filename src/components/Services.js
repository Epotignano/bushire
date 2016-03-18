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
      <div className="ui four column grid centered">
        <div className="column">
          <img className="ui small circular image right" src="../assets/image.png" />
        </div>
        <div className="column">
          <p>Lorem ipsum Pariatur aliqua ea irure culpa fugiat ad in mollit proident velit consectetur do</p>
        </div>
        <div className="column">
          <img className="ui small circular image" src="../assets/image.png" />
        </div>
        <div className="column">
          <p>Lorem ipsum Pariatur aliqua ea irure culpa fugiat ad in mollit proident velit consectetur do</p>
        </div>

        <div className="column">
          <img className="ui small circular image" src="../assets/image.png" />
        </div>
        <div className="column">
          <p>Lorem ipsum Pariatur aliqua ea irure culpa fugiat ad in mollit proident velit consectetur do</p>
        </div>
        <div className="column">
          <img className="ui small circular image" src="../assets/image.png" />
        </div>
        <div className="column">
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
