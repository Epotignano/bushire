import React, {PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Dropdown, Text, Icon, Menu, Item } from "react-semantify";
import { Link } from "react-router";
import ImageAirport from "../assets/airplanemode.png";

//var uid = localStorage.getItem(UidRef);

class Services extends React.Component {
  render() {
    //const instance = new Firebase(FireRef);
    const { router } = this.context;

    return (
      <div className="ui one column centered container grid">
        <div className="ui column">
          <div className="ui grid">
            <div className="one wide column">
              <div className="ui centered header red"><i className="material-icons">airplanemode_active</i></div>
            </div>
            <div className="fifteen wide column">
              <div className="ui header red">Airport Transfers</div>
              <p>Connecting the main airport and your accommodation, it is the most popular service.Driver or staff  goes up to the pick-up to the arrival gate, without any worry about getting lost, you can use it.
              </p>
            </div>
          </div>
        </div>
        <div className="ui column">
          <div className="ui grid">
            <div className="one wide column">
              <div className="ui centered header red"><i className="material-icons">directions_car</i></div>
            </div>
            <div className="fifteen wide column">
              <div className="ui header red">Charter & Hire</div>
              <p>あなたのご希望に沿った場所・行程でバスやリモの貸切ができます。
              家族旅行や企業研修、旅行会社様の団体旅行など、様々なニーズに合わせて日本滞在をお楽しみ頂けます。</p>
            </div>
          </div>
        </div>
        <div className="ui column">
          <div className="ui grid">
            <div className="one wide column">
              <div className="ui centered header red"><i className="material-icons">settings</i></div>
            </div>
            <div className="fifteen wide column">
              <div className="ui header red">Optional services</div>
          <p>Lお車の手配だけでなく、ガイドや荷物車の手配、レストラン予約代行といったオプショナルサービスも行っています。</p>
            </div>
          </div>
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
