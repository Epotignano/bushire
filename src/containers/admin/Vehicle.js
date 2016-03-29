import React, {PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Vehicle extends React.Component {
  render(){
    return(
      <div className="row">
        <div className="column">
            <h1>Lista de vehiculos</h1>
        </div>
      </div>
    );
  }
}

module.exports = Vehicle;