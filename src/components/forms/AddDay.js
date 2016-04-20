import React, {PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {DatePicker, DatePickerInput} from 'rc-datepicker';
import ReactDOM  from 'react-dom';

class AddDay extends React.Component{
  componentDidMount(){
    $('.ui.radio.checkbox').checkbox();
  }
  render() {
    let day = this.props.day;
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    return (
      <div className="days">
        <h3 className="ui dividing header">Day {day}</h3>
          <div className="field">
            <div className="fields">
              <div className="four wide required field">
                <label>Pick Up Date</label>
                <DatePickerInput displayFormat='DD/MM/YYYY' returnFormat='YYYY-MM-DD' className='my-react-component'
                  onChange={(jsDate, dateString) => this.setState({datePickerInputDate: dateString})} 
                  defaultValue={yesterday}
                  showOnInputClick
                  placeholder='placeholder'
                  locale='es'
                  iconClassName='calendar icon'/>
              </div>
              <div className="two wide required field">
                <label>Pick Up Time</label>
                <input type="text" name={'pickUpTime' + day} placeholder="06:39" />
              </div>
              <div className="two wide field">
                <label>&nbsp;</label>
                <select name={'pickUpTimeMeridiane' + day} className="ui fluid dropdown">
                    <option value="AM">AM</option>
                    <option value="PM">PM</option>
                 </select>
              </div>
              <div className="eight wide required field">
                <label>Pick Up Location</label>
                <input type="text" name={'pickUpLocation' + day} placeholder="Pick Up Location" />
              </div>
            </div>
          </div>
          <div className="field">
            <div className="fields">
              <div className="four wide required field">
                <label>Drop of Date</label>
                <DatePickerInput displayFormat='DD/MM/YYYY' returnFormat='YYYY-MM-DD' className='my-react-component'
                  onChange={(jsDate, dateString) => this.setState({datePickerInputDate: dateString})} 
                  defaultValue={yesterday}
                  showOnInputClick
                  placeholder='placeholder'
                  locale='es'
                  iconClassName='calendar icon'/>
              </div>
              <div className="two wide field">
                <label>Drop Off Time</label>
                <input type="text" name={'dropOfTime' + day} placeholder="06:39" />
              </div>
              <div className="two wide field">
                <label>&nbsp;</label>
                <select name={'dropOfTimeMeridiane' + day} className="ui fluid dropdown">
                    <option value="AM">AM</option>
                    <option value="PM">PM</option>
                 </select>
              </div>
              <div className="eight wide required field">
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