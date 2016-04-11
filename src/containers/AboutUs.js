// This file bootstraps the app with the boilerplate necessary
// to support hot reloading in Redux
import React, {PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { default as Header } from "../components/Header";
import { default as NavBar } from "../components/NavBar";
import { default as Banner } from "../components/Banner";
import { default as Services } from "../components/Services";
import { default as PriceGalery } from "../components/PriceGalery";
import { default as Footer } from "../components/Footer";
import { default as NavBarFooter } from "../components/NavBarFooter";
import { default as Copyright } from "../components/Copyright";
import Firebase from 'firebase';
import { FireRef } from '../constants/Commons';
import { getUser } from '../actions/UserActions'

class AboutUs extends React.Component{

  render() {
    return (
      <div>
        <Header />
        <NavBar />
        <div className="ui one column grid container">
          <div className="column">
            <h1 className="ui header red">About US</h1>
            <div dangerouslySetInnerHTML={{__html: this.props.output}} />
          </div>
        </div>
        <NavBarFooter />
        <Copyright />
      </div>
    );
  }
}

function mapStateProps(state) {
    const { about } = state
    const { output } = about;

    return {
        output
    };
}

AboutUs.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect(mapStateProps)(AboutUs);
