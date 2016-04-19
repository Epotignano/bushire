import React, {PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class AddDay extends React.Component{
  componentDidMount(){
    $('.ui.radio.checkbox').checkbox();
  }
  render() {
    let day = this.props.day;
    return (
      <div className="days">
        <h3 className="ui dividing header">Day {day}</h3>
          <div className="field">
            <div className="fields">
              <div className="three wide required field">
                <label>Pick Up Time</label>
                <input type="text" name={'pickUpTime' + day} placeholder="01/02/2016 06:39" />
              </div>
              <div className="two wide field">
                <label>&nbsp;</label>
                <select name={'pickUpTimeMeridiane' + day} className="ui fluid dropdown">
                    <option value="AM">AM</option>
                    <option value="PM">PM</option>
                 </select>
              </div>
              <div className="eleven wide required field">
                <label>Pick Up Location</label>
                <input type="text" name={'pickUpLocation' + day} placeholder="Pick Up Location" />
              </div>
            </div>
          </div>
          <div className="field">
            <div className="fields">
              <div className="three wide field">
                <label>Drop Off Time</label>
                <input type="text" name={'dropOfTime' + day} placeholder="01/02/2016 06:39" />
              </div>
              <div className="two wide field">
                <label>&nbsp;</label>
                <select name={'dropOfTimeMeridiane' + day} className="ui fluid dropdown">
                    <option value="AM">AM</option>
                    <option value="PM">PM</option>
                 </select>
              </div>
              <div className="eleven wide required field">
                <label>Drop Of Location</label>
                <input type="text" name={'dropOfLocation' + day} placeholder="Drop Of Location" />
              </div>
            </div>
          </div>
          <div className="field">
            <label>Trip Itinerary</label>
            <textarea name={'tripItenerary' + day}></textarea>
          </div>
          <div className="grouped fields">
            <label htmlFor={'interpret' + day}>Interpreting Service</label>
            <div className="field">
              <div className="ui radio checkbox">
                <input type="radio" name={'interpret' + day} checked="true" tabIndex="0" className="hidden" />
                <label>Need a Professional Guide</label>
              </div>
            </div>
            <div className="field">
              <div className="ui radio checkbox">
                <input type="radio" name={'interpret' + day} tabIndex="0" className="hidden" />
                <label>Need a Basic Interpreter</label>
              </div>
            </div>
            <div className="field">
              <div className="ui radio checkbox">
                <input type="radio" name={'interpret' + day} tabIndex="0" className="hidden" />
                <label>No Need</label>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

AddDay.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect()(AddDay);