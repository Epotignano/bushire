import React, {PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Dropdown, Text, Icon, Menu, Item } from "react-semantify";
import { Link } from "react-router";
import ImageVisaMaster from "../assets/logo_visa_master.png";
import ImageAmerican from "../assets/logo_americanexp.png";

//var uid = localStorage.getItem(UidRef);

class Footer extends React.Component {
  render() {
    const { router } = this.context;

    return (
      <div className="ui center aligned four column doubling grid">
        <div className="row gray">
          <div className="two wide column">
            <h3 className="ui red header">Get to Know US</h3>
            <div className="ui link list">
              <Link className="item" to="/">Link 1</Link>
              <Link className="item" to="/">Link 2</Link>
              <Link className="item" to="/">Link 3</Link>
              <Link className="item" to="/">Link 4</Link>
              <Link className="item" to="/">Link 5</Link>
              <Link className="item" to="/">Link 6</Link>
              <Link className="item" to="/">Link 7</Link>
            </div>
          </div>
          <div className="two wide column">
            <h3 className="ui red header">Need help</h3>
          </div>
          <div className="three wide column">
            <h3 className="ui red header">Bussines and Partners</h3>
          </div>
          <div className="two wide column">
            <h3 className="ui red header">Payment Methods</h3>
            <div className="ui one column grid">
              <div className="column">
                <img className="ui medium image" src={ImageVisaMaster} />
              </div>
              <div className="column">
                <img className="ui tiny image" src={ImageAmerican} />
              </div>
            </div>
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
