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
import { default as Footer } from "../components/Footer";
import { default as NavBarFooter } from "../components/NavBarFooter";
import { default as Copyright } from "../components/Copyright";
import Firebase from 'firebase';
import { FireRef } from '../constants/Commons';
import { getUser } from '../actions/UserActions'

class Contact extends React.Component{
  componentDidMount(){
    $('.ui.radio.checkbox').checkbox();
  }
  render() {
    return (
      <div>
        <Header />
        <NavBar />
        <div className="ui one column grid container">
          <div className="column">
            <form className="ui form">
              <h1 className="ui dividing header red">ペ ー ジ タ イ ト ル 　 Free Quote ?</h1>
              <div className="field">
                <label>Name</label>
                <div className="fields">
                  <div className="two wide field">
                    <select className="ui fluid dropdown">
                      <option value="Mr">Mr</option>
                      <option value="Mrs">Mrs</option>
                      <option value="Ms">Ms</option>
                    </select>
                  </div>
                  <div className="fourteen wide field">
                    <input type="text" name="shipping[last-name]" placeholder="Name" />
                  </div>
                </div>
              </div>
              <div className="two fields">
                <div className="field">
                  <label>Group Name</label>
                  <input type="text" name="shipping[groupName]" placeholder="Group Name" />
                </div>
                <div className="field">
                  <label>Country</label>
                  <select className="ui fluid dropdown">
                    <option value="Japan">Japan</option>
                  </select>
                </div>
              </div>
              <div className="field">
                <div className="fields">
                  <div className="eight wide field">
                    <label>Email</label>
                    <input type="text" name="shipping[email]" placeholder="Email" />
                  </div>
                  <div className="two wide field">
                    <label>Country Code</label>
                    <input type="text" name="shipping[countryCode]" placeholder="Country code +81" />
                  </div>
                  <div className="six wide field">
                    <label>Phone Number</label>
                    <input type="text" name="shipping[phoneNumber]" placeholder="Phone Number" />
                  </div>
                </div>
              </div>
              <div className="two fields">
                <div className="field">
                  <label>Service Type</label>
                  <select className="ui fluid dropdown">
                    <option value="Airport">Airport</option>
                    <option value="Charter&hire">Charter & hire</option>
                    <option value="other">その他御社サービス 選択</option>
                  </select>
                </div>
                <div className="field">
                  <label>Vehicle</label>
                  <select className="ui fluid dropdown">
                    <option value="Sedan">Sedan</option>
                    <option value="Mini Van">Mini Van</option>
                    <option value="Large Van">Large Van</option>
                    <option value="Mini Bus">Mini Bus</option>
                    <option value="Small Bus">Small Bus</option>
                    <option value="Midi Bus">Midi Bus</option>
                    <option value="Large Bus">Large Bus</option>
                  </select>
                </div>
              </div>
              <div className="two fields">
                <div className="field">
                  <label>Passengers</label>
                  <input type="text" name="shipping[numPassengers]" placeholder="Number of Passengers" />
                </div>
                <div className="field">
                  <label>Number of Suitcases</label>
                  <input type="text" name="shipping[numSuitcases]" placeholder="Number of Suitcases" />
                </div>
              </div>
              <h3 className="ui dividing header">Day 1</h3>
              <div className="field">
                <div className="fields">
                  <div className="two wide field">
                    <label>Pick Up Time</label>
                    <input type="text" name="shipping[pickUpTime]" placeholder="Pick up time" />
                  </div>
                  <div className="fourteen wide field">
                    <label>Pick Up Location</label>
                    <input type="text" name="shipping[pickUpLocation]" placeholder="Pick Up Location" />
                  </div>
                </div>
              </div>
              <div className="field">
                <div className="fields">
                  <div className="two wide field">
                    <label>Drop Off Time</label>
                    <input type="text" name="shipping[dropOfTime]" placeholder="Drop Of Time" />
                  </div>
                  <div className="fourteen wide field">
                    <label>Drop Of Location</label>
                    <input type="text" name="shipping[dropOfLocation]" placeholder="Drop Of Location" />
                  </div>
                </div>
              </div>
              <div className="field">
                <label>Trip Itinerary</label>
                <textarea></textarea>
              </div>
              <div className="grouped fields">
                <label htmlFor="interpret">Interpreting Service</label>
                <div className="field">
                  <div className="ui radio checkbox">
                    <input type="radio" name="interpret" checked="" tabIndex="0" className="hidden" />
                    <label>Need a Professional Guide</label>
                  </div>
                </div>
                <div className="field">
                  <div className="ui radio checkbox">
                    <input type="radio" name="interpret" tabIndex="0" className="hidden" />
                    <label>Need a Basic Interpreter</label>
                  </div>
                </div>
                <div className="field">
                  <div className="ui radio checkbox">
                    <input type="radio" name="interpret" tabIndex="0" className="hidden" />
                    <label>No Need</label>
                  </div>
                </div>
              </div>
              <div className="field">
                <button className="ui red left floated button">Add Day</button>
                <input type="submit" value="ログイン" className="ui green right floated button"/>
              </div>
            </form>
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

Contact.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect(mapStateProps)(Contact);
