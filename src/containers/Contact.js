// This file bootstraps the app with the boilerplate necessary
// to support hot reloading in Redux
import React, {PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { default as Header } from "../components/Header";
import { default as NavBar } from "../components/NavBar";
import { default as Footer } from "../components/Footer";
import { default as NavBarFooter } from "../components/NavBarFooter";
import { default as Copyright } from "../components/Copyright";
//import { sendEmail } from "../actions/ContactActions";

import { default as AddDay } from "../components/forms/AddDay";

let fieldsValidations = {
  name: {
          identifier : 'name',
          rules: [
            {
              type   : 'empty',
              prompt : 'Name is required'
            }
          ]
        },
        email: {
          identifier : 'email',
          rules: [
            {
              type   : 'email',
              prompt : 'Please enter a valid e-mail'
            },
            {
              type   : 'empty',
              prompt : 'Email is required'
            }
          ]
        },
        numPassengers:{
          identifier:'numPassengers',
          rules:[
            {
              type:'integer',
              prompt : 'Please enter a valid number'
            },
            {
              type:'empty',
              prompt : 'Number of passengers is required'
            }
          ]
        },
        numSuitcases:{
          identifier:'numSuitcases',
          rules:[
            {
              type:'integer',
              prompt : 'Please enter a valid number'
            },
            {
              type:'empty',
              prompt : 'Number of suitcases is required'
            }
          ]
        },
        pickUpTime1: {
          identifier : 'pickUpTime1',
          rules: [
            {
              type   : 'empty',
              prompt : 'Pick Up Time is required'
            }
          ]
        },
        pickUpLocation1: {
          identifier : 'pickUpLocation1',
          rules: [
            {
              type   : 'empty',
              prompt : 'Pick Up Location is required'
            }
          ]
        },
        dropOfTime1: {
          identifier : 'dropOfTime1',
          rules: [
            {
              type   : 'empty',
              prompt : 'Drop Of Time is required'
            }
          ]
        },
        dropOfLocation1: {
          identifier : 'dropOfLocation1',
          rules: [
            {
              type   : 'empty',
              prompt : 'Drop Of Location is required'
            }
          ]
        }
      }

class Contact extends React.Component{
  componentDidMount(){
    console.log('componentDidMount');
    let dispatch = this.props.dispatch;
    $('.ui.form').form({
      fields: fieldsValidations,
      inline:true,
      onSuccess: this.handleSubmit
    });
  }
  componentDidUpdate(){
    $('.ui.form').form('destroy');
    $('.ui.form').form({
      fields: fieldsValidations,
      inline:true,
      onSuccess: this.handleSubmit
    });
  }
  handleSubmit(d){
    console.log("handleSubmit");
    console.log(d);
    let email='';
    for(let i=0;i<d.target.length;i++)
    {
      switch(d.target[i].name){
        case 'email':
          email=$('.ui.form').form('get field', d.target[i].name).val();
          break;
      }
      /*if(d.target.type=='button')
        break;
      if(d.target[i].name!="")
        console.log($('.ui.form').form('get field', d.target[i].name).val());
      else
        console.log(d.target[i].value);
      */
    }
    console.log(email);
    
    var formData = {
      api_user:"miguel88",
      api_key:"miguel01",
      to:email,
      toname:"Japan Bus",
      subject:"Only testing",
      html:"<h3>This is a test of an email</h3>",
      from:"test@gmail.com"
    };
 
    $.ajax({
        url : "https://api.sendgrid.com/api/mail.send.json",
        type: "POST",
        data : formData,
        success: function(data, textStatus, jqXHR)
        {
            //data - response from server
            console.log(data);
        },
        error: function (jqXHR, textStatus, errorThrown)
        {
     
        }
    });
  }
  addDay() {
    let size = this.props.size + 1;
    console.log('size' + size);
    let datos = this.props.data;
    datos.push(size);
    let dispatch = this.props.dispatch;
    fieldsValidations['pickUpTime'+size]={
          identifier : 'pickUpTime'+size,
          rules: [
            {
              type   : 'empty',
              prompt : 'Pick Up Time is required'
            }
          ]
        };
    fieldsValidations['pickUpLocation'+size]={
          identifier : 'pickUpLocation'+size,
          rules: [
            {
              type   : 'empty',
              prompt : 'Pick Up Location is required'
            }
          ]
        };
    fieldsValidations['dropOfTime'+size]={
          identifier : 'dropOfTime'+size,
          rules: [
            {
              type   : 'empty',
              prompt : 'Drop Of Time is required'
            }
          ]
        };
    fieldsValidations['dropOfLocation'+size]={
          identifier : 'dropOfLocation'+size,
          rules: [
            {
              type   : 'empty',
              prompt : 'Drop Of Location is required'
            }
          ]
        };
    dispatch({type:"ADD_DAYS", size:size, data:datos});
  }
  removeDay() {
    let size = this.props.size - 1;
    let datos = this.props.data;
    datos = datos.slice(0,size);
    let dispatch = this.props.dispatch;
    dispatch({type:"ADD_DAYS", size:size, data:datos});
  }
  render() {
    const {dispatch} = this.props;
    let dias=this.props.data;
    let size=this.props.size;
    console.log("dias"+ dias);
    var days = dias.map(function(day) {
      return (<AddDay day={day} key={day}/>);
    });
    let deleteButton='';
    if(size>1){
      deleteButton = <button className="ui red left floated button" onClick={e=>{e.preventDefault(); this.removeDay()}}>Remove Day</button>;
    }
    return (
      <div>
        <Header />
        <NavBar />
        <div className="ui one column grid container">
          <div className="column">
            <form className="ui form" onSubmit={e=>{
              let p = this.props;
              const {isCorrect} = p;
              console.log('in submit form');
              e.preventDefault();
            }}>
              <h1 className="ui dividing header red">Free Quote </h1>
              <div className="required field">
                <label>Name</label>
                <div className="fields">
                  <div className="two wide field">
                    <select ref="personType" name="personType" className="ui fluid dropdown">
                      <option value="Mr">Mr</option>
                      <option value="Mrs">Mrs</option>
                      <option value="Ms">Ms</option>
                    </select>
                  </div>
                  <div className="fourteen wide field">
                    <input type="text" name="name" ref="name" placeholder="Name" />
                  </div>
                </div>
              </div>
              <div className="two fields">
                <div className="field">
                  <label>Group Name</label>
                  <input type="text" name="groupName" ref="groupName" placeholder="Group Name" />
                </div>
                <div className="field">
                  <label>Country</label>
                  <select name="country" ref="country" className="ui fluid dropdown">
                    <option value="Japan">Japan</option>
                  </select>
                </div>
              </div>
              <div className="field">
                <div className="fields">
                  <div className="eight wide required field">
                    <label>Email</label>
                    <input type="email" name="email" placeholder="Email" />
                  </div>
                  <div className="two wide field">
                    <label>Country Code</label>
                    <input type="text" name="countryCode" placeholder="Country code +81" />
                  </div>
                  <div className="six wide field">
                    <label>Phone Number</label>
                    <input type="text" name="phoneNumber" placeholder="Phone Number" />
                  </div>
                </div>
              </div>
              <div className="two fields">
                <div className="required field">
                  <label>Service Type</label>
                  <select name="serviceType" className="ui fluid dropdown">
                    <option value="Airport">Airport</option>
                    <option value="Charter&hire">Charter & hire</option>
                    <option value="other">other services</option>
                  </select>
                </div>
                <div className="field">
                  <label>Vehicle</label>
                  <select name="vehicle" className="ui fluid dropdown">
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
                <div className="required field">
                  <label>Passengers</label>
                  <input type="number" name="numPassengers" placeholder="Number of Passengers" />
                </div>
                <div className="required field">
                  <label>Number of Suitcases</label>
                  <input type="number" name="numSuitcases" placeholder="Number of Suitcases" />
                </div>
              </div>
              {days}
              <div className="field">
                <button className="ui red left floated button" onClick={e=>{e.preventDefault(); this.addDay()}}>Add Day</button>
                {deleteButton}
                <button className="ui green right floated button">SUBMIT</button>
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
    const { days } = state
    const { data, size, isCorrect } = days;

    return {
        data, size, isCorrect
    };
}

Contact.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect(mapStateProps)(Contact);
