import React, { Component, PropTypes} from "react";
import { render } from 'react-dom';
import { connect } from 'react-redux';
import { Router } from 'react-router'
import {
  RECEIVE_VEHICLES_DATA,
  AWAIT_NEW_VEHICLE_RESPONSE,
  RECEIVE_NEW_VEHICLE_RESPONSE,
  START_VEHICLE_EDIT,
  FINISH_VEHICLE_EDIT,
  SUBMIT_VEHICLE_EDIT,
  EDITING_VEHICLE,
  SUBMITTING_VEHICLE
} from "../../constants/ActionTypes";

class Vehicle extends Component {
	render(){
		var p = this.props,
			q = p.vehicle,
			button;
		if (p.state === EDITING_VEHICLE){
			return (
				<div className="ui form">
					<form onSubmit={e=>{var p = this.props;
						let model = this.refs.modelEdit.value;
						let price = this.refs.priceEdit.value;
						let values = {model,price};
						p.submit(values);
						this.refs.modelEdit.value = "";
						this.refs.priceEdit.value = "";
						e.preventDefault();
					}}>
						<input ref="modelEdit" defaultValue={q.model}/>
						<input ref="priceEdit" defaultValue={q.price}/>
						<button className="tiny ui button" type="button" onClick={p.cancel}>Cancel</button>
						<button className="tiny ui button" type="submit" onClick={e=>{var p = this.props;
							let model = this.refs.modelEdit.value;
							let price = this.refs.priceEdit.value;
							let values = {model,price};
							p.submit(values);
							this.refs.modelEdit.value = "";
							this.refs.priceEdit.value = "";
							e.preventDefault();
						}}>Submit</button>
					</form>
				</div>
			);
		}
		if (!p.mayedit){
			button = <span>
						<button className="tiny ui button" onClick={p.edit}>Edit</button>
						<button className="tiny ui button" onClick={p.delete}>Delete</button>
					</span>;
		} else if (p.state === SUBMITTING_VEHICLE){
			button = <button className="tiny ui button" disabled="disabled">Submitting...</button>;
		} else {
			button = <span>
						<button className="tiny ui button" onClick={p.edit}>Edit</button>
						<button className="tiny ui button" onClick={p.delete}>Delete</button>
					</span>;
		}
		return (
			<div className="ui vertical segment">
				<div className="ui centered grid">
				<div className="row"><div className="column"><p>{q.model}</p></div></div>	
				<div className="row"><div className="column"><p>{q.price}</p></div></div>
				<div className="row"><div className=" column right aligned "><p>{button}</p></div></div>					
			</div>
			</div>
		);
	}
}

Vehicle.contextType = {
    store: PropTypes.any,
    router: PropTypes.any
}

Vehicle = connect()(Vehicle);


export default Vehicle;

