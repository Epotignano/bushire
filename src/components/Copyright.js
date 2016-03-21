import React, {PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Dropdown, Text, Icon, Menu, Item } from "react-semantify";
import { Link } from "react-router";

//var uid = localStorage.getItem(UidRef);

class Copyright extends React.Component {
  render() {
    const { router } = this.context;

    return (
        <div className="ui centered grid">
          <footer>
            <small>Copyright</small>
          </footer>
        </div>
    );
  }
}

Copyright.contextTypes = {
  router: PropTypes.any
};

var mapStateProps = function(state) {
  const { auth, user } = state;

  return  {
    auth,user
  };
};

export default connect(mapStateProps)(Copyright);
