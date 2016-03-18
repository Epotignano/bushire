// This file bootstraps the app with the boilerplate necessary
// to support hot reloading in Redux
import React, {PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { default as Header } from "../components/Header";
import { default as NavBar } from "../components/NavBar";
import { default as Banner } from "../components/Banner";
import { default as Services } from "../components/Services";
import { default as Pos } from "../components/Pos";
import { default as PriceGalery } from "../components/PriceGalery";
import Firebase from 'firebase';
import { FireRef } from '../constants/Commons';
import { getUser } from '../actions/UserActions'

class App extends React.Component{

  componentDidMount() {
    let _instance = new Firebase(FireRef);
    var _status = _instance.getAuth();
    if(_status) {
      getUser();
    }
  }


  render() {
    return (
      <div>
        <Header />
        <NavBar />
        <Banner />
        <main className="ui page main content-container">
          <Services />
          <Pos />
          <PriceGalery />
          <div className="row">
            {this.props.children}
          </div>
        </main>
      </div>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect()(App);
