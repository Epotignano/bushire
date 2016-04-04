import React from 'react';

import {render} from 'react-dom';
import { Provider } from 'react-redux';

import { Router, Route, browserHistory, hashHistory, IndexRoute } from 'react-router'

import App from './containers/App';
import AboutUs from './containers/AboutUs';
import Contact from './containers/Contact';
import Dashboard from './containers/Dashboard';
import Login from './containers/Login';
import ProfileFlowContainer from './containers/profileFlow/Container';
import Forbidden from './containers/Forbidden';
import Auth from './containers/Auth';
import Register from './containers/Register';
import ListVehicle from './containers/admin/ListVehicle';
import About from './containers/admin/About';
import ListServices from './containers/admin/ListServices';
import configureStore from './store/configureStore';

import injectTapEventPlugin from 'react-tap-event-plugin';
import './styles/styles.scss'; //Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.
import '../node_modules/jquery/dist/jquery';

require('../semantic/dist/semantic');
require('../semantic/dist/semantic.min.css');

import { getAbout } from "./actions/AboutActions";
import { startListeningToServices } from "./actions/ServiceActions";
import { startListeningToVehicles } from "./actions/VehicleActions";


const store = configureStore();
injectTapEventPlugin();

render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route name="forbidden" component={Forbidden}/>
        <Route name="app" path="/app" component={App}>
          <IndexRoute component={Dashboard} name="dashboard"/>
          <Route name="userFlow" path="/app/profile" component={ProfileFlowContainer}>
        </Route>
      </Route>
      <Route name="aboutUs" path="/about" component={AboutUs} />
      <Route name="contact" path="/contact" component={Contact} />
      <Route name="access" path="/access" component={Auth}>
        <Route name="login" path="/access/login" component={Login}/>
        <Route name="about" path="/access/about" component={About}/>
        <Route name="services" path="/access/services" component={ListServices}/>
        <Route name="vehicle" path="/access/vehicles" component={ListVehicle}/>
        <Route name="register" path="/access/register" component={Register}/>
      </Route>
    </Router>
  </Provider>, document.getElementById('app')
);

setTimeout(()=>{
  store.dispatch(getAbout());
  store.dispatch(startListeningToServices());
  store.dispatch(startListeningToVehicles());
});